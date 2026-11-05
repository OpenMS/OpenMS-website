/**
 * OpenMS agent feedback endpoint (Google Apps Script web app).
 *
 * Receives a form-encoded POST from AI agents (see static/llms.txt) and appends it
 * to a Google Sheet. Setup: docs/reference/agent-feedback.md
 *
 * Script properties (Project Settings -> Script properties):
 *   SHEET_ID      id of the Google Sheet that stores the answers
 */

var SHEET_NAME = 'agent-feedback';
var HEADERS = ['timestamp', 'agent', 'task', 'feedback', 'page', 'contact'];
var MAX_FIELD = 4000;      // characters kept per field
var MAX_SAVED_PER_DAY = 500;

function doPost(e) {
  var p = (e && e.parameter) || {};

  // Spam trap: the form has a hidden field that people never fill in.
  if (p['bot-field']) return reply_({ok: true});

  var missing = ['agent', 'task', 'feedback'].filter(function (k) {
    return !clean_(p[k]);
  });
  if (missing.length) {
    return reply_({ok: false, error: 'missing required field(s): ' + missing.join(', ')});
  }

  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var props = PropertiesService.getScriptProperties();
    var today = Utilities.formatDate(new Date(), 'UTC', 'yyyy-MM-dd');
    var counts = JSON.parse(props.getProperty('counts') || '{}');
    if (counts.day !== today) counts = {day: today, saved: 0};

    if (counts.saved >= MAX_SAVED_PER_DAY) {
      return reply_({ok: false, error: 'daily limit reached, try again tomorrow'});
    }

    var row = [new Date(), p.agent, p.task, p.feedback, p.page, p.contact].map(function (v, i) {
      return i === 0 ? v : sheetSafe_(clean_(v));
    });
    sheet_().appendRow(row);
    counts.saved++;

    props.setProperty('counts', JSON.stringify(counts));
  } finally {
    lock.releaseLock();
  }
  return reply_({ok: true, message: 'Thank you, your feedback was received.'});
}

// Lets people open the URL in a browser to check that the deployment works.
function doGet() {
  return reply_({ok: true, message: 'OpenMS agent feedback endpoint. Send a POST, see https://openms.de/llms.txt'});
}

function sheet_() {
  var ss = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty('SHEET_ID'));
  var sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(HEADERS);
  }
  return sh;
}

function clean_(v) {
  return String(v === undefined || v === null ? '' : v).trim().slice(0, MAX_FIELD);
}

// Stop spreadsheet formulas (=, +, -, @) from running when the sheet is opened.
function sheetSafe_(s) {
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function reply_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
