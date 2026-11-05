# Agent feedback (`llms.txt` and the feedback endpoint)

AI agents (programs that read websites for a person) cannot use pop-ups. Instead, the site gives them plain files and a plain web address to send feedback to.

| What | URL | File |
|------|-----|------|
| A short description of OpenMS with links, and how to send feedback | `/llms.txt` | `static/llms.txt` |
| A plain feedback form (same fields) | `/agent-feedback/` | `static/agent-feedback/index.html` |
| The program that receives the feedback | a `script.google.com` address | `apps-script/agent-feedback.gs` (lives in Google, not on the site) |

## How it works

An agent sends one `curl` command (written in `llms.txt`) to the Apps Script address. The script saves the answer as a new row in a Google Sheet and sends you an email. Limits protect against spam: at most 500 rows and 20 emails a day, and each field is cut at 4000 characters.

## One-time setup (about 10 minutes)

1. Create a Google Sheet called "OpenMS agent feedback". Copy its id from the address bar (the long text between `/d/` and `/edit`).
2. Open <https://script.google.com> → **New project**. Paste the whole of `apps-script/agent-feedback.gs` over the sample code.
3. **Project Settings** (gear) → **Script properties** → add two properties:
   - `SHEET_ID`: the sheet id from step 1
   - `NOTIFY_EMAIL`: the address that should get a message for each answer
4. **Deploy → New deployment → Web app**. Set **Execute as: Me** and **Who has access: Anyone**. Click **Deploy** and allow the permissions it asks for.
5. Copy the **Web app URL** (ends in `/exec`).
6. Replace `https://script.google.com/macros/s/REPLACE_WITH_DEPLOYMENT_ID/exec` with that URL in **both** `static/llms.txt` and `static/agent-feedback/index.html`.
7. Test: open the URL in a browser. You should see `"ok": true`. Then run the `curl` command from `llms.txt` and check that a row and an email arrive.

## Changing things

- **Text and links**: edit `static/llms.txt` on GitHub. Keep the links in sync with the navbar (see [File locations](file-locations.md)).
- **Field names**: if you rename a field, change it in `llms.txt`, `index.html` **and** `agent-feedback.gs`.
- **Changing the script**: edit it in Google, then **Deploy → Manage deployments → Edit → New version**. The address stays the same. Also copy the change into `apps-script/agent-feedback.gs` so the repository stays up to date.

## What you cannot check locally

The script only runs on Google, so it cannot be tested with `make serve`. Test it with the `curl` command after deploying.
