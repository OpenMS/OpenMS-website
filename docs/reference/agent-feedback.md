# Agent feedback (`llms.txt` and the feedback form)

AI agents (programs that read websites for a person) cannot use pop-ups. Instead, the site gives them two plain files.

| What | URL | File |
|------|-----|------|
| A short description of OpenMS with links, and how to send feedback | `/llms.txt` | `static/llms.txt` |
| A plain feedback form | `/agent-feedback/` | `static/agent-feedback/index.html` |
| The "thank you" page after sending | `/agent-feedback/thanks/` | `static/agent-feedback/thanks/index.html` |

## How it works

- The form is a **Netlify Form** named `agent-feedback`. Netlify finds it when the site is built. An agent can send feedback with one `curl` command (the command is written in `llms.txt`), or a person can use the form.
- Answers appear in the Netlify dashboard: **Site → Forms → agent-feedback**.
- To get an email for each answer: **Site configuration → Notifications → Form submission notifications → Add notification**.
- Netlify's free plan allows a limited number of submissions per month. If the form fills up with spam, check the Netlify Forms spam settings.

## What you can change

- Edit the text and links in `static/llms.txt` on GitHub. Keep the links in sync with the navbar (see [File locations](file-locations.md)).
- If you rename a form field, change it in **both** `llms.txt` and `index.html`.

## What you cannot check locally

Netlify Forms only work on the **Deploy Preview** or the live site, not on `make serve`. After merging, open **Site → Forms** in Netlify and confirm that `agent-feedback` is listed.
