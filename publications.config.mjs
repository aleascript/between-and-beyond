export function definePublications(config) {
  return config;
}

export default definePublications({
  release: {
    initialVersion: '0.1.0',
  },
  markdown: {
    admonitions: ['design'],
  },
  publications: {
    metaxy: {
      author: 'AleaScript',
      revision: 'Draft',
      license: {
        label: 'CC BY 4.0',
        href: 'https://creativecommons.org/licenses/by/4.0/',
        attribution: {
          title: 'Metaxy',
          author: 'AleaScript',
          href: null,
        },
      },
      lineage: {
        designedWith: {
          label: 'Regard',
          href: 'https://aleascript.github.io/regard/',
        },
        poweredBy: null,
      },
      size: 'A4',
      theme: 'publication/theme.css',
      cover: {
        image: 'static/img/site/logo_light_theme_400.png',
        showTitle: true,
        showMetadata: true,
      },
      outputName: 'metaxy',
      locales: {
        en: {
          title: 'Metaxy',
          tocTitle: 'Contents',
          contents: [
            'docs/en/index.md',
            'docs/en/purpose.md',
            'docs/en/core-rules.md',
            'docs/en/horizons.md',
            'docs/en/death.md',
            'docs/en/divine.md',
            'docs/en/dreams.md',
            'docs/en/deep-time.md',
            'docs/en/unknown.md',
            'docs/en/collective.md',
            'docs/en/desire.md',
            'docs/en/destruction.md',
            'docs/en/nature.md',
            'docs/en/tones.md',
            'docs/en/time.md',
          ],
          outputs: ['pdf'],
        },
        fr: {
          title: 'Metaxy',
          tocTitle: 'Sommaire',
          contents: [
            'docs/fr/index.md',
            'docs/fr/purpose.md',
            'docs/fr/core-rules.md',
            'docs/fr/horizons.md',
            'docs/fr/death.md',
            'docs/fr/divine.md',
            'docs/fr/dreams.md',
            'docs/fr/deep-time.md',
            'docs/fr/unknown.md',
            'docs/fr/collective.md',
            'docs/fr/desire.md',
            'docs/fr/destruction.md',
            'docs/fr/nature.md',
            'docs/fr/tones.md',
            'docs/fr/time.md',
          ],
          outputs: ['pdf'],
        },
      },
    },
  },
});
