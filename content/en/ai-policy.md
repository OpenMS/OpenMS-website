---
title: OpenMS AI Policy
subtitle: How AI assistance may be used when contributing to OpenMS, and why a human always stays accountable.
sidebar: false
hideShortcuts: true
---

*Author: Joshua Charkow*\
*Assisted-by: DeepSeek V4.0 Flash*\
*Approved by the OpenMS Executive Board, 5 November 2026.*

**We reserve the right to take measures to enforce this policy up to and including banning.**

OpenMS monitors AI-assisted contributions to its code and other content to protect the integrity of the project and maintain the scientific rigour expected of researchers. This policy keeps AI assistance useful without letting unverified or opaque AI output weaken the quality of OpenMS, and makes clear that a human always remains accountable.

## Scope

This policy applies to code, documentation, issues, website content, and other contributions across all OpenMS organization GitHub repositories.

## Highlights

- You MAY use AI assistance for contributing to OpenMS.
- You are never required to use AI. Contributors who do not use AI are equally welcome.
- AI is a tool, not a contributor. The human contributor is always fully accountable.
- Assume good intent, focus on outcomes rather than tools, and respect different workflows.

## AI Usage Principles

The following AI policy is adapted from [Fedora's AI Contribution Policy](https://docs.fedoraproject.org/en-US/council/policy/ai-contribution-policy/). Google Summer of Code contributors should additionally follow the [GSoC AI guidance](https://developers.google.com/open-source/gsoc/resources/ai_guidance).

AI assistance is optional. You MAY use it when contributing to OpenMS, but you are never required to. Contributors who do not use AI are equally welcome, and no part of the contribution process requires AI. If you use AI, you MUST follow the principles below.

### 1. Accountability

You MUST take responsibility for your contribution. Contributing to OpenMS means vouching for the quality, license compliance, and utility of your submission. All contributions, whether from a human author or assisted by large language models (LLMs) or other generative AI tools, must meet the project's standards for inclusion. The contributor is always the author and is fully accountable for the entirety of these contributions.

### 2. Transparency

You MUST disclose the use of AI tools when a significant part of the contribution is taken from a tool. You SHOULD disclose other uses of AI tools, where it might be useful. Routine use of assistive tools for correcting grammar and spelling, or for clarifying language, does not require disclosure.

Information about the use of AI tools will help us evaluate their impact, build new best practices and adjust existing processes.

- For contributions tracked in Git, disclosures MUST be made where authorship is normally indicated.
    - If substantial AI is used (e.g. agentic AI), the `Co-authored-by` commit message trailer MUST be used. Even if AI is a co-author, the human contributor always takes full responsibility for the contribution.
    - If AI is used in another capacity, the recommended method is an `Assisted-by:` commit message trailer.
- For other contributions, disclosure may include document preambles, design file metadata, translation notes, or wiki page categories.

### 3. Human Understanding

Contributors MUST understand, review, test and be able to debug AI-assisted changes. If they cannot, the contribution MUST NOT be submitted.

- For significant changes, contributors SHOULD document design intent, rationale, and expected behavior in their own words.
- Maintainers MAY close a contribution when the review burden clearly exceeds the cost of writing the change from scratch.

## Contribution and Community Evaluation

AI-assisted contributions must meet the same standards of correctness, security, maintainability, testing, and documentation as any other contribution. Reviewers should evaluate architecture, maintainability, tests, documentation, and code quality, not the method used to create the change.

AI tools may be used to assist human reviewers by providing analysis and suggestions. You MUST NOT use AI as the sole or final arbiter in making a substantive or subjective judgment on a contribution, nor may it be used to evaluate a person's standing within the community (e.g., for funding, leadership roles, or Code of Conduct matters). This does not prohibit the use of automated tooling for objective technical validation, such as CI/CD pipelines, automated testing, or spam filtering. The final accountability for accepting a contribution, even if implemented by an automated system, always rests with the human contributor who authorizes the action.

Similar to [Python contributions](https://devguide.python.org/getting-started/ai-tools/), maintainers may apply the following labels to assist with code review:

- `AI-assisted`: disclosure recorded; this is a tracking label, not a penalty.
- `AI-needs-explanation`: the contribution appears to rely on AI and the author has not demonstrated understanding; the issue/PR stays open while the author explains in their own words.
- `AI-guidelines-not-met`: the author cannot or will not provide a satisfactory explanation, or the contribution otherwise violates this policy; the issue/PR is closed.

Low-quality, unverified, or license-ambiguous contributions may be closed regardless of how they were produced.

## Questions and Reports

Questions about the policy should be asked via issues in the [OpenMS repository](https://github.com/OpenMS/OpenMS). Concerns about possible policy violations should be reported to [conduct@openms.org](mailto:conduct@openms.org) and will be discussed by the [OpenMS Executive Committee](/exec_committee/).

The key words "MAY", "MUST", "MUST NOT", and "SHOULD" in this document are to be interpreted as described in [RFC 2119](https://datatracker.ietf.org/doc/html/rfc2119).
