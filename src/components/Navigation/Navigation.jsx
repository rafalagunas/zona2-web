function Navigation({ onScrollToSection, onOpenModal }) {
  return (
    <nav className="landing-nav">
      <div className="nav-container">
        <div className="nav-logo">
          <img
            src="/assets/zona2-logo.png"
            alt="Zona2 Logo"
            className="logo-img"
          />
          <span className="logo-text">Zona²</span>
        </div>
        <div className="nav-links">
          <button
            onClick={() => onScrollToSection("inicio")}
            className="nav-link"
          >
            Inicio
          </button>
          <button
            onClick={() => onScrollToSection("acerca")}
            className="nav-link"
          >
            Acerca del Proyecto
          </button>
          <button
            onClick={onOpenModal}
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

