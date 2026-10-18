# Edit the news and events blocks on the home page

Near the bottom of the home page, two columns show the **latest news** and the **upcoming events**. Only their **headings** are written here. The articles and the events come from other places.

**You will change:** a few lines in `config.yaml`  ·  **Time:** about 5 minutes  ·  **Skills needed:** none

## Latest news

- **The articles** are the newest ones from the News page. To add one, see [Add a news article](../news/add-news-post.md).
- **The heading and the link:** search for `newsSection` and change `homeTitle` (the heading), `homeTitleHighlight` (the coloured word, which must be in the heading) and `homeViewAllText` (the "View all" link).
- **How many articles are shown:** `homeLimit: 4`.

## Upcoming events

- **The events** come from the calendar. To add one, see [Add or change an event](../calendar/add-or-change-event.md).
- **The heading and the text:** search for `eventsSection` and change `title`, `titleHighlight`, `lead` and `calendarText` (the "View all" link).
- **How many events are shown:** `limit: 4`.
- **The message when there are no events:** `emptyEvents`.

## Step by step

Follow [How to change any block](README.md#how-to-change-any-block), searching for `newsSection` or `eventsSection`.

## Related guides

- [All the blocks of the home page](README.md)
- Back to the [list of all tasks](../README.md)
