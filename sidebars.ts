import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const isFrench = (process.env.DOCUSAURUS_CURRENT_LOCALE ?? 'fr') === 'fr';
const t = (fr: string, en: string) => (isFrench ? fr : en);
const sidebars: SidebarsConfig = {
  docsSidebar: [
    'home',
    'core-rules',
    {
      type: 'category',
      label: t('Déclinaisons', 'Settings'),
      link: {type: 'doc', id: 'settings'},
      items: [
        'choirs-and-legions',
        'ancient-and-new-gods',
        'signals',
        'blood-and-night',
      ],
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
