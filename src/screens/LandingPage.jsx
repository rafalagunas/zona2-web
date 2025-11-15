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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se conectaría con el backend
    console.log("Pre-registro:", formData);
    setFormSubmitted(true);
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
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      
      <Footer onOpenModal={openModal} />
    </div>
  );
}

export default LandingPage;
