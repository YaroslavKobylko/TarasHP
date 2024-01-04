import React, { useState } from 'react';
import './Header.css';
import Logo from "./Logo.png";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Close the menu after clicking on a link
    }
  };

  return (
    <header className="header">
      <a href="#" className="name" onClick={closeMenu}>
        <img className="logo-img" src={Logo} alt="Logo" />
        <div>
          <p>Hookah</p>
          <span>Paradise</span>
        </div>
      </a>

      <div className="background" onClick={toggleMenu}>
        <button className="menu__icon">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={() => scrollToSection('about')}>
          Про нас
        </a>
        <a href="#services" onClick={() => scrollToSection('services')}>
          Ціни та послуги
        </a>
        <a href="#advantages" onClick={() => scrollToSection('advantages')}>
          Наші переваги
        </a>
        <a href="#reviews" onClick={() => scrollToSection('reviews')}>
          Відгуки
        </a>
        <a href="#contacts" onClick={() => scrollToSection('contacts')}>
          Контакти
        </a>
        <a href="tel:+380686848012">
          Зателефонувати
        </a>
      </nav>
    </header>
  );
};

export default Header;