import { useState, useEffect } from "react";
import Navigation from "../components/Navigation/Navigation";
import HeroSection from "../components/HeroSection/HeroSection";
import AboutSection from "../components/AboutSection/AboutSection";
import SponsorsSection from "../components/SponsorsSection/SponsorsSection";
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
      
      <AboutSection />
      
      <SponsorsSection />
      
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
