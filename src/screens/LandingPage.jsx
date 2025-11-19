import { useState, useEffect } from "react";
import Navigation from "../components/Navigation/Navigation";
import HeroSection from "../components/HeroSection/HeroSection";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import SponsorsSection from "../components/SponsorsSection/SponsorsSection";
import AboutSection from "../components/AboutSection/AboutSection";
import MethodologySection from "../components/MethodologySection/MethodologySection";
import FAQSection from "../components/FAQSection/FAQSection";
import ContactSection from "../components/ContactSection/ContactSection";
import PreregisterModal from "../components/PreregisterModal/PreregisterModal";
import Footer from "../components/Footer/Footer";
import BackgroundAudio from "../components/BackgroundAudio/BackgroundAudio";
import FloatingAppButtons from "../components/FloatingAppButtons/FloatingAppButtons";
import APIs from "../services/services/APIs";

function LandingPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Función para convertir formData a JSON y preparar para envío
  const prepareFormData = () => {
    // Mapear los datos al formato que espera el backend
    const dataToSend = {
      firstName: formData.firstName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
    };

    // Validar que todos los campos requeridos estén presentes
    if (!dataToSend.firstName || !dataToSend.email || !dataToSend.phone) {
      throw new Error("Por favor completa todos los campos requeridos");
    }

    return dataToSend;
  };

  // Función para enviar datos al endpoint
  const submitFormData = async (data) => {
    try {
      setIsSubmitting(true);

      // Log para desarrollo
      console.log("📤 Enviando datos del formulario:", data);

      // Llamar a la API para crear el usuario
      const response = await APIs.createUser(data);

      console.log("✅ Respuesta del servidor:", response);

      return { success: true, message: "Pre-registro exitoso", data: response };
    } catch (error) {
      console.error("❌ Error al enviar formulario:", error);

      // Extraer mensaje de error si está disponible
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Hubo un error al enviar el formulario";

      throw new Error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Preparar datos del formulario
    const dataToSend = prepareFormData();

    try {
      // Enviar datos al endpoint
      await submitFormData(dataToSend);

      // Marcar como enviado exitosamente
      setFormSubmitted(true);

      // Limpiar formulario y cerrar modal después de 3 segundos
      setTimeout(() => {
        setFormData({
          firstName: "",
          email: "",
          phone: "",
        });
        setFormSubmitted(false);
        closeModal();
      }, 3000);
    } catch (error) {
      // Manejar errores
      console.error("Error en el envío del formulario:", error);

      // Mostrar mensaje de error al usuario
      const errorMessage =
        error?.message ||
        "Hubo un error al enviar el formulario. Por favor, intenta de nuevo.";
      alert(errorMessage);

      // No cerrar el modal si hay error para que el usuario pueda intentar de nuevo
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let filteredValue = value;

    // Validaciones según el tipo de campo
    switch (name) {
      case "firstName":
        // Solo letras, espacios, acentos, ñ y guiones
        filteredValue = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s-]/g, "");
        break;

      case "email":
        // El tipo email ya valida el formato, pero permitimos caracteres válidos
        filteredValue = value;
        break;

      case "phone":
        // Solo números, espacios, +, -, paréntesis
        filteredValue = value.replace(/[^\d\s+\-()]/g, "");
        break;

      default:
        filteredValue = value;
    }

    setFormData({
      ...formData,
      [name]: filteredValue,
    });
  };

  // Handle ESC key to close modal and prevent body scroll
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="landing-page">
      <BackgroundAudio />
      <FloatingAppButtons />
      
      <Navigation onScrollToSection={scrollToSection} onOpenModal={openModal} />

      <HeroSection
        onScrollToSection={scrollToSection}
        onOpenModal={openModal}
      />

      <FeaturesSection />

      <SponsorsSection />

      <AboutSection />

      <MethodologySection onOpenModal={openModal} />

      <FAQSection />

      <ContactSection
        formData={formData}
        formSubmitted={formSubmitted}
        isSubmitting={isSubmitting}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      <PreregisterModal
        isOpen={isModalOpen}
        onClose={closeModal}
        formData={formData}
        formSubmitted={formSubmitted}
        isSubmitting={isSubmitting}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      <Footer onOpenModal={openModal} />
    </div>
  );
}

export default LandingPage;
