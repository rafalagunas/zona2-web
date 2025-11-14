import { motion } from "framer-motion";
import {
  Users,
  Award,
  DollarSign,
  Target,
  Calendar,
  Gift,
  UserCheck,
  Trophy,
  Wallet,
  Repeat,
  Star,
  ThumbsUp,
  BarChart3,
  TrendingUp,
  Shield,
  MapPin,
} from "lucide-react";

function AboutSection() {
  return (
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
  );
}

export default AboutSection;

