import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, Lock, ArrowLeft } from "lucide-react";
import APIs from "../../../services/services/APIs";
import { useStore } from "../../../zustand/userStore";
import { PrivateRoutes } from "../../../models/routes";
import { setToken } from "../../../utils/token.utility";
import { setLocalStorageItem } from "../../../utils/localStorage.utility";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const { setUser } = useStore();
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Limpiar mensaje de error al escribir
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await APIs.loginValidation({
        login: formData.phone,
        password: formData.password,
      });
      
      // Si la respuesta indica que se envió el OTP exitosamente, redirigir a la página de verificación
      if (response?.status === "success" && (response?.otp || response?.message?.toLowerCase().includes("otp"))) {
        navigate("/verify-otp", { 
          state: { phone: formData.phone } 
        });
        return; // Importante: salir de la función para evitar ejecutar código adicional
      }
      // Si el login es exitoso sin OTP, guardar usuario, token y login en localStorage
      else if (response?.status === "success" && response?.user && response?.token) {
        // Guardar token
        setToken(response.token);
        
        // Guardar número de celular (login)
        if (response.user.login) {
          setLocalStorageItem('zona2UserLogin', response.user.login);
        }
        
        // Guardar usuario en el store
        setUser(response.user);
        
        navigate(`/${PrivateRoutes.HOME}`);
      } else {
        setErrorMessage(
          response?.message || 
          "Error al iniciar sesión. Verifica tus credenciales."
        );
      }
    } catch (error: any) {
      setErrorMessage(
        error?.response?.data?.message || 
        error?.message || 
        "Error al iniciar sesión. Verifica tus credenciales."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <button
          className="login-back-button"
          onClick={() => navigate("/")}
          aria-label="Volver al inicio"
        >
          <ArrowLeft size={20} />
          <span>Volver</span>
        </button>

        <div className="login-content">
          <div className="login-header">
            <h1 className="login-title">Iniciar Sesión</h1>
            <p className="login-subtitle">
              Ingresa tu número telefónico y contraseña para acceder
            </p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
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

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Contraseña *
              </label>
              <div className="input-wrapper">
                <Lock className="input-icon" size={20} />
                <input
                  type="password"
                  id="password"
                  name="password"
                  className={`form-input ${errorMessage ? "input-error" : ""}`}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" className="checkbox-input" />
                <span>Recordar sesión</span>
              </label>
              <button
                type="button"
                className="forgot-password-link"
                onClick={() => navigate("/forget-password")}
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            <button
              type="submit"
              className="login-submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Iniciando sesión..." : "Iniciar Sesión"}
            </button>
          </form>

          <div className="login-footer">
            <p>
              ¿No tienes cuenta?{" "}
              <button
                className="register-link"
                onClick={() => navigate("/")}
              >
                Regístrate aquí
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
