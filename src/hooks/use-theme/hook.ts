import { useEffect } from 'react';
import { useThemeStore } from './store';

export const useTheme = () => {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  useEffect(() => {
    setTheme('dark');
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem('app-theme');
    const parsed = JSON.parse(storedTheme || '{}');
    const themeParsed = parsed.state?.theme;

    if (!themeParsed) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }

    const root = document.documentElement;
    root.classList.add(themeParsed ? themeParsed : theme);
  }, [theme, setTheme]);

  return {
    theme,
    setTheme,
    toggleTheme
  };
};
