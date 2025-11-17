import { motion } from "framer-motion";
import { Play } from "lucide-react";
import runnersVideo from "../../assets/runners.mp4";

function HeroSection({ onScrollToSection, onOpenModal }) {
  return (
    <section id="inicio" className="hero-section">
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={runnersVideo} type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <div className="hero-badge">
            <Play size={16} />
            <span>Próximamente</span>
          </div>

          <h1 className="hero-title">
            Corre en <span className="text-gradient">Zona 2,</span>
            <br />
            <span className="text-gradient">Conecta</span> con corredores,
            <br />y <span className="text-gradient">Gana</span> puntos reales
          </h1>

          <p className="hero-description">
            Z2 es una aplicación gratuita que transforma tu motivación deportiva en reconocimiento real. 
            Acumula puntos por tu esfuerzo, canjéalos por descuentos en carreras y establecimientos, 
            y forma parte de una comunidad que valora cada paso.
          </p>

          <div className="hero-buttons">
            <button
              onClick={onOpenModal}
              className="btn-primary"
            >
              Únete al Pre-registro
            </button>
            <button
              onClick={() => onScrollToSection("acerca")}
              className="btn-secondary"
            >
              Conocer más
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">10,000</div>
              <div className="stat-label">Puntos de bienvenida</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50%</div>
              <div className="stat-label">Descuento máximo</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">∞</div>
              <div className="stat-label">Puntos ilimitados</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-image"
        >
          <div className="hero-mockup">
            <img
              src="/assets/zona2-logo.png"
              alt="Zona2 App"
              className="mockup-logo"
            />
            <div className="mockup-decoration"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;

