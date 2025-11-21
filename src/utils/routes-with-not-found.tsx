import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import type { ReactNode } from "react";
import { Home, ArrowLeft } from "lucide-react";
import "./routes-with-not-found.css";

interface Props {
  children: ReactNode;
}

const NotFound = () => {
  const navigate = useNavigate();
  
  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <div className="not-found-content">
          <div className="not-found-icon-wrapper">
            <div className="not-found-number">404</div>
          </div>
          <h1 className="not-found-title">Página no encontrada</h1>
          <p className="not-found-message">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
          <div className="not-found-actions">
            <button
              className="not-found-button primary"
              onClick={() => navigate("/home")}
            >
              <Home size={20} />
              <span>Ir al Inicio</span>
            </button>
            <button
              className="not-found-button secondary"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft size={20} />
              <span>Volver</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const RoutesWithNotFound = ({children}: Props) => {
  return (
    <Routes>
        {children}
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default RoutesWithNotFound
