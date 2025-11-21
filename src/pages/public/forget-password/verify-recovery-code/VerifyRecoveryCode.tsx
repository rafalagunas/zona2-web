import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, KeyRound } from "lucide-react";
import APIs from "../../../../services/services/APIs";
import "./VerifyRecoveryCode.css";

function VerifyRecoveryCode() {
  const navigate = useNavigate();
  const location = useLocation();
  const phone = location.state?.phone || "";
  
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Si no hay phone en el state, redirigir a forget-password
    if (!phone) {
      navigate("/forget-password");
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
      const response = await APIs.verifyRecoveryCode({
        phone: phone,
        code: codeString,
      });
      
      // Si la verificación es exitosa, redirigir a reset password
      if (response?.status === "success" && response?.verified === true) {
        navigate("/reset-password", { 
          state: { 
            phone: phone,
            login: response?.login || phone,
            code: codeString
          } 
        });
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

  return (
    <div className="verify-recovery-code">
      <div className="verify-recovery-code-container">
        <button
          className="verify-recovery-code-back-button"
          onClick={() => navigate("/forget-password")}
          aria-label="Volver"
        >
          <ArrowLeft size={20} />
          <span>Volver</span>
        </button>

        <div className="verify-recovery-code-content">
          <div className="verify-recovery-code-header">
            <div className="verify-recovery-code-icon-wrapper">
              <KeyRound className="verify-recovery-code-icon" size={48} />
            </div>
            <h1 className="verify-recovery-code-title">Verificar Código</h1>
            <p className="verify-recovery-code-subtitle">
              Ingresa el código de 6 dígitos que enviamos a tu teléfono
              {phone && (
                <span className="phone-number"> {phone}</span>
              )}
            </p>
          </div>

          <form className="verify-recovery-code-form" onSubmit={handleSubmit}>
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
              className="verify-recovery-code-submit-button"
              disabled={isSubmitting || code.join("").length !== 6}
            >
              {isSubmitting ? "Verificando..." : "Verificar Código"}
            </button>
          </form>

          <div className="verify-recovery-code-footer">
            <p>
              ¿No recibiste el código?{" "}
              <button
                type="button"
                className="resend-code-link"
                onClick={() => navigate("/forget-password", { state: { phone } })}
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

export default VerifyRecoveryCode;
