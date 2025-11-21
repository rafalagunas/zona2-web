import React, { useState, useEffect } from 'react';
import { Copy, Check, Gift, Users, Share2, Link2, Code, TrendingUp } from 'lucide-react';
import { useStore } from '../../../../../zustand/userStore';
import { getTempUserData } from '../../RootPage';
import './Referrals.css';

function Referrals() {
  const { user } = useStore();
  const [tempUser, setTempUser] = useState<any>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  // Obtener datos temporales del usuario
  useEffect(() => {
    const tempData = getTempUserData();
    if (tempData) {
      setTempUser(tempData);
    } else if (user) {
      setTempUser(user);
    }
  }, [user]);

  // Usar datos temporales si están disponibles, sino usar el store
  const userData = tempUser || user;

  // Generar link de referido
  const referralLink = userData?.AliasRunner 
    ? `https://zona2.mx/registro?ref=${userData.AliasRunner}`
    : userData?.RunnerUID
    ? `https://zona2.mx/registro?ref=${userData.RunnerUID}`
    : 'https://zona2.mx/registro';

  // Código de referido
  const referralCode = userData?.AliasRunner || userData?.RunnerUID || '';

  // Estadísticas
  const totalInvitations = userData?.InvitacionesTotales || 0;
  const monthlyInvitations = userData?.InvitacionesMensuales || 0;

  // Función para copiar al portapapeles
  const copyToClipboard = async (text: string, type: 'link' | 'code') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'link') {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
      } else {
        setCopiedCode(true);
        setTimeout(() => setCopiedCode(false), 2000);
      }
    } catch (err) {
      console.error('Error al copiar:', err);
      // Fallback para navegadores que no soportan clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      if (type === 'link') {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
      } else {
        setCopiedCode(true);
        setTimeout(() => setCopiedCode(false), 2000);
      }
    }
  };

  // Función para compartir (si está disponible)
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Únete a Zona²',
          text: 'Únete a Zona² y gana recompensas por tu actividad deportiva',
          url: referralLink,
        });
      } catch (err) {
        console.error('Error al compartir:', err);
      }
    } else {
      // Si no hay soporte para share, copiar el link
      copyToClipboard(referralLink, 'link');
    }
  };

  return (
    <div className="referrals-page">
      {/* Header */}
      <div className="referrals-header">
        <h1 className="referrals-title">Gana con Referidos</h1>
        <p className="referrals-subtitle">
          Invita a tus amigos y gana recompensas por cada invitación
        </p>
      </div>

      {/* Main Content */}
      <div className="referrals-content">
        {/* Stats Cards */}
        <div className="referrals-stats">
          <div className="referral-stat-card">
            <Users className="stat-icon" size={24} />
            <div className="stat-info">
              <div className="stat-value">{totalInvitations}</div>
              <div className="stat-label">Total Invitaciones</div>
            </div>
          </div>
          <div className="referral-stat-card">
            <TrendingUp className="stat-icon" size={24} />
            <div className="stat-info">
              <div className="stat-value">{monthlyInvitations}</div>
              <div className="stat-label">Este Mes</div>
            </div>
          </div>
        </div>

        {/* Referral Link Card */}
        <div className="referral-card">
          <div className="referral-card-header">
            <Link2 className="referral-card-icon" size={24} />
            <div>
              <h3 className="referral-card-title">Tu Link de Referido</h3>
              <p className="referral-card-description">
                Comparte este link con tus amigos para que se registren
              </p>
            </div>
          </div>
          <div className="referral-input-group">
            <input
              type="text"
              className="referral-input"
              value={referralLink}
              readOnly
            />
            <button
              className="referral-copy-button"
              onClick={() => copyToClipboard(referralLink, 'link')}
            >
              {copiedLink ? (
                <>
                  <Check size={18} />
                  <span>Copiado</span>
                </>
              ) : (
                <>
                  <Copy size={18} />
                  <span>Copiar</span>
                </>
              )}
            </button>
          </div>
          <button
            className="referral-share-button"
            onClick={handleShare}
          >
            <Share2 size={18} />
            <span>Compartir</span>
          </button>
        </div>

        {/* Referral Code Card */}
        <div className="referral-card">
          <div className="referral-card-header">
            <Code className="referral-card-icon" size={24} />
            <div>
              <h3 className="referral-card-title">Tu Código de Referido</h3>
              <p className="referral-card-description">
                Comparte este código para que otros lo usen al registrarse
              </p>
            </div>
          </div>
          <div className="referral-code-display">
            <div className="referral-code-value">{referralCode}</div>
            <button
              className="referral-code-copy-button"
              onClick={() => copyToClipboard(referralCode, 'code')}
            >
              {copiedCode ? (
                <>
                  <Check size={18} />
                  <span>Copiado</span>
                </>
              ) : (
                <>
                  <Copy size={18} />
                  <span>Copiar Código</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Benefits Card */}
        <div className="referral-benefits-card">
          <Gift className="benefits-icon" size={32} />
          <h3 className="benefits-title">¿Cómo Funciona?</h3>
          <div className="benefits-list">
            <div className="benefit-item">
              <div className="benefit-number">1</div>
              <div className="benefit-text">
                <strong>Comparte tu link o código</strong>
                <p>Envía tu link de referido o código a tus amigos</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-number">2</div>
              <div className="benefit-text">
                <strong>Ellos se registran</strong>
                <p>Tu amigo se registra usando tu link o código</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-number">3</div>
              <div className="benefit-text">
                <strong>Ganas recompensas</strong>
                <p>Recibe puntos y beneficios por cada invitación exitosa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Referrals;
