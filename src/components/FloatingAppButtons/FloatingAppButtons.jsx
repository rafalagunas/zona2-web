import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, X } from "lucide-react";

function FloatingAppButtons() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="floating-app-buttons">
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="floating-app-toggle"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label={isExpanded ? "Cerrar botones de app" : "Abrir botones de app"}
      >
        {isExpanded ? <X size={20} /> : <Smartphone size={20} />}
        <span className="floating-app-tooltip">
          {isExpanded ? "Cerrar" : "Descarga la app"}
        </span>
      </motion.button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="floating-app-buttons-container"
          >
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="floating-app-button"
            >
              <svg viewBox="0 0 24 24" fill="none" className="app-icon">
                <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.61 3 21.09 3 20.5Z" fill="#32BBFF"/>
                <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z" fill="#32BBFF"/>
                <path d="M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.5 12.92 20.16 13.19L17.89 14.5L15.35 12L17.89 9.5L20.16 10.81Z" fill="#32BBFF"/>
                <path d="M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" fill="#32BBFF"/>
              </svg>
              <div className="app-button-text">
                <span className="app-button-label">GET IT ON</span>
                <span className="app-button-name">Google Play</span>
              </div>
            </a>

            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="floating-app-button"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="app-icon">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <div className="app-button-text">
                <span className="app-button-label">Download on the</span>
                <span className="app-button-name">App Store</span>
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FloatingAppButtons;

