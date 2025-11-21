import React, { useState, useEffect } from 'react';
import { 
  Home,
  Wallet,
  Users,
  Gift,
  Settings
} from 'lucide-react';
import HomeComponent from './menus/home/Home';
import WalletComponent from './menus/wallet/Wallet';
import CommunityComponent from './menus/community/Community';
import ReferralsComponent from './menus/referrals/Referrals';
import ConfigurationsComponent from './menus/configurations/Configurations';
import { useStore } from '../../../zustand/userStore';
import APIs from '../../../services/services/APIs';
import { getToken } from '../../../utils/token.utility';
import './RootPage.css';

type MenuSection = 'home' | 'wallet' | 'community' | 'referrals' | 'config';

// Temporary storage for user data (not in Zustand)
let tempUserData: any = null;

export const getTempUserData = () => tempUserData;
export const setTempUserData = (data: any) => {
  tempUserData = data;
};

function RootPage() {
  const [activeSection, setActiveSection] = useState<MenuSection>('home');
  const { setUser, user } = useStore();

  // Obtener datos del usuario al cargar el componente o refrescar la página
  useEffect(() => {
    const fetchUserData = async () => {
      const token = getToken();
      if (token) {
        try {
          const response = await APIs.getSecUser();
          if (response && response.user) {
            // Guardar en Zustand
            setUser(response.user);
            // Guardar temporalmente (no en Zustand)
            setTempUserData(response.user);
          }
        } catch (error) {
          console.error('Error al obtener datos del usuario:', error);
        }
      }
    };

    // Siempre hacer la petición si hay token (incluso al refrescar)
    fetchUserData();
  }, [setUser]);

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <HomeComponent />;
      case 'wallet':
        return <WalletComponent />;
      case 'community':
        return <CommunityComponent />;
      case 'referrals':
        return <ReferralsComponent />;
      case 'config':
        return <ConfigurationsComponent />;
      default:
        return <HomeComponent />;
    }
  };

  return (
    <div className="root-page">
      {/* Content Area */}
      {renderContent()}

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <div 
          className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}
          onClick={() => setActiveSection('home')}
        >
          <Home className="nav-icon" size={24} />
          <span className="nav-label">Inicio</span>
        </div>
        <div 
          className={`nav-item ${activeSection === 'wallet' ? 'active' : ''}`}
          onClick={() => setActiveSection('wallet')}
        >
          <Wallet className="nav-icon" size={24} />
          <span className="nav-label">Wallet</span>
        </div>
        <div 
          className={`nav-item ${activeSection === 'community' ? 'active' : ''}`}
          onClick={() => setActiveSection('community')}
        >
          <Users className="nav-icon" size={24} />
          <span className="nav-label">Comunidad</span>
        </div>
        <div 
          className={`nav-item ${activeSection === 'referrals' ? 'active' : ''}`}
          onClick={() => setActiveSection('referrals')}
        >
          <Gift className="nav-icon" size={24} />
          <span className="nav-label">Gana</span>
        </div>
        <div 
          className={`nav-item ${activeSection === 'config' ? 'active' : ''}`}
          onClick={() => setActiveSection('config')}
        >
          <Settings className="nav-icon" size={24} />
          <span className="nav-label">Config</span>
        </div>
      </div>
    </div>
  );
}

export default RootPage;
