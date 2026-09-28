# Between & Beyond

**Between & Beyond** is a tabletop role-playing game in which the players take on Agents:
figures that stand between humanity and what exceeds it — Death, the Divine,
Dreams, the Unknown…

- Website: <https://aleascript.github.io/between-and-beyond/>
- Downloads (PDF): <https://aleascript.github.io/between-and-beyond/publications/>

This README is technical: how the repository is organized, how to work on it
locally, and how the site and publications are released. The game itself — its
purpose, rules, and Horizons — lives only in the published content under
`docs/`. Guidance for AI assistants is in [`AGENTS.md`](AGENTS.md).

The game is designed with [Resonance](https://aleascript.github.io/resonance/)
and powered by [Regard](https://aleascript.github.io/regard/). The site is built
from [resonance-site-template](https://github.com/aleascript/resonance-site-template).

## Getting started

Requirements: Node.js 24 (see `.nvmrc`).

```bash
git clone https://github.com/aleascript/between-and-beyond.git
cd between-and-beyond
npm install
npm run start:fr   # or npm run start:en
```

Docusaurus development mode serves one locale at a time, with hot reload. To
inspect the complete bilingual site exactly as it will be published:

```bash
npm run preview
```

Before opening a pull request, run the same checks as CI:

```bash
npm run check              # typecheck + build of every locale (fails on broken links)
npm run publication:build  # the PDFs, when the published content changes
```

## Repository layout

```text
docs/
├── en/                    # English content
└── fr/                    # French content (authoring language)
i18n/fr/                   # French interface strings (navbar, footer, labels)
publication/               # publication theme
src/                       # theme, components and pages
static/                    # images and other static assets
tools/                     # publication and release scripts
AGENTS.md                  # guidance for AI assistants
publications.config.mjs    # publication corpus
sidebars.ts                # site navigation
site.config.ts             # project metadata, lineage and visual tokens
```

The game content is stored symmetrically in `docs/en/` and `docs/fr/`. Each page
exists in both languages with the same filename, `id`, `slug`, and explicit
heading identifiers, so the language menu opens the equivalent page.

Adding a page means:

1. writing it in `docs/fr/` and `docs/en/`;
2. adding its `id` to `sidebars.ts`;
3. adding it to both locales in `publications.config.mjs` if it belongs in the downloadable corpus;
4. linking it from the relevant index pages.

## Editorial conventions

Design notes have their own admonition type, which leaves Docusaurus' standard
`note` type available for ordinary reader-facing notes:

```md
:::design[Note de design]
Why the rule is shaped this way, rather than what the rule does.
:::
```

English pages use `:::design[Design note]`. The rendering can be adjusted in
`src/css/custom.css` through `.theme-admonition-design`.

## Publications and versioning

`publications.config.mjs` composes the downloadable publications (currently
one PDF per language) from the same Markdown sources as the site. The template
also supports EPUB and WebPub outputs. Their editorial order is independent from the
sidebar. See [`PUBLICATIONS.md`](PUBLICATIONS.md) for the detailed schema.

All publications share one **lockstep version**: the version belongs to the
released corpus, not to an individual file. `revision` (currently `Draft`)
describes an editorial state and is not used to calculate SemVer.

The builder resolves the version from `PUBLICATION_VERSION` (set by the release
workflow), then the latest `vX.Y.Z` tag, then `release.initialVersion`. The
version is printed on every cover and written to
`dist/publications/publications.json`, which the `/publications/` page reads.

To copy locally built publications into a built site, exactly as CI does:

```bash
npm run publication:site
```

## Commits and releases

Releases are automated by [Semantic Release](https://semantic-release.gitbook.io/)
from Conventional Commits landing on `main`:

| Commit | Effect |
| --- | --- |
| `fix: ...`, `revert: ...` | patch |
| `feat: ...` | minor |
| `feat!: ...` or a `BREAKING CHANGE:` footer | major |
| `docs:`, `chore:`, `ci:`, `build:`, `test:`, `style:`, `refactor:`, `perf:` | no release |

**The game's Markdown is product content, not repository documentation.** A
correction to a rule or a text is a `fix:`; a new rule, Horizon, or chapter is a
`feat:`. Reserve `docs:` for this README and other repository documentation,
otherwise a real change to the game could ship without a new version.

With **Squash and merge**, the PR title becomes the commit subject and therefore
the release signal: make it a valid Conventional Commit.

## Deployment

`.github/workflows/deploy-pages.yml`:

1. validates every pull request: TypeScript, the bilingual site, all publications, and the Semantic Release configuration;
2. on `main`, creates a `vX.Y.Z` tag and a GitHub Release with the PDFs when the commits require one;
3. deploys the site to GitHub Pages with the current publications.

A `docs:` or `chore:` push rebuilds and deploys the site without a new release.
There is no `CHANGELOG.md`: Git tags and GitHub Releases are the release history.

## Updating from the template

The site template is a snapshot, not a parent repository. Generic improvements
are made in `resonance-site-template` first, then ported deliberately in a small
pull request. Individual commits can be inspected or cherry-picked:

```bash
git remote add site-template https://github.com/aleascript/resonance-site-template.git
git fetch site-template
```

Game-specific files — `site.config.ts`, `src/css/custom.css`, `docs/`,
`publications.config.mjs`, themes, covers, and assets — are expected to diverge.

## Where things are

- Project metadata, lineage and visual tokens: `site.config.ts`
- Publication composition: `publications.config.mjs`
- Docusaurus, locales, navbar, footer, and admonition parsing: `docusaurus.config.ts`
- Sidebar structure: `sidebars.ts`
- Theme tokens and editorial styles: `src/css/custom.css`
- Runtime theme variables, language detection and preference persistence: `src/theme/Root.tsx`
- Custom admonition renderers: `src/theme/Admonition/Types.js`
- Publications download page: `src/pages/publications.tsx`
- Publication builder and manifest: `tools/build-publications.mjs`
- Release policy: `.releaserc.json`

---

## Français

**Between & Beyond** est un jeu de rôle où les joueurs incarnent des Agents : des figures
qui se tiennent entre l'humanité et ce qui la dépasse — la Mort, le Divin, les
Rêves, l'Inconnu…

- Site : <https://aleascript.github.io/between-and-beyond/>
- Téléchargements (PDF) : <https://aleascript.github.io/between-and-beyond/publications/>

Ce README est technique. Le jeu lui-même (son propos, ses règles, ses Horizons)
se trouve uniquement dans les contenus publiés, sous `docs/`.

Le jeu est conçu avec [Resonance](https://aleascript.github.io/resonance/) et
propulsé par [Regard](https://aleascript.github.io/regard/).

### Démarrer

Avec Node.js 24 :

```bash
npm install
npm run start:fr   # ou npm run start:en
npm run preview    # site bilingue complet, tel qu'il sera publié
```

Avant une pull request : `npm run check`, puis `npm run publication:build` si
le contenu publié change.

### Contenus

Les sources sont rangées symétriquement dans `docs/fr/` (langue d'écriture) et
`docs/en/`. Chaque page existe dans les deux langues avec le même nom de
fichier, le même `id` et les mêmes identifiants de titres. Une nouvelle page
s'ajoute aussi à `sidebars.ts`, à `publications.config.mjs` (pour les deux
langues) et aux pages d'index concernées. Le dossier `i18n/` ne contient que
les libellés de l'interface.

Les notes de design utilisent `:::design[Note de design]`.

### Versions et publications

Les publications partagent une même version, calculée par Semantic Release à
partir des Conventional Commits sur `main`. Le Markdown du jeu est du contenu
publié : une correction est un `fix:`, un nouvel Horizon ou une nouvelle règle
un `feat:`. `docs:` est réservé à la documentation du dépôt.
