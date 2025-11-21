import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, KeyRound } from "lucide-react";
import APIs from "../../../../services/services/APIs";
import { useStore } from "../../../../zustand/userStore";
import { PrivateRoutes } from "../../../../models/routes";
import { setToken } from "../../../../utils/token.utility";
import { setLocalStorageItem } from "../../../../utils/localStorage.utility";
import "./VerifyOTP.css";

function VerifyOTP() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser } = useStore();
  const phone = location.state?.phone || "";
  
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Si no hay phone en el state, redirigir a login
    if (!phone) {
      navigate("/login");
    }
    // Enfocar el primer input al montar
    inputRefs.current[0]?.focus();
  }, [phone, navigate]);

  const handleChange = (index: number, value: string) => {
    // Solo permitir números
    if (value && !/^\d$/.test(value)) {
      return;
    }

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Limpiar error al escribir
    if (errorMessage) {
      setErrorMessage("");
    }

    // Auto-focus al siguiente input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (/^\d+$/.test(pastedData)) {
      const newCode = pastedData.split("").concat(Array(6 - pastedData.length).fill(""));
      setCode(newCode.slice(0, 6));
      // Enfocar el último input con valor o el siguiente vacío
      const nextIndex = Math.min(pastedData.length, 5);
      inputRefs.current[nextIndex]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const codeString = code.join("");
    
    if (codeString.length !== 6) {
      setErrorMessage("Por favor ingresa el código completo de 6 dígitos");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await APIs.login({
        code: codeString,
        phone: phone,
        login: phone,
      });
      
      // Si la verificación es exitosa, guardar usuario, token y redirigir
      if (response?.status === "success" && response?.user && response?.token) {
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
          "Código inválido. Por favor verifica el código enviado a tu teléfono."
        );
        setCode(["", "", "", "", "", ""]);
        inputRefs.current[0]?.focus();
      }
    } catch (error: any) {
      setErrorMessage(
        error?.response?.data?.message || 
        error?.message || 
        "Código inválido. Por favor verifica el código enviado a tu teléfono."
      );
      // Limpiar el código en caso de error
      setCode(["", "", "", "", "", ""]);
      inputRefs.current[0]?.focus();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendCode = async () => {
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // Para reenviar el código, necesitamos volver a la página de login
      // o usar loginValidation si tenemos la contraseña guardada
      // Por ahora, redirigimos al login para que el usuario ingrese sus credenciales nuevamente
      navigate("/login", { 
        state: { phone: phone, resendOTP: true } 
      });
    } catch (error: any) {
      setErrorMessage(
        error?.response?.data?.message || 
        error?.message || 
        "Error al reenviar el código. Intenta nuevamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="verify-otp">
      <div className="verify-otp-container">
        <button
          className="verify-otp-back-button"
          onClick={() => navigate("/login")}
          aria-label="Volver"
        >
          <ArrowLeft size={20} />
          <span>Volver</span>
        </button>

        <div className="verify-otp-content">
          <div className="verify-otp-header">
            <div className="verify-otp-icon-wrapper">
              <KeyRound className="verify-otp-icon" size={48} />
            </div>
            <h1 className="verify-otp-title">Verificar Código OTP</h1>
            <p className="verify-otp-subtitle">
              Ingresa el código de 6 dígitos que enviamos a tu teléfono
              {phone && (
                <span className="phone-number"> {phone}</span>
              )}
            </p>
          </div>

          <form className="verify-otp-form" onSubmit={handleSubmit}>
            <div className="code-inputs-container">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  className={`code-input ${errorMessage ? "input-error" : ""}`}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={index === 0 ? handlePaste : undefined}
                  autoComplete="off"
                  required
                />
              ))}
            </div>

            {errorMessage && (
              <span className="error-message">{errorMessage}</span>
            )}

            <button
              type="submit"
              className="verify-otp-submit-button"
              disabled={isSubmitting || code.join("").length !== 6}
            >
              {isSubmitting ? "Verificando..." : "Verificar Código"}
            </button>
          </form>

          <div className="verify-otp-footer">
            <p>
              ¿No recibiste el código?{" "}
              <button
                type="button"
                className="resend-code-link"
                onClick={handleResendCode}
                disabled={isSubmitting}
              >
                Reenviar código
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyOTP;

