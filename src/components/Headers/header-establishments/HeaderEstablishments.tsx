import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./HeaderEstablishments.css";

function HeaderEstablishments() {
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
    <nav className="header_establishments">
      <div className="header_establishments-container">
        <div className="header_establishments-logo">
          <img
            src="/assets/zona2-logo.png"
            alt="Zona2 Logo"
            className="header_establishments-logo-img"
          />
          <span className="header_establishments-logo-text"></span>
        </div>
        
        {/* Mobile: Contenedor para botones de login y hamburguesa */}
        <div className="header_establishments-mobile-buttons">
          <button
            className="header_establishments-login-mobile"
            onClick={() => window.location.href = "https://zona2.mx/login/app_Login.php"}
          >
            Iniciar sesión
          </button>
          
          {/* Hamburger Button */}
          <button
            className="header_establishments-hamburger"
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
            className="header_establishments-overlay"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}

        {/* Navigation Links */}
        <div className={`header_establishments-links ${isMenuOpen ? 'header_establishments-links-open' : ''}`}>
          <button
            onClick={() => handleNavClick(() => navigate("/"))}
            className="header_establishments-link"
          >
            Inicio
          </button>
          <button
            onClick={() => handleNavClick(() => navigate("/"))}
            className="header_establishments-link"
          >
            Runner
          </button>
          <button
            onClick={() => handleNavClick(() => window.location.href = "https://zona2.mx/login/app_Login.php")}
            className="header_establishments-link header_establishments-link-login-desktop"
          >
            Iniciar sesión
          </button>
          <button
            onClick={() => handleNavClick(() => navigate("/"))}
            className="header_establishments-link-btn"
          >
            Pre-registro
          </button>
        </div>
      </div>
    </nav>
  );
}

export default HeaderEstablishments;

