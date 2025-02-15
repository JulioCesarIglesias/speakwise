import React, { useEffect } from 'react';
import logoSpeakWise from "../assets/images/logo-speakwise.png";
import { Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const dropdowns = document.querySelectorAll(".dropdown");

    const toggleMenu = () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    };

    if (hamburger && navMenu) {
      hamburger.addEventListener("click", toggleMenu);
    }

    // Mobile dropdown handling
    const toggleDropdown = (e) => {
      const dropdownContent = e.currentTarget.querySelector(".dropdown-content");
      if (dropdownContent) {
        dropdownContent.classList.toggle("show");
      }
      e.stopPropagation();
    };

    if (window.innerWidth <= 768) {
      dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", toggleDropdown);
      });
    }

    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });

    // Removendo event listeners ao desmontar o componente
    return () => {
      if (hamburger && navMenu) {
        hamburger.removeEventListener("click", toggleMenu);
      }
      dropdowns.forEach(dropdown => {
        dropdown.removeEventListener("click", toggleDropdown);
      });
      navLinks.forEach(link => {
        link.removeEventListener("click", () => {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
        });
      });
    };
  }, []);

  return (
    <header id="home">
      <nav className="nav-container">
        <Link to="/" className="logo">
          <img src={logoSpeakWise} alt="Logo SpeakWise" />
        </Link>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link">Categorias</a>
            <div className="dropdown-content">
              <Link to="/category/numbers">Números</Link>
              <Link to="/category/animals">Animais</Link>
              <Link to="/category/colors">Cores</Link>
              <Link to="/category/verbs">Verbos</Link>
              <Link to="/category/food">Comidas</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">Sobre</Link>
          </li>
        </ul>

        <button className="hamburger">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
