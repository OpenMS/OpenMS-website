---
title: Markdown Formatting Test
authors: ["OpenMS Team"]
date: 2026-10-11
summary: A test post that exercises the Markdown elements the OpenMS website theme should be able to render.
---

This post exists only to check how the Hugo theme renders common Markdown elements. If something below looks broken, unstyled, or missing, that element needs attention in the theme.

## Headings

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

## Inline formatting

Plain text, **bold**, *italic*, ***bold and italic***, ~~strikethrough~~, and `inline code`.

A line with a [link to OpenMS](https://www.openms.org) and an autolink: <https://github.com/OpenMS/OpenMS>.

Special characters: & < > " ' and an em dash — plus an ellipsis...

A hard line break follows this sentence.  
This line comes right after it.

## Bullet lists

- First item
- Second item
  - Nested item
  - Another nested item
    - Deeply nested item
- Third item

## Numbered lists

1. First step
2. Second step
   1. Sub-step A
   2. Sub-step B
3. Third step

## Deeply nested numbered lists

1. Level 1, item 1
   1. Level 2, item 1
      1. Level 3, item 1
         1. Level 4, item 1
            1. Level 5, item 1
            2. Level 5, item 2
         2. Level 4, item 2
      2. Level 3, item 2
   2. Level 2, item 2
      1. Level 3, item 1
      2. Level 3, item 2
2. Level 1, item 2
   1. Level 2, item 1
      1. Level 3, item 1
         1. Level 4, item 1
3. Level 1, item 3

Nested numbered lists with paragraphs and code at depth:

1. Install the dependencies
   1. Build tools
      1. Linux

         ```bash
         sudo apt-get install build-essential cmake
         ```

      2. macOS

         ```bash
         xcode-select --install
         ```

   2. Python packages

      Install with `pip`:

      ```bash
      pip install pyopenms
      ```

2. Run the workflow
   1. Prepare the inputs
   2. Execute
      1. Single file
      2. Batch mode
         1. Sequential
         2. Parallel

## Mixed lists

1. Numbered item with nested bullets
   - Bullet inside numbered
   - Another bullet
2. Numbered item with a paragraph

   This paragraph belongs to item 2 and should be indented.

3. Numbered item with a code block

   ```bash
   echo "code inside a list item"
   ```

## Task list

- [x] Completed task
- [ ] Open task
- [ ] Another open task

## Code blocks

Fenced block with no language:

```
plain text block
no syntax highlighting
```

Python:

```python
import pyopenms as oms

def load_experiment(path: str) -> oms.MSExperiment:
    exp = oms.MSExperiment()
    oms.MzMLFile().load(path, exp)
    return exp

print(f"Spectra: {load_experiment('sample.mzML').size()}")
```

Bash:

```bash
cmake -DCMAKE_BUILD_TYPE=Release ..
make -j"$(nproc)"
```

C++:

```cpp
#include <OpenMS/FORMAT/MzMLFile.h>

int main()
{
  OpenMS::MSExperiment exp;
  OpenMS::MzMLFile().load("sample.mzML", exp);
  return 0;
}
```

YAML:

```yaml
name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
```

JSON:

```json
{
  "name": "OpenMS",
  "version": "3.x",
  "tools": ["FeatureFinderCentroided", "OpenSwathWorkflow"]
}
```

Diff:

```diff
- old line
+ new line
```

Indented code block (four spaces):

    no fence, just indentation
    second line

## Blockquotes

> A single-line blockquote.

> A multi-paragraph blockquote.
>
> Second paragraph with **bold** and `inline code`.
>
> > A nested blockquote.

## Tables

| Tool                  | Purpose                | Language |
|-----------------------|------------------------|----------|
| OpenSwathWorkflow     | DIA targeted analysis  | C++      |
| FeatureFinderCentroided | Feature detection    | C++      |
| pyOpenMS              | Python bindings        | Python   |

Alignment test:

| Left | Center | Right |
|:-----|:------:|------:|
| a    | b      | c     |
| 1    | 2      | 3     |
| 10   | 20     | 30    |

## Horizontal rule

Above the rule.

---

Below the rule.

## Collapsible text

<details>
<summary>Click to expand this section (visible)</summary>

This content is hidden by default. It can contain **Markdown**, `inline code`, and more:

- A bullet list
- A [link](https://www.openms.org)
- A code block:

```python
print("Inside the collapsible section")
```

</details>

<details>
<summary>Another collapsible section</summary>

More hidden content that only appears when expanded.

</details>

## Images

![OpenMS logo](/images/logos/OpenMS_transparent_blackFont.svg)

## Footnotes

This sentence has a footnote.[^1] This one has another.[^2]

[^1]: First footnote text.
[^2]: Second footnote text, with `inline code`.

## Definition list

Term one
: Definition of term one.

Term two
: Definition of term two.

## Escaping

\*Not italic\*, \`not code\`, and \# not a heading.

## Long paragraph

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

## Very long unbroken string

Checks overflow handling: `aVeryLongUnbrokenStringWithNoSpacesThatShouldNotBreakTheLayoutOfThePageOnNarrowScreensOrMobileDevices_0123456789`
