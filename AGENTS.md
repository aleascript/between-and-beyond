# AGENTS.md

Guidance for AI assistants working on this repository.

## The game

**Metaxy** is a tabletop role-playing game about our relationship with what exceeds us. Players take on **Agents**: figures that stand between humans and a **Power** (vampires, angels, psychopomps, fae…). The name comes from Diotima's *metaxy* (Plato, *Symposium*, 202d–e), the in-between where the daimon stands. Role-playing is itself a metaxy: the human of the game's purpose is the player at the table.

Read [docs/fr/purpose.md](docs/fr/purpose.md), [docs/fr/core-rules.md](docs/fr/core-rules.md) and [docs/fr/horizons.md](docs/fr/horizons.md) before proposing anything.

## Vocabulary

| FR | EN | Meaning |
| --- | --- | --- |
| Horizon | Horizon | What exceeds us (Death, the Divine, Dreams…). A point of view, never a place or a character. The unit of play. |
| Puissance | Power | One form an Horizon has taken across ages and cultures, described by a few **Attributs / Attributes**. |
| Agent | Agent | What a Power becomes present through. Played by the players. |
| Lien | Bond | What passes from the Power through the Agent. Bond keywords are certain but belong to the Power. |
| Devenir | Becoming | What is not determined by what already is. Acquired keywords are uncertain but belong to the Agent. |
| Mise | Bet | An element of the fiction that weighs on a resolution. |

Two Powers never confront each other directly: their Agents do. An Agent can extend their Power by bringing it a novelty it did not contain; an acquired keyword can then become a Bond keyword.

## Design principles

- **Rules emerge from the game, never the reverse** (the author's *Resonance* approach to RPG design). A rule must reflect what is at stake in the fiction; no gimmick rules, tokens, or add-on subsystems. *The Strange* is the reference antipattern: it starts from rules and bolts worlds onto them.
- Every Horizon must answer the three questions of "Why Agents?": the difference of scale, what each side experiences, what is transformed. A figure that answers none of them does not belong, however cool.
- Mythic figures are taken seriously, neither as primitive nonsense nor as detachable tropes.
- **Presence** is a dice-free moment between an Agent and their Power (three cases, Attribute transformation "without denying itself", the two exits: becoming human or becoming a Power). It was designed with the author: do not reintroduce dice or Bets into it, and keep the pages that mention it consistent.

## Horizon pages

Each Horizon page follows the same structure: epigraph, introduction, *Pourquoi des Agents* (the three questions), four Powers with four Attributes each, four Agent families (Bond type, three Bond keywords, "what the figure lets us think"), novelties (*Ce qui apparaît*), an example Agent whose acquired keyword can become a Bond keyword, situations along the directions of [docs/fr/situations.md](docs/fr/situations.md) (mediation, bring, contend for, transform one's own Power), tones and time. Distinguish a new Horizon from existing ones where they overlap.

Draw on public-domain myths, folklore, and texts. Do not borrow from copyrighted works.

## Repository

- Docusaurus site, Node 24. Content lives symmetrically in `docs/fr/` and `docs/en/`: every page exists in both languages with the same file name and `id`. French is the authoring language; the English pages use American spelling and follow the headings of the existing English pages.
- A new page must also be added to `sidebars.ts`, to `publications.config.mjs` (both locales), and to the relevant index pages (`docs/*/index.md`, `docs/*/horizons.md`).
- Before committing, run `npm run typecheck`, `npm run build` (both locales, fails on broken links) and, when publication content changes, `npm run publication:build` (PDFs). CI runs the same steps.
- The publication also ships as a single Markdown file for LLMs (`md` output). `publication/ai/{fr,en}.md` is its appendix of instructions for the AI; keep it in line with the rules when they change.
- Commits follow Conventional Commits (`feat:`, `fix:`, `docs:`…): Semantic Release versions the publications from them.
- The GitHub repository is the source of truth. The author's Notion is a working space for ideas not yet integrated.
