import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Lock, ArrowLeft, Eye, EyeOff, Check } from "lucide-react";
import APIs from "../../../services/services/APIs";
import "./ResetPassword.css";

function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const login = location.state?.login || "";
  const phone = location.state?.phone || "";
  const code = location.state?.code || "";
  
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Si no hay login en el state, redirigir a forget-password
    if (!login && !phone) {
      navigate("/forget-password");
    }
  }, [login, phone, navigate]);

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

  const validatePassword = (password: string): string | null => {
    if (password.length < 8) {
      return "La contraseña debe tener al menos 8 caracteres";
    }
    if (!/[A-Z]/.test(password)) {
      return "La contraseña debe contener al menos una letra mayúscula";
    }
    if (!/[a-z]/.test(password)) {
      return "La contraseña debe contener al menos una letra minúscula";
    }
    if (!/[0-9]/.test(password)) {
      return "La contraseña debe contener al menos un número";
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    // Validar que las contraseñas coincidan
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden");
      setIsSubmitting(false);
      return;
    }

    // Validar la contraseña
    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      setErrorMessage(passwordError);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await APIs.resetPassword({
        phone: phone || login,
        login: login || phone,
        password: formData.password,
        code: code,
      });
      
      // Si el reset es exitoso
      if (response?.status === "success") {
        setIsSubmitted(true);
        setSuccessMessage("Contraseña restablecida exitosamente");
        
        // Redirigir al login después de 2 segundos
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setErrorMessage(
          response?.message || 
          "Error al restablecer la contraseña. Por favor intenta nuevamente."
        );
      }
    } catch (error: any) {
      setErrorMessage(
        error?.response?.data?.message || 
        error?.message || 
        "Error al restablecer la contraseña. Por favor intenta nuevamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="reset-password">
      <div className="reset-password-container">
        <button
          className="reset-password-back-button"
          onClick={() => navigate("/verify-recovery-code", { state: { phone: login || phone } })}
          aria-label="Volver"
        >
          <ArrowLeft size={20} />
          <span>Volver</span>
        </button>

        <div className="reset-password-content">
          {!isSubmitted ? (
            <>
              <div className="reset-password-header">
                <div className="reset-password-icon-wrapper">
                  <Lock className="reset-password-icon" size={48} />
                </div>
                <h1 className="reset-password-title">Restablecer Contraseña</h1>
                <p className="reset-password-subtitle">
                  Ingresa tu nueva contraseña. Asegúrate de que sea segura.
                </p>
              </div>

              <form className="reset-password-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="password" className="form-label">
                    Nueva Contraseña *
                  </label>
                  <div className="input-wrapper">
                    <Lock className="input-icon" size={20} />
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      className={`form-input ${errorMessage ? "input-error" : ""}`}
                      placeholder="Ingresa tu nueva contraseña"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      minLength={8}
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  <p className="password-hint">
                    Mínimo 8 caracteres, una mayúscula, una minúscula y un número
                  </p>
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirmar Contraseña *
                  </label>
                  <div className="input-wrapper">
                    <Lock className="input-icon" size={20} />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      className={`form-input ${errorMessage ? "input-error" : ""}`}
                      placeholder="Confirma tu nueva contraseña"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      minLength={8}
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      aria-label={showConfirmPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {errorMessage && (
                  <span className="error-message">{errorMessage}</span>
                )}

                <button
                  type="submit"
                  className="reset-password-submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Restableciendo..." : "Restablecer Contraseña"}
                </button>
              </form>
            </>
          ) : (
            <div className="reset-password-success">
              <div className="success-icon-wrapper">
                <Check className="success-icon" size={48} />
              </div>
              <h2 className="success-title">¡Contraseña Restablecida!</h2>
              <p className="success-message">{successMessage}</p>
              <p className="success-submessage">
                Serás redirigido al inicio de sesión en unos momentos...
              </p>
            </div>
          )}

          <div className="reset-password-footer">
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

export default ResetPassword;
