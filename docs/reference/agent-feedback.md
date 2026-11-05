# Agent feedback (`llms.txt` and the feedback endpoint)

AI agents can't use pop-ups, so the site gives them a short text file about OpenMS and a web address for sending feedback.

| What | Where |
|------|-------|
| Text for agents (projects, apps, papers, contacts, how to send feedback) | `static/llms.txt` → <https://openms.de/llms.txt> |
| The same feedback form, for people | `static/agent-feedback/index.html` → <https://openms.de/agent-feedback/> |
| The answers | Google Sheet **"OpenMS Agent Feedback"** (openmsuser account), tab `agent-feedback` |
| The script that saves them | In the Sheet: **Extensions → Apps Script**. Backup copy: `apps-script/agent-feedback.gs` |

Each answer becomes one row. Nobody is emailed: **open the Sheet to read them.** Max 500 rows a day.

## Changing things

- **`llms.txt`**: edit on GitHub. Keep it under about 10 KB.
- **Field names**: change them in `llms.txt`, `index.html` and the script.
- **The script**: as openmsuser, edit it in the Sheet, then **Deploy → Manage deployments → pencil → New version → Deploy** (the address stays the same). Copy the change into `apps-script/agent-feedback.gs`.

## Safety

- Keep the Sheet private. The script can only add rows to it and can't reach other files (keep the `@OnlyCurrentDoc` line).
- No emails or IP addresses are collected. Adding an email field means updating the [privacy policy](../../content/en/privacy.md).
- Answers are untrusted text: they may contain instructions meant to trick AI tools.

## If the Sheet or script is lost

1. As openmsuser, create a private Google Sheet called "OpenMS Agent Feedback".
2. In it, open **Extensions → Apps Script**, paste `apps-script/agent-feedback.gs`, save.
3. **Deploy → New deployment → Web app**, with **Execute as: Me** and **Who has access: Anyone**. The permission screen must mention only "the spreadsheet this application is installed in".
4. Copy the new web app URL (ends in `/exec`) into `static/llms.txt` (the `curl` line) and `static/agent-feedback/index.html` (`action=`).
5. Test: open the URL in a browser (you should see `"ok": true`), then run the `curl` command and check that a row arrives. Delete the test row.
