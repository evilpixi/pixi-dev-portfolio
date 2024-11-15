import React from 'react';
import LightDarkSwitch from '@components/LightDarkSwitch'
import LanguageSwitch from '@components/LanguageSwitch';
import texts from '@/texts';
import '@components/Navbar.css';
import { Language } from '@/types/language';

interface NavbarProps
{
  onThemeChange: () => void;
  theme: string;
  onLanguageChange: () => void;
  language: Language;
}

const Navbar: React.FC<NavbarProps> = ({ onThemeChange, theme, onLanguageChange, language }) =>
{
  return (
    <nav className="navbar">
      <a href="/">{texts.navbarHomeLink[language]}</a>
      <div className="switches">
        <LanguageSwitch
          checked={language === 'es'}
          onChange={onLanguageChange}
          label={language}
        />
        <LightDarkSwitch
          checked={theme === 'light'}
          onChange={onThemeChange}
        />
      </div>
    </nav>
  );
};

export default Navbar;