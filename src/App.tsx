import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@pages/HomePage.tsx';
import WebDevPage from '@pages/WebDevPage';
import GameDevPage from '@pages/GameDevPage';
import ArtPage from '@pages/ArtPage';
import AboutMePage from '@pages/AboutMePage';
import ResumePage from '@pages/ResumePage';

import Navbar from '@components/Navbar';
//import Footer from '@components/Footer';
import { useState, useEffect } from 'react';
import { Language } from '@/types/language';
import '@assets/App.css';

function App()
{
  const [theme, setTheme] = useState(localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
  const [language, setLanguage] = useState<Language>((localStorage.getItem('language') as Language) || 'en');

  const toggleTheme = () =>
  {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleLanguage = () =>
  {
    const newLanguage = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  useEffect(() =>
  {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Router>
      <Navbar
        theme={theme}
        onThemeChange={toggleTheme}
        language={language}
        onLanguageChange={toggleLanguage}
      />
      <Routes>
        <Route path="/" element={<HomePage language={language} />} />
        <Route path="/web-developer" element={<WebDevPage />} />
        <Route path="/game-dev" element={<GameDevPage />} />
        <Route path="/art" element={<ArtPage />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;