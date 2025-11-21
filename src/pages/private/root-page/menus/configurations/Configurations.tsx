import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  User, 
  Lock, 
  Bell, 
  Globe, 
  HelpCircle, 
  ChevronRight,
  Moon
} from 'lucide-react';
import { useStore } from '../../../../../zustand/userStore';
import { getTempUserData } from '../../RootPage';
import './Configurations.css';

function Configurations() {
  const { user } = useStore();
  const [tempUser, setTempUser] = useState<any>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [notifications, setNotifications] = useState(true);

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

  // Obtener iniciales del nombre
  const getInitials = (name: string | undefined) => {
    if (!name) return 'U';
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  // Obtener nombre completo o solo el primero
  const getUserName = () => {
    const name = userData?.name || 'Usuario';
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return `${parts[0]} ${parts[1][0]}.`;
    }
    return name;
  };

  // Obtener email
  const userEmail = userData?.email || 'usuario@zona2.mx';

  // Determinar si es Premium (basado en TipoMembresia o NivelRunner)
  const isPremium = userData?.TipoMembresia === 'P' || userData?.NivelRunner === 'P';

  // Toggle theme
  const handleThemeToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    // Aquí podrías guardar la preferencia en localStorage o hacer una llamada a la API
  };

  // Toggle notifications
  const handleNotificationsToggle = () => {
    setNotifications(!notifications);
    // Aquí podrías guardar la preferencia en localStorage o hacer una llamada a la API
  };

  return (
    <div className="configurations-page">
      {/* User Profile Section */}
      <div className="config-profile-card">
        <div className="config-avatar">
          <div className="config-avatar-circle">
            {getInitials(userData?.name)}
          </div>
        </div>
        <div className="config-profile-info">
          <h2 className="config-user-name">{getUserName()}</h2>
          <p className="config-user-email">{userEmail}</p>
          {isPremium && (
            <div className="config-premium-badge">
              Premium Runner
            </div>
          )}
        </div>
      </div>

      {/* Settings Sections */}
      <div className="config-sections">
        {/* Apariencia */}
        <div className="config-section-card">
          <div className="config-setting-item">
            <div className="config-setting-left">
              <Sun className="config-setting-icon appearance-icon" size={20} />
              <div className="config-setting-text">
                <span className="config-setting-title">Tema</span>
                <span className="config-setting-subtitle">
                  {theme === 'dark' ? 'Oscuro' : 'Claro'}
                </span>
              </div>
            </div>
            <label className="config-toggle">
              <input
                type="checkbox"
                checked={theme === 'light'}
                onChange={handleThemeToggle}
              />
              <span className="config-toggle-slider"></span>
            </label>
          </div>
        </div>

        {/* Cuenta */}
        <div className="config-section-card">
          <div className="config-setting-item">
            <div className="config-setting-left">
              <User className="config-setting-icon account-icon" size={20} />
              <span className="config-setting-title">Información personal</span>
            </div>
            <ChevronRight className="config-arrow-icon" size={20} />
          </div>
          <div className="config-setting-divider"></div>
          <div className="config-setting-item">
            <div className="config-setting-left">
              <Lock className="config-setting-icon security-icon" size={20} />
              <span className="config-setting-title">Privacidad y seguridad</span>
            </div>
            <ChevronRight className="config-arrow-icon" size={20} />
          </div>
        </div>

        {/* Preferencias */}
        <div className="config-section-card">
          <div className="config-setting-item">
            <div className="config-setting-left">
              <Bell className="config-setting-icon preferences-icon" size={20} />
              <div className="config-setting-text">
                <span className="config-setting-title">Notificaciones</span>
                <span className="config-setting-subtitle">
                  {notifications ? 'Activadas' : 'Desactivadas'}
                </span>
              </div>
            </div>
            <label className="config-toggle">
              <input
                type="checkbox"
                checked={notifications}
                onChange={handleNotificationsToggle}
              />
              <span className="config-toggle-slider"></span>
            </label>
          </div>
          <div className="config-setting-divider"></div>
          <div className="config-setting-item">
            <div className="config-setting-left">
              <Globe className="config-setting-icon preferences-icon" size={20} />
              <div className="config-setting-text">
                <span className="config-setting-title">Idioma</span>
                <span className="config-setting-subtitle">Español</span>
              </div>
            </div>
            <ChevronRight className="config-arrow-icon" size={20} />
          </div>
        </div>

        {/* Soporte */}
        <div className="config-section-card">
          <div className="config-setting-item">
            <div className="config-setting-left">
              <HelpCircle className="config-setting-icon support-icon" size={20} />
              <span className="config-setting-title">Ayuda y soporte</span>
            </div>
            <ChevronRight className="config-arrow-icon" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Configurations;
