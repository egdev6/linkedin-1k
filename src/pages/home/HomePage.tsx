import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { HomePageView } from './HomePageView';
import type { HomePageProps } from './types';

// Here you can add your page logic
const HomePage: FC<HomePageProps> = () => {
  const { t } = useTranslation();
  const name = t('homePage.title');

  return (
    <>
      <title>{name}</title>
      <HomePageView />;
    </>
  );
};

export default HomePage;
