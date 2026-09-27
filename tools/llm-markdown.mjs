// Builds the plain Markdown edition of a publication, meant for LLMs.
// Input chapters are expected to have gone through transformAdmonitions.

const headerText = {
  en: {
    version: 'Version',
    revision: 'Revision',
    license: 'License',
    author: 'Author',
    source: 'Source',
    colon: ': ',
    instruction: 'Read this whole document before answering questions about the game or running a game.',
  },
  fr: {
    version: 'Version',
    revision: 'Révision',
    license: 'Licence',
    author: 'Auteur',
    source: 'Source',
    colon: ' : ',
    instruction: 'Lis ce document en entier avant de répondre à des questions sur le jeu ou de mener une partie.',
  },
};

function decodeHtml(value) {
  return value
    .replaceAll('&quot;', '"')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&amp;', '&');
}

function mapOutsideFences(markdown, transformLine) {
  let fence = null;
  return markdown
    .split('\n')
    .map((line) => {
      const match = line.match(/^\s*(```+|~~~+)/);
      if (match && (!fence || match[1][0] === fence)) {
        fence = fence ? null : match[1][0];
        return line;
      }
      return fence ? line : transformLine(line);
    })
    .join('\n');
}

// Chapters are concatenated in a single file under the game title, so every
// heading moves down one level and cross-page links keep only their text.
export function cleanChapter(markdown, {headingShift = 1} = {}) {
  const text = mapOutsideFences(
    markdown.replace(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/, '').replace(/\r\n/g, '\n'),
    (line) => {
      const cleaned = line
        .replace(
          /<span class="publication-admonition-title[^"]*">([^<]*)<\/span>/g,
          (_match, title) => `**${decodeHtml(title)}**`,
        )
        .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
        .replace(/<img\b[^>]*>/gi, '')
        .replace(/\[([^\]]+)\]\((?![a-z][a-z0-9+.-]*:)[^)]*\)/gi, '$1');

      const heading = cleaned.match(/^(#{1,6})\s+(.*)$/);
      if (!heading) {
        return cleaned;
      }
      const level = heading[1].length + headingShift;
      return level <= 6 ? `${'#'.repeat(level)} ${heading[2]}` : `**${heading[2]}**`;
    },
  );

  return text
    .split('\n')
    .map((line) => line.replace(/[ \t]+$/, ''))
    .join('\n')
    // Admonition bodies leave empty quote lines behind: keep one between
    // paragraphs, none at the edges of the quote.
    .replace(/^>\n(?:>\n)+/gm, '>\n')
    .replace(/\n>(?=\n\n|\n?$)/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

export function llmHeader({locale, title, author, version, revision, license, publicUrl}) {
  const t = headerText[locale] ?? headerText.en;
  const edition = `${t.version} ${version}${revision ? ` · ${t.revision} ${revision}` : ''}`;
  const lines = [`# ${title}`, '', edition];

  if (author) {
    lines.push(`${t.author}${t.colon}${author}`);
  }
  if (license) {
    lines.push(`${t.license}${t.colon}${license.label}${license.href ? ` (${license.href})` : ''}`);
  }
  if (publicUrl) {
    const base = publicUrl.replace(/\/+$/, '');
    lines.push(`${t.source}${t.colon}${base}/${locale === 'en' ? '' : `${locale}/`}`);
  }

  lines.push('', `> ${t.instruction}`);
  return lines.join('\n');
}
