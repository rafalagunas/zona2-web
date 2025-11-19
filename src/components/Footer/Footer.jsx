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

        <div className="footer-social">
          <p>Síguenos en redes sociales</p>
          <div className="social-links" style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
            <a 
              href="https://www.facebook.com/zona2/" 
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
              href="https://www.instagram.com/zona2.mx/" 
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
              href="https://x.com/zona2mx" 
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
                e.currentTarget.style.backgroundColor = '#000000';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
              aria-label="X (Twitter)"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/company/zona2" 
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

