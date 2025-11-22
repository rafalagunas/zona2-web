import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Building2, Mail, Phone, User } from "lucide-react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import APIs from "../services/services/APIs";
import "./OrganizersLanding.css";

function OrganizersLanding() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    establishment: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const prepareFormData = () => {
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedEstablishment = formData.establishment.trim();

    if (!trimmedName || !trimmedEmail || !trimmedPhone || !trimmedEstablishment) {
      throw new Error("Por favor completa todos los campos requeridos");
    }

    const dataToSend = {
      name: trimmedName,
      login: trimmedPhone,
      email: trimmedEmail,
      phone: trimmedPhone,
      establishment: trimmedEstablishment,
    };

    return dataToSend;
  };

  const submitFormData = async (data) => {
    try {
      setIsSubmitting(true);
      console.log("📤 Enviando datos del formulario:", data);

      const response = await APIs.createUser(data);

      console.log("✅ Respuesta del servidor:", response);

      if (response?.status === 'warning' || response?.status === 'success') {
        const message = response?.message || "Pre-registro exitoso";
        return { success: true, message, status: response.status, data: response };
      }

      return { success: true, message: "Pre-registro exitoso", status: 'success', data: response };
    } catch (error) {
      console.error("❌ Error al enviar formulario:", error);

      const errorResponse = error?.response?.data;
      if (errorResponse?.status === 'warning' || errorResponse?.status === 'success') {
        const message = errorResponse?.message || "Pre-registro exitoso";
        return { success: true, message, status: errorResponse.status, data: errorResponse };
      }

      const errorMessage =
        errorResponse?.message ||
        error?.message ||
        "Hubo un error al enviar el formulario";

      throw new Error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = prepareFormData();

    try {
      const result = await submitFormData(dataToSend);

      if (result?.status === 'warning') {
        const warningMessage = result.message || "El correo o teléfono ya existe";
        setErrorMessage(warningMessage);
        setIsSubmitting(false);
        return;
      }

      if (result?.status === 'success') {
        setSuccessMessage(result.message || "Pre-registro exitoso");
        setFormSubmitted(true);

        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            establishment: "",
          });
          setFormSubmitted(false);
          setSuccessMessage("");
        }, 3000);
      }
    } catch (error) {
      console.error("Error en el envío del formulario:", error);

      const errorMessage =
        error?.message ||
        "Hubo un error al enviar el formulario. Por favor, intenta de nuevo.";
      setErrorMessage(errorMessage);
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let filteredValue = value;

    switch (name) {
      case "name":
        filteredValue = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s-]/g, "");
        break;

      case "email":
        filteredValue = value;
        if (errorMessage) {
          setErrorMessage("");
        }
        break;

      case "phone":
        filteredValue = value.replace(/[^\d\s+\-()]/g, "");
        if (errorMessage) {
          setErrorMessage("");
        }
        break;

      case "establishment":
        filteredValue = value;
        if (errorMessage) {
          setErrorMessage("");
        }
        break;

      default:
        filteredValue = value;
    }

    setFormData({
      ...formData,
      [name]: filteredValue,
    });
  };

  const scrollToSection = () => {};

  return (
    <div className="organizers-landing">
      <Navigation onScrollToSection={scrollToSection} onOpenModal={() => {}} />
      
      <div className="organizers-hero">
        <button
          className="organizers-back-button"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={20} />
          <span>Volver</span>
        </button>

        <div className="organizers-hero-content">
          <div className="organizers-icon-wrapper">
            <Building2 className="organizers-icon" size={64} />
          </div>
          <h1 className="organizers-title">Organizadores / Establecimientos</h1>
          <p className="organizers-subtitle">
            Únete a Zona² y lleva tu evento o establecimiento al siguiente nivel.
            Conecta con corredores, organiza eventos y crece tu comunidad.
          </p>
        </div>
      </div>

      <div className="organizers-form-section">
        <div className="organizers-form-container">
          <h2 className="organizers-form-title">Pre-registro para Organizadores</h2>
          <p className="organizers-form-subtitle">
            Completa el formulario y nos pondremos en contacto contigo pronto.
          </p>

          <form className="organizers-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                <User size={18} />
                Nombre completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`form-input ${errorMessage ? "input-error" : ""}`}
                placeholder="Juan Pérez"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                <Mail size={18} />
                Correo electrónico *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-input ${errorMessage ? "input-error" : ""}`}
                placeholder="correo@ejemplo.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                <Phone size={18} />
                Teléfono *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className={`form-input ${errorMessage ? "input-error" : ""}`}
                placeholder="+52 999 123 4567"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="establishment" className="form-label">
                <Building2 size={18} />
                Nombre del establecimiento / organización *
              </label>
              <input
                type="text"
                id="establishment"
                name="establishment"
                className={`form-input ${errorMessage ? "input-error" : ""}`}
                placeholder="Mi Empresa S.A. de C.V."
                value={formData.establishment}
                onChange={handleChange}
                required
              />
            </div>

            {errorMessage && (
              <div className="form-error-message">
                {errorMessage}
              </div>
            )}

            {successMessage && (
              <div className="form-success-message">
                {successMessage}
              </div>
            )}

            <button
              type="submit"
              className="organizers-submit-button"
              disabled={isSubmitting || formSubmitted}
            >
              {isSubmitting
                ? "Enviando..."
                : formSubmitted
                ? "¡Enviado!"
                : "Enviar Pre-registro"}
            </button>
          </form>
        </div>
      </div>

      <Footer onOpenModal={() => {}} />
    </div>
  );
}

export default OrganizersLanding;

