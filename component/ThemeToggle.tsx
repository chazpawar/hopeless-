'use client';

import { Moon, SunDim } from '@phosphor-icons/react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme, isTransitioning } = useTheme();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    toggleTheme({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });
  };

  return (
    <button
      onClick={handleClick}
      disabled={isTransitioning}
      className="theme-rocker-toggle"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      aria-pressed={theme === 'dark'}
      data-theme={theme}
    >
      <span className="theme-rocker-plate">
        <span className="theme-rocker-paddle">
          <span className="theme-rocker-half theme-rocker-half-sun">
            <SunDim className="theme-rocker-icon" size={15} weight="duotone" aria-hidden="true" />
          </span>
          <span className="theme-rocker-half theme-rocker-half-moon">
            <Moon className="theme-rocker-icon" size={15} weight="duotone" aria-hidden="true" />
          </span>
        </span>
      </span>
    </button>
  );
}
