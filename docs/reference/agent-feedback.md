# Agent feedback (`llms.txt` and the feedback endpoint)

AI agents (programs that read websites for a person) cannot use pop-ups. Instead, the site gives them plain files and a plain web address to send feedback to.

| What | URL | File |
|------|-----|------|
| A short description of OpenMS with links, and how to send feedback | `/llms.txt` | `static/llms.txt` |
| A plain feedback form (same fields) | `/agent-feedback/` | `static/agent-feedback/index.html` |
| The program that receives the feedback | a `script.google.com` address | `apps-script/agent-feedback.gs` (lives in Google, not on the site) |

## How it works

An agent sends one `curl` command (written in `llms.txt`) to the Apps Script address. The script saves the answer as a new row in a Google Sheet. There is no email: open the Sheet to read the answers. A limit protects against spam: at most 500 rows a day, and each field is cut at 4000 characters.

## One-time setup (about 10 minutes)

Use a **shared OpenMS Google account**, not a personal one. The script runs as the account that deploys it, and that account owns the answers.

1. Create a Google Sheet called "OpenMS agent feedback". Keep it private: do not use "Publish to web" or share it by public link.
2. In the Sheet, open **Extensions → Apps Script**. Paste the whole of `apps-script/agent-feedback.gs` over the sample code and save. Creating the script from inside the Sheet matters: together with the `@OnlyCurrentDoc` line at the top, it limits the script to this one Sheet.
3. **Deploy → New deployment → Web app**. Set **Execute as: Me** and **Who has access: Anyone**. Click **Deploy** and allow the permissions it asks for. The permission screen should mention only **"the spreadsheet this application is installed in"**. If it asks for **all** your spreadsheets, stop: the `@OnlyCurrentDoc` line is missing or the script was not created from the Sheet.
4. Copy the **Web app URL** (ends in `/exec`).
5. Put that URL in **both** `static/llms.txt` (the `curl` line) and `static/agent-feedback/index.html` (the `action=` of the form). Only needed for a **new** deployment: editing an existing one with **New version** keeps the same URL.
6. Test: open the URL in a browser. You should see `"ok": true`. Then run the `curl` command from `llms.txt` and check that a row arrives in a new `agent-feedback` tab of the Sheet. Delete the test row.

## Safety notes

- Anyone can send feedback, but they can only add rows. They cannot read the Sheet or reach other files.
- The form collects **no contact details**, so no personal data is asked for. Do not add an email field without updating the [privacy policy](../../content/en/privacy.md).
- Treat the answers as untrusted text. If you paste them into an AI tool, it may contain instructions meant to trick that tool.

## Changing things

- **Text and links**: edit `static/llms.txt` on GitHub. Keep the links in sync with the navbar (see [File locations](file-locations.md)).
- **Field names**: if you rename a field, change it in `llms.txt`, `index.html` **and** `agent-feedback.gs`.
- **Changing the script**: edit it in Google, then **Deploy → Manage deployments → Edit → New version**. The address stays the same. Also copy the change into `apps-script/agent-feedback.gs` so the repository stays up to date.

## What you cannot check locally

The script only runs on Google, so it cannot be tested with `make serve`. Test it with the `curl` command after deploying.
