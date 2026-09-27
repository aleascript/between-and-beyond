import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const isFrench = (process.env.DOCUSAURUS_CURRENT_LOCALE ?? 'fr') === 'fr';
const t = (fr: string, en: string) => (isFrench ? fr : en);
const sidebars: SidebarsConfig = {
  docsSidebar: [
    'home',
    'purpose',
    'core-rules',
    {
      type: 'category',
      label: t('Horizons', 'Horizons'),
      link: {type: 'doc', id: 'horizons'},
      items: ['death', 'divine', 'dreams', 'deep-time', 'unknown', 'collective', 'desire', 'destruction', 'nature'],
    },
    'tones',
    'time',
    {
      type: 'link',
      label: 'Publications',
      href: '/publications/',
    },
  ],
};

export default sidebars;
