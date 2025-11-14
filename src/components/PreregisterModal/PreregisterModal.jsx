import { motion } from "framer-motion";
import { Award, DollarSign, Clock, Check, X } from "lucide-react";

function PreregisterModal({ isOpen, onClose, formData, formSubmitted, onChange, onSubmit }) {
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
            <p className="section-subtitle">
              Sé de los primeros en probar Zona² y obtén beneficios exclusivos
            </p>

            <div className="benefits-list">
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
                <label htmlFor="nombre">Nombre completo</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={onChange}
                  placeholder="Juan Pérez"
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
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefono">Teléfono (opcional)</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={onChange}
                  placeholder="+52 999 123 4567"
                />
              </div>

              <div className="form-group">
                <label htmlFor="smartwatchBrand">Marca de reloj inteligente</label>
                <select
                  id="smartwatchBrand"
                  name="smartwatchBrand"
                  value={formData.smartwatchBrand}
                  onChange={onChange}
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="garmin">Garmin</option>
                  <option value="apple-watch">Apple Watch</option>
                  <option value="samsung">Samsung</option>
                  <option value="fitbit">Fitbit</option>
                  <option value="polar">Polar</option>
                  <option value="suunto">Suunto</option>
                  <option value="other">Otra</option>
                  <option value="none">No tengo</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="age">Edad</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={onChange}
                  placeholder="25"
                  min="18"
                  max="120"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="gender">Género</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={onChange}
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="male">Masculino</option>
                  <option value="female">Femenino</option>
                  <option value="other">Otro</option>
                  <option value="prefer-not-to-say">Prefiero no decir</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="cellphoneOS">Sistema operativo del celular</label>
                <select
                  id="cellphoneOS"
                  name="cellphoneOS"
                  value={formData.cellphoneOS}
                  onChange={onChange}
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="android">Android</option>
                  <option value="ios">iOS</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="runningExperience">Experiencia corriendo</label>
                <select
                  id="runningExperience"
                  name="runningExperience"
                  value={formData.runningExperience}
                  onChange={onChange}
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="amateur">Amateur</option>
                  <option value="intermediate">Intermedio</option>
                  <option value="advanced">Avanzado</option>
                  <option value="professional">Profesional</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn-submit"
                disabled={formSubmitted}
              >
                {formSubmitted ? (
                  <>
                    <Check size={20} />
                    ¡Registrado exitosamente!
                  </>
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

