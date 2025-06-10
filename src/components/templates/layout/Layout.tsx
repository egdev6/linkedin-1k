import NavBar from '@/components/atoms/nav-bar';
import { cn } from '@helpers/utils';
import type { FC, JSX } from 'react';
import { Outlet } from 'react-router-dom';

const Layout: FC = (): JSX.Element | null => {
  return (
    <div
      className={cn('flex items-center justify-center', 'w-full min-h-dvh bg-background-light dark:bg-background-dark')}
    >
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
