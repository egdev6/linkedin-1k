import { useEffect } from 'react';
import { useThemeStore } from './store';

export const useTheme = () => {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  useEffect(() => {
    setTheme('dark');
  }, []);

  return {
    theme,
    setTheme,
    toggleTheme
  };
};
