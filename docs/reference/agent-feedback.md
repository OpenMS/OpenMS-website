# Agent feedback (`llms.txt` and the feedback endpoint)

AI agents (programs that read websites for a person) cannot use pop-ups. Instead, the site gives them a short text file about OpenMS and a web address where they can send feedback.

## Where everything lives

| What | Where |
|------|-------|
| Text for agents: what OpenMS is, its projects, apps, key papers, contacts, and how to send feedback | `static/llms.txt` → <https://openms.de/llms.txt> |
| A feedback form for people (same fields) | `static/agent-feedback/index.html` → <https://openms.de/agent-feedback/> |
| The answers | A Google Sheet in the **openmsuser** Google account, tab `agent-feedback` |
| The program that saves the answers | An Apps Script attached to that Sheet (open the Sheet → **Extensions → Apps Script**). A copy of the code is in `apps-script/agent-feedback.gs`. |

## How it works

1. An agent sends the `curl` command written in `llms.txt` (or someone fills in the form).
2. The Apps Script adds one row to the Sheet: time, agent, task, feedback, page, model.
3. Nobody is emailed. **To read the answers, open the Sheet.**

Limits: at most 500 rows a day, and each field is cut at 4000 characters.

## Changing things

- **Text in `llms.txt`**: edit it on GitHub. Keep it short (under about 10 KB) so every AI model can read it in full. Partnership and sponsorship questions go to `ceo@openms.de`.
- **Field names**: change them in `llms.txt`, `index.html` **and** the script.
- **The script**: log in as openmsuser, open the Sheet → **Extensions → Apps Script**, edit, save, then **Deploy → Manage deployments → pencil icon → Version: New version → Deploy**. The web address stays the same. Copy the change into `apps-script/agent-feedback.gs` too.

## Safety

- Anyone can add rows, but nobody can read the Sheet through the script. Keep the Sheet private (no "Publish to web", no public link).
- The script can only reach this one Sheet (the `@OnlyCurrentDoc` line at the top of the code). Do not remove it.
- No email addresses or IP addresses are collected. Do not add an email field without updating the [privacy policy](../../content/en/privacy.md).
- Treat answers as untrusted text. If you paste them into an AI tool, they may contain instructions meant to trick it.

## Setting it up again (only if the script or Sheet is lost)

1. As openmsuser, create a private Google Sheet.
2. In it, open **Extensions → Apps Script**, paste `apps-script/agent-feedback.gs`, save.
3. **Deploy → New deployment → Web app**, with **Execute as: Me** and **Who has access: Anyone**. The permission screen must mention only "the spreadsheet this application is installed in".
4. Copy the new web app URL (ends in `/exec`) into `static/llms.txt` (the `curl` line) and `static/agent-feedback/index.html` (`action=`).
5. Test: open the URL in a browser (you should see `"ok": true`), then run the `curl` command and check that a row arrives. Delete the test row.

The script runs only on Google, so `make serve` cannot test it.
