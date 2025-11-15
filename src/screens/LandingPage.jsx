import { useState, useEffect } from "react";
import Navigation from "../components/Navigation/Navigation";
import HeroSection from "../components/HeroSection/HeroSection";
import AboutSection from "../components/AboutSection/AboutSection";
import SponsorsSection from "../components/SponsorsSection/SponsorsSection";
import FAQSection from "../components/FAQSection/FAQSection";
import PreregisterModal from "../components/PreregisterModal/PreregisterModal";
import Footer from "../components/Footer/Footer";

function LandingPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    smartwatchBrand: "",
    age: "",
    gender: "",
    cellphoneOS: "",
    runningExperience: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Función para convertir formData a JSON y preparar para envío
  const prepareFormData = () => {
    // Convertir age a número si tiene valor
    const dataToSend = {
      ...formData,
      age: formData.age ? parseInt(formData.age, 10) : null,
    };

    // Remover campos vacíos opcionales (excepto telefono que puede estar vacío)
    const cleanedData = Object.entries(dataToSend).reduce((acc, [key, value]) => {
      // Mantener telefono aunque esté vacío (es opcional)
      if (key === "telefono" || value !== "") {
        acc[key] = value;
      }
      return acc;
    }, {});

    return cleanedData;
  };

  // Función para enviar datos al endpoint
  const submitFormData = async (data) => {
    try {
      setIsSubmitting(true);
      
      // Convertir a JSON
      const jsonData = JSON.stringify(data, null, 2);
      
      // Por ahora solo imprimir el objeto JSON (para desarrollo)
      console.log("📤 Datos del formulario (JSON):");
      console.log(jsonData);
      console.log("📦 Objeto JavaScript:");
      console.log(data);
      
      // TODO: Descomentar cuando el endpoint esté listo
      /*
      const response = await fetch('https://api.ejemplo.com/api/preregister', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonData,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      console.log('✅ Respuesta del servidor:', result);
      return result;
      */

      // Simular delay de red para desarrollo
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return { success: true, message: "Pre-registro exitoso" };
    } catch (error) {
      console.error("❌ Error al enviar formulario:", error);
      throw error;
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
          nombre: "", 
          email: "", 
          telefono: "",
          smartwatchBrand: "",
          age: "",
          gender: "",
          cellphoneOS: "",
          runningExperience: "",
        });
        setFormSubmitted(false);
        closeModal();
      }, 3000);
    } catch (error) {
      // Manejar errores (por ahora solo en consola)
      console.error("Error en el envío del formulario:", error);
      // TODO: Mostrar mensaje de error al usuario
      alert("Hubo un error al enviar el formulario. Por favor, intenta de nuevo.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let filteredValue = value;

    // Validaciones según el tipo de campo
    switch (name) {
      case "nombre":
        // Solo letras, espacios, acentos, ñ y guiones
        filteredValue = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s-]/g, "");
        break;
      
      case "email":
        // El tipo email ya valida el formato, pero permitimos caracteres válidos
        filteredValue = value;
        break;
      
      case "telefono":
        // Solo números, espacios, +, -, paréntesis
        filteredValue = value.replace(/[^\d\s+\-()]/g, "");
        break;
      
      case "age":
        // Solo números, limitar a máximo 2 dígitos
        filteredValue = value.replace(/[^\d]/g, "");
        if (filteredValue.length > 2) {
          filteredValue = filteredValue.slice(0, 2);
        }
        // Validar rango solo si el valor completo está fuera del rango permitido
        if (filteredValue !== "") {
          const numValue = parseInt(filteredValue, 10);
          if (numValue > 99) {
            filteredValue = "99";
          }
          // Permitir escribir números menores a 18 mientras se escribe (ej: "1" para luego escribir "18")
          // La validación completa se hace en onBlur
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

  // Show modal on page load
  useEffect(() => {
    setIsModalOpen(true);
  }, []);

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
      <Navigation 
        onScrollToSection={scrollToSection}
        onOpenModal={openModal}
      />
      
      <HeroSection 
        onScrollToSection={scrollToSection}
        onOpenModal={openModal}
      />
      
      <SponsorsSection />
      
      <AboutSection />
      
      <FAQSection />
      
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
