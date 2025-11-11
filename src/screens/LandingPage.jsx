import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Play,
  TrendingUp,
  Users,
  Award,
  DollarSign,
  Heart,
  MapPin,
  Clock,
  Check,
  Target,
  Gift,
  Star,
  Shield,
  Calendar,
  Wallet,
  Repeat,
  Trophy,
  ThumbsUp,
  BarChart3,
  UserCheck,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

function LandingPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se conectaría con el backend
    console.log("Pre-registro:", formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ nombre: "", email: "", telefono: "" });
      setFormSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="landing-nav">
        <div className="nav-container">
          <div className="nav-logo">
            <img
              src="/assets/zona2-logo.png"
              alt="Zona2 Logo"
              className="logo-img"
            />
            <span className="logo-text">Zona²</span>
          </div>
          <div className="nav-links">
            <button
              onClick={() => scrollToSection("inicio")}
              className="nav-link"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("acerca")}
              className="nav-link"
            >
              Acerca del Proyecto
            </button>
            <button
              onClick={() => scrollToSection("pre-registro")}
              className="nav-link-btn"
            >
              Pre-registro
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Inicio */}
      <section id="inicio" className="hero-section">
        <div className="hero-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <div className="hero-badge">
              <Play size={16} />
              <span>Próximamente</span>
            </div>

            <h1 className="hero-title">
              Corre en <span className="text-gradient">Zona 2,</span>
              <br />
              <span className="text-gradient">Conecta</span> con corredores,
              <br />y <span className="text-gradient">Gana</span> dinero real
            </h1>

            <p className="hero-description">
              Zona2 te paga por solo correr, así de simple. Como Runner, ganas
              por tu constancia e invitaciones. Como Pacer Certificado, lideras
              rutas y cobras por cada experiencia. Como Visitante, descubres
              nuevas ciudades con guías locales.
            </p>

            <div className="hero-buttons">
              <button
                onClick={() => scrollToSection("pre-registro")}
                className="btn-primary"
              >
                Únete al Pre-registro
              </button>
              <button
                onClick={() => scrollToSection("acerca")}
                className="btn-secondary"
              >
                Conocer más
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">1000+</div>
                <div className="stat-label">Corredores en lista</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">$50K+</div>
                <div className="stat-label">En recompensas</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Ciudades</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-image"
          >
            <div className="hero-mockup">
              <img
                src="/assets/zona2-logo.png"
                alt="Zona2 App"
                className="mockup-logo"
              />
              <div className="mockup-decoration"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section - Acerca del Proyecto */}
      <section id="acerca" className="about-section">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2 className="section-title">¿Cómo ganas en Zona²?</h2>
            <p className="section-subtitle">
              Zona2 te paga por solo correr, así de simple.
            </p>
          </motion.div>

          {/* Intro Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="intro-text"
          >
            <p>
              Como <strong>Runner</strong>, ganas recompensas por tu constancia
              y por invitar nuevos corredores. Si eres{" "}
              <strong>Pacer Certificado</strong>, lideras rutas, acompañas
              visitantes y cobras por cada experiencia. Y como{" "}
              <strong>Runner Visitante</strong>, descubres nuevas ciudades
              corriendo junto a pacers locales que te guían con seguridad y
              energía.
            </p>
          </motion.div>

          {/* Runner Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="role-section runner-section"
          >
            <div className="role-header">
              <div className="role-icon">
                <Users size={40} />
              </div>
              <div>
                <h3 className="role-title">Runner</h3>
                <p className="role-subtitle">Ganas así</p>
              </div>
            </div>

            <div className="role-benefits">
              <div className="benefit-row">
                <Target size={20} />
                <div>
                  <strong>Actividad diaria:</strong> suma días activos y
                  desbloquea tu bono mensual.
                </div>
              </div>
              <div className="benefit-row">
                <Calendar size={20} />
                <div>
                  <strong>Meta 20 días/mes:</strong> asegura tu recompensa fija
                  por constancia.
                </div>
              </div>
              <div className="benefit-row">
                <Gift size={20} />
                <div>
                  <strong>Invitaciones:</strong> por cada nuevo runner válido
                  recibes un bono inmediato.
                </div>
              </div>
              <div className="benefit-row">
                <UserCheck size={20} />
                <div>
                  <strong>Haz pacers a tus amigos:</strong> cuando se
                  certifiquen, tus beneficios escalan.
                </div>
              </div>
              <div className="benefit-row">
                <Trophy size={20} />
                <div>
                  <strong>Retos y medallas:</strong> logros que añaden Z2 y
                  mejoran tu ranking.
                </div>
              </div>
              <div className="benefit-row">
                <Wallet size={20} />
                <div>
                  <strong>Wallet automática:</strong> tus bonos se acumulan y se
                  liquidan una vez al año.
                </div>
              </div>
              <div className="benefit-row">
                <Repeat size={20} />
                <div>
                  <strong>Renovación auto-liquidable:</strong> la membresía se
                  descuenta del saldo acumulado.
                </div>
              </div>
              <div className="benefit-row">
                <Star size={20} />
                <div>
                  <strong>Eventos y promos:</strong> participa en sesiones
                  especiales con recompensas extra.
                </div>
              </div>
              <div className="benefit-row">
                <ThumbsUp size={20} />
                <div>
                  <strong>Reputación Z2:</strong> recibe Z2 de otros runners y
                  sube de nivel.
                </div>
              </div>
              <div className="benefit-row">
                <BarChart3 size={20} />
                <div>
                  <strong>Panel de control:</strong> sigue puntos, invitaciones
                  y proyección de ganancias.
                </div>
              </div>
            </div>

            <div className="role-cta">
              <DollarSign size={24} />
              <p>
                <strong>Siempre ganas:</strong> por correr, invitar y hacer
                crecer tu red.
              </p>
            </div>
          </motion.div>

          {/* Pacer Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="role-section pacer-section"
          >
            <div className="role-header">
              <div className="role-icon">
                <Award size={40} />
              </div>
              <div>
                <h3 className="role-title">Pacer Certificado</h3>
                <p className="role-subtitle">Ganas así</p>
              </div>
            </div>

            <div className="role-benefits">
              <div className="benefit-row">
                <DollarSign size={20} />
                <div>
                  <strong>Sesiones pagadas:</strong> ingresos por acompañar a
                  visitantes en rutas locales.
                </div>
              </div>
              <div className="benefit-row">
                <Gift size={20} />
                <div>
                  <strong>Propinas:</strong> mejora tus ingresos con servicios
                  premium y buena reputación.
                </div>
              </div>
              <div className="benefit-row">
                <Calendar size={20} />
                <div>
                  <strong>Disponibilidad:</strong> abre tu agenda y acepta
                  reservas cuando te convenga.
                </div>
              </div>
              <div className="benefit-row">
                <TrendingUp size={20} />
                <div>
                  <strong>Niveles de pacer:</strong> mejores calificaciones →
                  más visibilidad y tarifas.
                </div>
              </div>
              <div className="benefit-row">
                <Star size={20} />
                <div>
                  <strong>Extras vendidos:</strong> hidratación, fotos, kits y
                  rutas personalizadas.
                </div>
              </div>
              <div className="benefit-row">
                <Users size={20} />
                <div>
                  <strong>Bonos por invitación:</strong> si traes nuevos
                  runners/pacers también sumas.
                </div>
              </div>
              <div className="benefit-row">
                <Wallet size={20} />
                <div>
                  <strong>Comisiones transparentes:</strong> ves cada cargo y
                  pago en tu wallet.
                </div>
              </div>
              <div className="benefit-row">
                <Repeat size={20} />
                <div>
                  <strong>Recurrentes:</strong> paquetes por día/semana con
                  ingresos acumulados.
                </div>
              </div>
              <div className="benefit-row">
                <Shield size={20} />
                <div>
                  <strong>Seguridad & seguro:</strong> confianza para ti y tus
                  clientes en cada sesión.
                </div>
              </div>
              <div className="benefit-row">
                <UserCheck size={20} />
                <div>
                  <strong>Marca personal:</strong> perfil público con rutas,
                  fotos y reviews verificados.
                </div>
              </div>
            </div>

            <div className="role-cta">
              <MapPin size={24} />
              <p>
                <strong>Monetiza tu experiencia</strong> corriendo y lidera
                rutas en tu ciudad.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="sponsors-section">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2 className="section-title">Nuestros Aliados</h2>
            <p className="section-subtitle">
              Empresas y organizaciones que confían en Zona² para impulsar el running en México
            </p>
          </motion.div>

          <div className="sponsors-carousel">
            <div className="sponsors-track">
              {/* First set of sponsors */}
              <div className="sponsor-item">
                <img src="/assets/sponsors/mmerida.jpg" alt="Municipio de Mérida" />
              </div>
              <div className="sponsor-item">
                <img src="/assets/sponsors/vivedeporte.png" alt="Vive Deporte" />
              </div>
              <div className="sponsor-item">
                <img src="/assets/sponsors/edifactMx.png" alt="Edifact MX" />
              </div>
              <div className="sponsor-item">
                <img src="/assets/sponsors/amerida.png" alt="A Mérida" />
              </div>
              <div className="sponsor-item">
                <img src="/assets/sponsors/munacarreras.jpeg" alt="Muna Carreras" />
              </div>
              <div className="sponsor-item">
                <img src="/assets/sponsors/carrerasyucatan.jpeg" alt="Carreras Yucatán" />
              </div>
              <div className="sponsor-item">
                <img src="/assets/sponsors/hazlo.jpeg" alt="Hazlo" />
              </div>
              <div className="sponsor-item">
                <img src="/assets/sponsors/planetamaraton.jpeg" alt="Planeta Maratón" />
              </div>
              <div className="sponsor-item">
                <img src="/assets/sponsors/aiym.jpeg" alt="AIYM" />
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="sponsor-item">
                <img src="/assets/sponsors/mmerida.jpg" alt="Municipio de Mérida" />
              </div>
              <div className="sponsor-item">
                <img src="/assets/sponsors/vivedeporte.png" alt="Vive Deporte" />
              </div>
              <div className="sponsor-item">
                <img src="/assets/sponsors/edifactMx.png" alt="Edifact MX" />
              </div>
              <div className="sponsor-item">
                <img src="/assets/sponsors/amerida.png" alt="A Mérida" />
              </div>
              <div className="sponsor-item">
                <img src="/assets/sponsors/munacarreras.jpeg" alt="Muna Carreras" />
              </div>
              <div className="sponsor-item">
                <img src="/assets/sponsors/carrerasyucatan.jpeg" alt="Carreras Yucatán" />
              </div>
              <div className="sponsor-item">
                <img src="/assets/sponsors/hazlo.jpeg" alt="Hazlo" />
              </div>
              <div className="sponsor-item">
                <img src="/assets/sponsors/planetamaraton.jpeg" alt="Planeta Maratón" />
              </div>
              <div className="sponsor-item">
                <img src="/assets/sponsors/aiym.jpeg" alt="AIYM" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-registro Section */}
      <section id="pre-registro" className="preregister-section">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="preregister-content"
          >
            <div className="preregister-info">
              <h2 className="section-title">Únete al Pre-registro</h2>
              <p className="section-subtitle">
                Sé de los primeros en probar Zona² y obtén beneficios exclusivos
              </p>

              <div className="benefits-list">
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4>Acceso anticipado</h4>
                    <p>Prueba la app antes del lanzamiento oficial</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <DollarSign size={24} />
                  </div>
                  <div>
                    <h4>Bonus de bienvenida</h4>
                    <p>Z2 tokens gratis al registrarte ($200 MXN)</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4>Plan Premium gratis</h4>
                    <p>3 meses de membresía premium sin costo</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="preregister-form-container">
              <form onSubmit={handleSubmit} className="preregister-form">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre completo</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Juan Pérez"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Correo electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="juan@ejemplo.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="telefono">Teléfono (opcional)</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+52 999 123 4567"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-submit"
                  disabled={formSubmitted}
                >
                  {formSubmitted ? (
                    <>
                      <Check size={20} />
                      ¡Registrado exitosamente!
                    </>
                  ) : (
                    "Registrarme ahora"
                  )}
                </button>

                <p className="form-disclaimer">
                  Al registrarte aceptas recibir notificaciones sobre el
                  lanzamiento de Zona². No compartiremos tu información.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
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
            <a href="#pre-registro">Pre-registro</a>
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
    </div>
  );
}

export default LandingPage;
