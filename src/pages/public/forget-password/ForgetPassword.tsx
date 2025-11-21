import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, ArrowLeft, Check } from "lucide-react";
import APIs from "../../../services/services/APIs";
import "./ForgetPassword.css";

function ForgetPassword() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phone: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Limpiar mensajes al escribir
    if (errorMessage) {
      setErrorMessage("");
    }
    if (successMessage) {
      setSuccessMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await APIs.forgetPassword({
        phone: formData.phone,
      });
      
      // Verificar si la respuesta es exitosa y el usuario existe
      if (response?.status === "success" && response?.exists === true) {
        // Navegar a la página de verificación de código
        navigate("/verify-recovery-code", { 
          state: { phone: formData.phone } 
        });
      } else {
        setErrorMessage(
          response?.message || 
          "No se pudo enviar el código de recuperación. Verifica tu número telefónico."
        );
      }
    } catch (error: any) {
      setErrorMessage(
        error?.response?.data?.message || 
        error?.message || 
        "Error al solicitar recuperación de contraseña. Verifica tu número telefónico."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="forget-password">
      <div className="forget-password-container">
        <button
          className="forget-password-back-button"
          onClick={() => navigate("/login")}
          aria-label="Volver al login"
        >
          <ArrowLeft size={20} />
          <span>Volver</span>
        </button>

        <div className="forget-password-content">
          <div className="forget-password-header">
            <h1 className="forget-password-title">Recuperar Contraseña</h1>
            <p className="forget-password-subtitle">
              {isSubmitted
                ? "Revisa tu teléfono para el código de recuperación"
                : "Ingresa tu número telefónico para recuperar tu contraseña"}
            </p>
          </div>

          {!isSubmitted ? (
            <form className="forget-password-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Número telefónico *
                </label>
                <div className="input-wrapper">
                  <Phone className="input-icon" size={20} />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={`form-input ${errorMessage ? "input-error" : ""}`}
                    placeholder="+52 999 123 4567"
                    value={formData.phone}
                    onChange={handleChange}
                    onKeyDown={(e) => {
                      // Solo permitir números, espacios, +, - y paréntesis
                      if (!/[0-9\s+\-()]/.test(e.key) && !['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                        e.preventDefault();
                      }
                    }}
                    required
                  />
                </div>
                {errorMessage && (
                  <span className="error-message">{errorMessage}</span>
                )}
              </div>

              <button
                type="submit"
                className="forget-password-submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar Código de Recuperación"}
              </button>
            </form>
          ) : (
            <div className="forget-password-success">
              <div className="success-icon-wrapper">
                <Check className="success-icon" size={48} />
              </div>
              <p className="success-message">{successMessage}</p>
              <button
                className="forget-password-back-to-login-button"
                onClick={() => navigate("/login")}
              >
                Volver al Inicio de Sesión
              </button>
            </div>
          )}

          <div className="forget-password-footer">
            <p>
              ¿Recordaste tu contraseña?{" "}
              <button
                className="login-link"
                onClick={() => navigate("/login")}
              >
                Inicia sesión aquí
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
