import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Check } from "lucide-react";

function ContactSection({ formData, formSubmitted, isSubmitting, successMessage, errorMessage, onChange, onSubmit }) {
  return (
    <section id="contacto" className="contact-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Únete a la comunidad</h2>
          <p className="section-subtitle">
            Estamos listos para transformar tu experiencia de running
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-info"
          >
            <h3 className="contact-info-title">Cuéntanos sobre ti</h3>
            <p className="contact-info-description">
              Regístrate ahora y sé de los primeros en experimentar Z2. 
              Recibe 10,000 puntos de bienvenida y acceso anticipado.
            </p>

            <div className="contact-info-items">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4>Ubicación</h4>
                  <p>México</p>
                  <span>Disponible en todo México</span>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>support@zona2.mx</p>
                  <span>Respuesta en menos de 24 horas</span>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <h4>WhatsApp</h4>
                  <p>+52 999 XXX XXXX</p>
                  <span>Disponible de 9:00 AM a 6:00 PM</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="contact-form-wrapper"
          >
            <form onSubmit={onSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="firstName">Nombre completo *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={onChange}
                  onKeyDown={(e) => {
                    const allowedKeys = [
                      "Backspace",
                      "Delete",
                      "Tab",
                      "ArrowLeft",
                      "ArrowRight",
                      "ArrowUp",
                      "ArrowDown",
                      "Home",
                      "End",
                    ];
                    if (allowedKeys.includes(e.key)) {
                      return;
                    }
                    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s-]$/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  placeholder="Juan Pérez"
                  title="Solo se permiten letras, espacios y guiones"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'nowrap' }}>
                  <span>Correo electrónico *</span>
                  {errorMessage && (
                    <span style={{ 
                      color: '#FF6B35', 
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      whiteSpace: 'nowrap'
                    }}>
                      ({errorMessage})
                    </span>
                  )}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={onChange}
                  placeholder="juan@ejemplo.com"
                  title="Ingresa un correo electrónico válido"
                  required
                  style={errorMessage ? { borderColor: '#FF6B35' } : {}}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Teléfono *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={onChange}
                  onKeyDown={(e) => {
                    const allowedKeys = [
                      "Backspace",
                      "Delete",
                      "Tab",
                      "ArrowLeft",
                      "ArrowRight",
                      "ArrowUp",
                      "ArrowDown",
                      "Home",
                      "End",
                    ];
                    if (allowedKeys.includes(e.key)) {
                      return;
                    }
                    if (!/^[\d\s+\-()]$/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  placeholder="+52 999 123 4567"
                  title="Ingresa un número de teléfono válido"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-submit-contact"
                disabled={formSubmitted || isSubmitting}
              >
                {formSubmitted ? (
                  <>
                    <Check size={20} />
                    {successMessage || "¡Registrado exitosamente!"}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

