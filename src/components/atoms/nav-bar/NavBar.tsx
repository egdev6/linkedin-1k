import Logo from '@assets/images/logo.svg';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import 'flag-icons/css/flag-icons.min.css';

const NavBar: FC = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
  };

  return (
    <header className='fixed top-0 left-0 right-0 h-auto z-50 bg-transparent px-4 py-2'>
      <div className='max-w-[1020px] mx-auto flex items-center justify-between h-full'>
        <a
          href='https://www.linkedin.com/in/egdev/'
          className='h-auto w-[150px] flex items-center justify-center'
          aria-label={t('homePage.logoAlt')}
        >
          <Logo />
        </a>
        <div
          className='flex items-center gap-4 border border-gray-dark-700 rounded px-2 py-1 bg-transparent shadow-md'
          role='group'
          aria-label={t('homePage.languageSwitcher')}
        >
          <span
            className={`fi fi-es cursor-pointer transition-opacity text-xl ${
              i18n.language === 'es' ? 'opacity-100' : 'opacity-20 hover:opacity-75'
            }`}
            title={t('homePage.es')}
            aria-label={t('homePage.switchToSpanish')}
            aria-current={i18n.language === 'es' ? 'page' : undefined}
            tabIndex={0}
            onClick={() => toggleLanguage('es')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                toggleLanguage('es');
              }
            }}
          ></span>
          <span
            className={`fi fi-sh cursor-pointer transition-opacity text-xl ${
              i18n.language === 'en' ? 'opacity-100' : 'opacity-20 hover:opacity-75'
            }`}
            title={t('homePage.en')}
            aria-label={t('homePage.switchToEnglish')}
            aria-current={i18n.language === 'en' ? 'true' : undefined}
            tabIndex={0}
            onClick={() => toggleLanguage('en')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                toggleLanguage('en');
              }
            }}
          ></span>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
