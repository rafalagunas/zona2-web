import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

function Footer({ onOpenModal }) {
  return (
    <footer className="landing-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img
            src="/assets/zona2-logo.png"
            alt="Zona2"
            className="footer-logo"
          />
          <p className="footer-tagline">Corre, Conecta y Gana</p>
        </div>
        <div className="footer-links">
          <a href="#inicio">Inicio</a>
          <a href="#acerca">Acerca</a>
          <button 
            onClick={onOpenModal} 
            style={{ 
              background: 'none', 
              border: 'none', 
              color: 'inherit', 
              cursor: 'pointer', 
              padding: 0, 
              textAlign: 'left' 
            }}
          >
            Pre-registro
          </button>
        </div>
        
        {/* App Store Buttons */}
        <div className="footer-app-stores">
          <p style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '600' }}>Descarga la app</p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(0,0,0,0.7)',
                padding: '10px 16px',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24" fill="none">
                <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.61 3 21.09 3 20.5Z" fill="#32BBFF"/>
                <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z" fill="#32BBFF"/>
                <path d="M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.5 12.92 20.16 13.19L17.89 14.5L15.35 12L17.89 9.5L20.16 10.81Z" fill="#32BBFF"/>
                <path d="M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" fill="#32BBFF"/>
              </svg>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '8px', color: '#fff', lineHeight: '1.2' }}>GET IT ON</span>
                <span style={{ fontSize: '12px', fontWeight: '600', color: '#fff', lineHeight: '1.2' }}>Google Play</span>
              </div>
            </a>

            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(0,0,0,0.7)',
                padding: '10px 16px',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <svg style={{ width: '24px', height: '24px', color: '#fff' }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '8px', color: '#fff', lineHeight: '1.2' }}>Download on the</span>
                <span style={{ fontSize: '12px', fontWeight: '600', color: '#fff', lineHeight: '1.2' }}>App Store</span>
              </div>
            </a>
          </div>
        </div>

        <div className="footer-social">
          <p>Síguenos en redes sociales</p>
          <div className="social-links" style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
            <a 
              href="https://facebook.com/zona2running" 
              target="_blank"
              rel="noopener noreferrer"
              className="social-link" 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1877f2';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="https://instagram.com/zona2running" 
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://twitter.com/zona2running" 
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1da1f2';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="https://linkedin.com/company/zona2" 
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0077b5';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Zona². Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;

