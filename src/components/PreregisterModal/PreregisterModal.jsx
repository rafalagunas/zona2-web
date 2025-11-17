import { motion } from "framer-motion";
import { Award, DollarSign, Clock, Check, X } from "lucide-react";

function PreregisterModal({ isOpen, onClose, formData, formSubmitted, isSubmitting, onChange, onSubmit }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        <div className="preregister-content">
          <div className="preregister-info">
            <h2 className="section-title">Únete al Pre-registro</h2>
            <p className="section-subtitle preregister-subtitle-desktop">
              Sé de los primeros en probar Zona² y obtén beneficios exclusivos
            </p>

            <div className="benefits-list benefits-list-desktop">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <Award size={24} />
                </div>
                <div>
                  <h4>Acceso anticipado</h4>
                  <p>Prueba la app antes del lanzamiento oficial</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <DollarSign size={24} />
                </div>
                <div>
                  <h4>Bonus de bienvenida</h4>
                  <p>Z2 tokens gratis al registrarte ($200 MXN)</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <Clock size={24} />
                </div>
                <div>
                  <h4>Plan Premium gratis</h4>
                  <p>3 meses de membresía premium sin costo</p>
                </div>
              </div>
            </div>
          </div>

          <div className="preregister-form-container">
            <form onSubmit={onSubmit} className="preregister-form">
              <div className="form-group">
                <label htmlFor="firstName">Nombre</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={onChange}
                  onKeyDown={(e) => {
                    // Permitir teclas de control (Backspace, Delete, Tab, Arrow keys, etc.)
                    const allowedKeys = [
                      "Backspace", "Delete", "Tab", "ArrowLeft", "ArrowRight",
                      "ArrowUp", "ArrowDown", "Home", "End"
                    ];
                    if (allowedKeys.includes(e.key)) {
                      return;
                    }
                    // Solo permitir letras, espacios, acentos, ñ y guiones
                    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s-]$/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  placeholder="Juan"
                  pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s-]+"
                  title="Solo se permiten letras, espacios y guiones"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={onChange}
                  placeholder="juan@ejemplo.com"
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                  title="Ingresa un correo electrónico válido"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={onChange}
                  onKeyDown={(e) => {
                    // Permitir teclas de control
                    const allowedKeys = [
                      "Backspace", "Delete", "Tab", "ArrowLeft", "ArrowRight",
                      "ArrowUp", "ArrowDown", "Home", "End"
                    ];
                    if (allowedKeys.includes(e.key)) {
                      return;
                    }
                    // Solo permitir números, espacios, +, -, paréntesis
                    if (!/^[\d\s+\-()]$/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  placeholder="+52 999 123 4567"
                  pattern="[\d\s+\-()]+"
                  title="Ingresa un número de teléfono válido"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-submit"
                disabled={formSubmitted || isSubmitting}
              >
                {formSubmitted ? (
                  <>
                    <Check size={20} />
                    ¡Registrado exitosamente!
                  </>
                ) : isSubmitting ? (
                  "Enviando..."
                ) : (
                  "Registrarme ahora"
                )}
              </button>

              <p className="form-disclaimer">
                Al registrarte aceptas recibir notificaciones sobre el
                lanzamiento de Zona². No compartiremos tu información.
              </p>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default PreregisterModal;

