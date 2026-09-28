/**
 * Project-specific values live here so repositories created from this template
 * have one obvious place to start customizing.
 */

export type SiteIdentity = {
  logo: string | null;
  logoDark: string | null;
  favicon: string | null;
  faviconDark: string | null;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type SiteLineage = {
  designedWith: ProjectLink | null;
  poweredBy: ProjectLink | null;
};

export type ContentLicense = {
  label: string;
  href: string;
  attribution: {
    title: string;
    author: string;
    href: string | null;
  };
};

export type ThemePalette = {
  primary: string;
  background: string;
  surface: string;
  text: string;
  muted: string;
  border: string;
};

export type SiteTheme = {
  colors: {
    light: ThemePalette;
    dark: ThemePalette;
  };
  typography: {
    body: string;
    heading: string;
    mono: string;
    headingWeight: number;
  };
  shape: {
    radius: string;
    borderWidth: string;
    navbarShadow: string;
  };
  layout: {
    contentWidth: string;
  };
};

export const site = {
  title: 'Between & Beyond',
  tagline: 'Those who stand between.',
  description: 'A tabletop role-playing game about what exceeds us, and those who stand between.',
  author: 'AleaScript',
  defaultLocale: 'en',
  locales: {
    en: {
      htmlLang: 'en',
      label: 'English',
    },
    fr: {
      htmlLang: 'fr',
      label: 'Français',
    },
  },
  repository: {
    defaultFullName: 'aleascript/between-and-beyond',
  },
  identity: {
    logo: 'img/site/icon_light_theme.png',
    logoDark: 'img/site/icon_dark_theme.png',
    favicon: 'img/site/icon_light_theme.png',
    faviconDark: 'img/site/icon_dark_theme.png',
  } satisfies SiteIdentity,
  license: {
    label: 'CC BY 4.0',
    href: 'https://creativecommons.org/licenses/by/4.0/',
    attribution: {
      title: 'Between & Beyond',
      author: 'AleaScript',
      href: null,
    },
  } satisfies ContentLicense,
  lineage: {
    designedWith: {
      label: 'Resonance',
      href: 'https://aleascript.github.io/resonance/',
    },
    poweredBy: {
      label: 'Regard',
      href: 'https://aleascript.github.io/regard/',
    },
  } as SiteLineage,
  theme: {
    colors: {
      // Ink and ember: the logo's black ink on bone paper, one ember accent.
      light: {
        primary: '#a8321f',
        background: '#f7f3ec',
        surface: '#eee8dd',
        text: '#1b1917',
        muted: '#6b635a',
        border: '#dbd2c4',
      },
      dark: {
        primary: '#e8765a',
        background: '#121110',
        surface: '#1c1a18',
        text: '#ece6dc',
        muted: '#a39a8e',
        border: '#35302b',
      },
    },
    typography: {
      body: '"Source Serif 4", Georgia, "Times New Roman", serif',
      heading: 'Fraunces, Georgia, "Times New Roman", serif',
      mono: '"SFMono-Regular", Consolas, "Liberation Mono", monospace',
      headingWeight: 600,
    },
    shape: {
      radius: '0.4rem',
      borderWidth: '1px',
      navbarShadow: '0 1px 0 rgb(27 25 23 / 12%)',
    },
    layout: {
      contentWidth: '52rem',
    },
  } satisfies SiteTheme,
} as const;
