'use client';

import { createContext, useContext, useEffect, useRef, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (origin?: { x: number; y: number }) => void;
  isTransitioning: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const THEME_TRANSITION_MS = 760;

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);
  const [transition, setTransition] = useState<{
    theme: Theme;
    x: number;
    y: number;
  } | null>(null);
  const transitionTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMounted(true);
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDark ? 'dark' : 'light';
      setTheme(initialTheme);
      document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    return () => {
      if (transitionTimeout.current) {
        clearTimeout(transitionTimeout.current);
      }
    };
  }, []);

  const toggleTheme = (origin?: { x: number; y: number }) => {
    if (transition) {
      return;
    }

    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTransition({
      theme: newTheme,
      x: origin?.x ?? window.innerWidth / 2,
      y: origin?.y ?? window.innerHeight / 2,
    });

    transitionTimeout.current = setTimeout(() => {
      setTheme(newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
      setTransition(null);
      transitionTimeout.current = null;
    }, THEME_TRANSITION_MS);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isTransitioning: transition !== null }}>
      {children}
      {mounted && transition ? (
        <div
          aria-hidden="true"
          className="theme-radial-reveal"
          data-theme={transition.theme}
          style={{
            '--theme-origin-x': `${transition.x}px`,
            '--theme-origin-y': `${transition.y}px`,
          } as React.CSSProperties}
        >
          <ThemeContext.Provider
            value={{
              theme: transition.theme,
              toggleTheme,
              isTransitioning: true,
            }}
          >
            {children}
          </ThemeContext.Provider>
        </div>
      ) : null}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
