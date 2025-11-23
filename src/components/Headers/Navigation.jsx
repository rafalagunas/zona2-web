import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navigation.css";

function Navigation({ onScrollToSection, onOpenModal }) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (callback) => {
    callback();
    closeMenu();
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu on ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  return (
    <nav className="landing-nav">
      <div className="nav-container">
        <div className="nav-logo">
          <img
            src="/assets/zona2-logo.png"
            alt="Zona2 Logo"
            className="logo-img"
          />
          <span className="logo-text"></span>
        </div>
        
        {/* Mobile: Contenedor para botones de login y hamburguesa */}
        <div className="nav-mobile-buttons">
          <button
            className="nav-login-mobile"
            onClick={() => navigate("/login")}
          >
            Iniciar sesión
          </button>
          
          {/* Hamburger Button */}
          <button
            className="nav-hamburger"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className="nav-overlay"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}

        {/* Navigation Links */}
        <div className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
          <button
            onClick={() => handleNavClick(() => onScrollToSection("inicio"))}
            className="nav-link"
          >
            Inicio
          </button>
          <button
            onClick={() => handleNavClick(() => onScrollToSection("acerca"))}
            className="nav-link"
          >
            Acerca del Proyecto
          </button>
          <button
            onClick={() => handleNavClick(() => navigate("/establishments"))}
            className="nav-link"
          >
            Organizadores/Establecimientos
          </button>
          <button
            onClick={() => handleNavClick(() => navigate("/login"))}
            className="nav-link nav-link-login-desktop"
          >
            Iniciar sesión
          </button>
          <button
            onClick={() => handleNavClick(onOpenModal)}
            className="nav-link-btn"
          >
            Pre-registro
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

