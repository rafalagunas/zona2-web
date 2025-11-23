import React, { useState, useEffect } from 'react'
import { Building2, Mail, Phone, FileText, Check, X } from 'lucide-react'
import HeaderEstablishments from '../../../components/Headers/header-establishments/HeaderEstablishments'
import APIs from '../../../services/services/APIs'
import './Establishments.css'

function Establishments() {
  const [formData, setFormData] = useState({
    nombreComercial: '',
    razonSocial: '',
    celular: '',
    correoElectronico: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [aceptaTerminos, setAceptaTerminos] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
    // Clear error message when user starts typing
    if (errorMessage) {
      setErrorMessage('')
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.nombreComercial.trim()) {
      newErrors.nombreComercial = 'El nombre comercial es requerido'
    }

    if (!formData.razonSocial.trim()) {
      newErrors.razonSocial = 'La razón social es requerida'
    }

    if (!formData.celular.trim()) {
      newErrors.celular = 'El celular es requerido'
    } else if (!/^[0-9+\-\s()]+$/.test(formData.celular)) {
      newErrors.celular = 'Ingresa un número de celular válido'
    }

    if (!formData.correoElectronico.trim()) {
      newErrors.correoElectronico = 'El correo electrónico es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correoElectronico)) {
      newErrors.correoElectronico = 'Ingresa un correo electrónico válido'
    }

    if (!aceptaTerminos) {
      newErrors.terminos = 'Debes aceptar los términos y condiciones'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setErrorMessage('')
    setSuccessMessage('')

    try {
      // Preparar los datos para el backend
      const dataToSend = {
        nombreComercial: formData.nombreComercial.trim(),
        razonSocial: formData.razonSocial.trim(),
        celular: formData.celular.trim(),
        correoElectronico: formData.correoElectronico.trim()
      }

      console.log('📤 Enviando datos del establecimiento:', dataToSend)

      // Llamar al endpoint createEstablishment
      const response = await APIs.createEstablishment(dataToSend)

      console.log('✅ Respuesta del servidor:', response)

      // Verificar si la respuesta tiene status 'warning' o 'success'
      if (response?.status === 'warning' || response?.status === 'success') {
        const message = response?.message || 'Registro exitoso'
        setSuccessMessage(message)
        setIsSubmitted(true)
        
        // Limpiar formulario
        setFormData({
          nombreComercial: '',
          razonSocial: '',
          celular: '',
          correoElectronico: ''
        })
        setAceptaTerminos(false)
      } else {
        // Si no tiene status, asumir éxito
        setSuccessMessage('Registro exitoso. Nos pondremos en contacto contigo pronto.')
        setIsSubmitted(true)
        setFormData({
          nombreComercial: '',
          razonSocial: '',
          celular: '',
          correoElectronico: ''
        })
      }
    } catch (error: any) {
      console.error('❌ Error al enviar el formulario:', error)
      
      // Manejar errores de la respuesta
      const errorResponse = error?.response?.data
      if (errorResponse?.status === 'warning' || errorResponse?.status === 'success') {
        // Si el status es warning o success, tratarlo como éxito
        const message = errorResponse?.message || 'Registro exitoso'
        setSuccessMessage(message)
        setIsSubmitted(true)
        setFormData({
          nombreComercial: '',
          razonSocial: '',
          celular: '',
          correoElectronico: ''
        })
      } else {
        // Error real
        const errorMsg = errorResponse?.message || error?.message || 'Hubo un error al enviar el formulario. Por favor, intenta de nuevo.'
        setErrorMessage(errorMsg)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle ESC key to close modal and prevent body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false)
      }
    }

    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', handleEscape)
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  if (isSubmitted) {
    return (
      <div className="establishments">
        <HeaderEstablishments />
        <div className="establishments-container">
          <div className="establishments-content">
            <div className="establishments-success">
              <div className="success-icon-wrapper">
                <div className="success-icon">
                  <Check size={40} />
                </div>
              </div>
              <h2 className="success-title">¡Registro Exitoso!</h2>
              <p className="success-message">
                {successMessage || 'Hemos recibido tu información. Nos pondremos en contacto contigo pronto.'}
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="success-button"
              >
                Registrar otro establecimiento
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="establishments">
      <HeaderEstablishments />
      <div className="establishments-container">
        <div className="establishments-content">
          <div className="establishments-header">
            <h1 className="establishments-title">
              Registro de Establecimiento
            </h1>
            <p className="establishments-subtitle">
              Completa el formulario para registrarte como establecimiento afiliado
            </p>
          </div>
          <form onSubmit={handleSubmit} className="establishments-form">
            {/* Nombre Comercial */}
            <div className="establishments-form-group">
              <label htmlFor="nombreComercial" className="establishments-form-label">
                <Building2 size={18} />
                Nombre Comercial
              </label>
              <div className="establishments-input-wrapper">
                <input
                  type="text"
                  id="nombreComercial"
                  name="nombreComercial"
                  value={formData.nombreComercial}
                  onChange={handleChange}
                  className={`establishments-form-input ${errors.nombreComercial ? 'establishments-input-error' : ''}`}
                  placeholder="Ej: Restaurante El Buen Sabor"
                />
              </div>
              {errors.nombreComercial && (
                <p className="establishments-error-message">{errors.nombreComercial}</p>
              )}
            </div>

            {/* Razón Social */}
            <div className="establishments-form-group">
              <label htmlFor="razonSocial" className="establishments-form-label">
                <FileText size={18} />
                Razón Social
              </label>
              <div className="establishments-input-wrapper">
                <input
                  type="text"
                  id="razonSocial"
                  name="razonSocial"
                  value={formData.razonSocial}
                  onChange={handleChange}
                  className={`establishments-form-input ${errors.razonSocial ? 'establishments-input-error' : ''}`}
                  placeholder="Ej: Restaurante El Buen Sabor S.A. de C.V."
                />
              </div>
              {errors.razonSocial && (
                <p className="establishments-error-message">{errors.razonSocial}</p>
              )}
            </div>

            {/* Celular */}
            <div className="establishments-form-group">
              <label htmlFor="celular" className="establishments-form-label">
                <Phone size={18} />
                Celular
              </label>
              <div className="establishments-input-wrapper">
                <input
                  type="tel"
                  id="celular"
                  name="celular"
                  value={formData.celular}
                  onChange={handleChange}
                  className={`establishments-form-input ${errors.celular ? 'establishments-input-error' : ''}`}
                  placeholder="Ej: +52 999 123 4567"
                />
              </div>
              {errors.celular && (
                <p className="establishments-error-message">{errors.celular}</p>
              )}
            </div>

            {/* Correo Electrónico */}
            <div className="establishments-form-group">
              <label htmlFor="correoElectronico" className="establishments-form-label">
                <Mail size={18} />
                Correo Electrónico
              </label>
              <div className="establishments-input-wrapper">
                <input
                  type="email"
                  id="correoElectronico"
                  name="correoElectronico"
                  value={formData.correoElectronico}
                  onChange={handleChange}
                  className={`establishments-form-input ${errors.correoElectronico ? 'establishments-input-error' : ''}`}
                  placeholder="Ej: contacto@restaurante.com"
                />
              </div>
              {errors.correoElectronico && (
                <p className="establishments-error-message">{errors.correoElectronico}</p>
              )}
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="establishments-form-error-message" style={{ gridColumn: '1 / -1' }}>
                {errorMessage}
              </div>
            )}

            {/* Success Message */}
            {successMessage && !isSubmitted && (
              <div className="establishments-form-success-message" style={{ gridColumn: '1 / -1' }}>
                {successMessage}
              </div>
            )}

            {/* Términos y Condiciones */}
            <div className="establishments-form-group establishments-form-group-checkbox" style={{ gridColumn: '1 / -1' }}>
              <label className="establishments-checkbox-label">
                <input
                  type="checkbox"
                  checked={aceptaTerminos}
                  onChange={(e) => {
                    setAceptaTerminos(e.target.checked)
                    if (errors.terminos) {
                      setErrors(prev => ({
                        ...prev,
                        terminos: ''
                      }))
                    }
                  }}
                  className="establishments-checkbox-input"
                />
                <span className="establishments-checkbox-text">
                  Acepto los <a href="#" className="establishments-checkbox-link" onClick={(e) => {
                    e.preventDefault()
                    setIsModalOpen(true)
                  }}>términos y condiciones</a>
                </span>
              </label>
              {errors.terminos && (
                <p className="establishments-error-message">{errors.terminos}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="establishments-submit-button"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </>
              ) : (
                'Registrar Establecimiento'
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Modal de Términos y Condiciones */}
      {isModalOpen && (
        <div className="terms-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="terms-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="terms-modal-header">
              <h2 className="terms-modal-title">Carta de Aceptación</h2>
              <button
                className="terms-modal-close"
                onClick={() => setIsModalOpen(false)}
                aria-label="Cerrar modal"
              >
                <X size={24} />
              </button>
            </div>
            <div className="terms-modal-body">
              <p className="terms-intro">
                La presente carta establece los Términos y Condiciones bajo los cuales una Organización ("El Organizador") podrá publicar eventos y aceptar puntos Z2 como forma de descuento dentro de la plataforma Z2 – Corre, Conecta y Gana ("Z2").
              </p>
              <p className="terms-intro">
                Al registrarse y activar su membresía, El Organizador declara haber leído, entendido y aceptado íntegramente los siguientes términos:
              </p>

              <div className="terms-section">
                <h3 className="terms-section-title">1. Publicación de Eventos</h3>
                <p className="terms-section-text">
                  El Organizador podrá registrar y administrar sus carreras, proporcionando información veraz, actualizada y completa, incluyendo: fechas, horarios, costos, categorías, cupos, rutas, políticas de reembolso y cualquier detalle relevante del evento.
                  Z2 se reserva el derecho de revisar, aprobar o solicitar correcciones a la información publicada.
                </p>
              </div>

              <div className="terms-section">
                <h3 className="terms-section-title">2. Aceptación de Puntos Z2</h3>
                <p className="terms-section-text">
                  El Organizador podrá habilitar la opción de que los corredores utilicen puntos Z2 para obtener un descuento sobre el precio de inscripción.
                </p>
                <p className="terms-section-text">
                  El Organizador acepta que:
                </p>
                <ul className="terms-list">
                  <li>El descuento será aplicado antes del pago final, según los parámetros que él mismo determine (porcentaje máximo permitido, equivalencias de puntos, etc.).</li>
                  <li>El valor del descuento otorgado es absorbido directamente por el Organizador, sin responsabilidad financiera para Z2.</li>
                  <li>Z2 no almacena ni administra dinero de inscripciones; únicamente facilita el proceso mediante enlaces de pago directo proporcionados por el Organizador.</li>
                </ul>
              </div>

              <div className="terms-section">
                <h3 className="terms-section-title">3. Responsabilidad del Organizador</h3>
                <p className="terms-section-text">
                  El Organizador declara y acepta que es el único responsable por:
                </p>
                <ul className="terms-list">
                  <li>La operación, logística y ejecución del evento.</li>
                  <li>La seguridad, integridad y atención a los participantes.</li>
                  <li>El cumplimiento de permisos, licencias, seguros y normativas aplicables.</li>
                  <li>El manejo de pagos, reembolsos, cancelaciones y aclaraciones relacionadas con la inscripción.</li>
                  <li>La validez y contenido de la carta de exoneración o liberación de responsabilidad del evento.</li>
                </ul>
                <p className="terms-section-text">
                  Z2 no forma parte de la organización, producción o ejecución del evento.
                </p>
              </div>

              <div className="terms-section">
                <h3 className="terms-section-title">4. Uso de Información y Datos</h3>
                <p className="terms-section-text">
                  El Organizador recibirá la información personal de los corredores inscritos vía Z2 exclusivamente para fines operativos del evento.
                  Se compromete a:
                </p>
                <ul className="terms-list">
                  <li>Cumplir con las leyes aplicables de privacidad y tratamiento de datos.</li>
                  <li>No vender, transferir o usar la información con fines distintos a la operación del evento.</li>
                  <li>Proteger adecuadamente la información recibida.</li>
                </ul>
              </div>

              <div className="terms-section">
                <h3 className="terms-section-title">5. Imagen, Logos y Contenido</h3>
                <p className="terms-section-text">
                  El Organizador autoriza a Z2 a usar el nombre del evento, logos, imágenes promocionales y fechas exclusivamente para:
                </p>
                <ul className="terms-list">
                  <li>Publicación dentro de la plataforma.</li>
                  <li>Envío de notificaciones y recordatorios.</li>
                  <li>Promoción dentro de la comunidad Z2.</li>
                </ul>
                <p className="terms-section-text">
                  Z2 no utilizará la marca del evento para fines distintos a los establecidos.
                </p>
              </div>

              <div className="terms-section">
                <h3 className="terms-section-title">6. Comunicación y Notificaciones</h3>
                <p className="terms-section-text">
                  Z2 podrá enviar mensajes o notificaciones push a corredores inscritos o interesados en el evento con el fin de:
                </p>
                <ul className="terms-list">
                  <li>Recordar fechas y horarios.</li>
                  <li>Informar cambios o actualizaciones.</li>
                  <li>Promover la participación.</li>
                </ul>
              </div>

              <div className="terms-section">
                <h3 className="terms-section-title">7. Limitación de Responsabilidad</h3>
                <p className="terms-section-text">
                  Z2 no es responsable por daños, incidentes, lesiones, cancelaciones o cualquier situación ocurrida antes, durante o después del evento.
                  Z2 actúa únicamente como canal de promoción y facilitador del proceso de inscripción.
                </p>
              </div>

              <div className="terms-section">
                <h3 className="terms-section-title">8. Terminación</h3>
                <p className="terms-section-text">
                  Z2 podrá suspender o dar de baja a cualquier Organizador que:
                </p>
                <ul className="terms-list">
                  <li>Publique información falsa o incompleta.</li>
                  <li>No cumpla estos términos.</li>
                  <li>Use la plataforma para fines no permitidos.</li>
                </ul>
              </div>

              <div className="terms-section">
                <h3 className="terms-section-title">9. Aceptación</h3>
                <p className="terms-section-text">
                  Al hacer clic en "Registrar Organizador" o utilizar la plataforma, El Organizador acepta formalmente estos Términos y Condiciones.
                </p>
              </div>
            </div>
            <div className="terms-modal-footer">
              <button
                className="terms-modal-button"
                onClick={() => setIsModalOpen(false)}
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Establishments
