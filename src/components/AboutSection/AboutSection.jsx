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
  Zap,
  Percent,
  Crown,
  Sparkles,
  UsersRound,
  Store,
  Medal,
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
          <h2 className="section-title">Acerca del Proyecto</h2>
          <p className="section-subtitle">
            Transforma tu motivación deportiva en reconocimiento real
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
            Z2 es una aplicación gratuita creada para transformar la motivación deportiva en reconocimiento real. 
            Su estructura combina tecnología, comunidad y gamificación para convertir cada actividad física, 
            logro y conexión social en valor digital. La plataforma promueve una economía simbólica, donde los 
            corredores acumulan puntos por su esfuerzo y los canjean por beneficios, descuentos o reconocimiento 
            dentro de la comunidad.
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
              <h3 className="role-title">Beneficios del Runner</h3>
              <p className="role-subtitle">Tu esfuerzo se convierte en valor</p>
            </div>
          </div>

          <div className="role-benefits">
            <div className="benefit-row">
              <Gift size={20} />
              <div>
                <strong>10,000 puntos de bienvenida:</strong> al registrarte recibes puntos válidos por 90 días.
              </div>
            </div>
            <div className="benefit-row">
              <Percent size={20} />
              <div>
                <strong>Descuentos reales:</strong> canjea puntos en carreras y comercios asociados (hasta 50% de descuento).
              </div>
            </div>
            <div className="benefit-row">
              <Zap size={20} />
              <div>
                <strong>Acumulación ilimitada:</strong> gana puntos por actividad, logros y participación social.
              </div>
            </div>
            <div className="benefit-row">
              <Wallet size={20} />
              <div>
                <strong>Wallet digital:</strong> consulta tu saldo, historial de canjes y ahorro total acumulado.
              </div>
            </div>
            <div className="benefit-row">
              <Trophy size={20} />
              <div>
                <strong>Rankings y retos:</strong> participa en competencias grupales y visualiza tu progreso.
              </div>
            </div>
            <div className="benefit-row">
              <ThumbsUp size={20} />
              <div>
                <strong>Intercambio de Zonas:</strong> otorga o recibe reconocimiento social y gana puntos extra.
              </div>
            </div>
            <div className="benefit-row">
              <UsersRound size={20} />
              <div>
                <strong>Referidos ilimitados:</strong> gana 500 puntos por cada nuevo corredor que invites.
              </div>
            </div>
            <div className="benefit-row">
              <Crown size={20} />
              <div>
                <strong>Niveles de estatus:</strong> avanza de Bronce a Élite según tu constancia y puntos acumulados.
              </div>
            </div>
            <div className="benefit-row">
              <Sparkles size={20} />
              <div>
                <strong>Notificaciones inteligentes:</strong> alertas personalizadas de logros y progreso.
              </div>
            </div>
          </div>

          <div className="role-cta">
            <Star size={24} />
            <p>
              <strong>Cada acción refuerza tu avance:</strong> correr ya no es solo entrenar, es subir de nivel y ser reconocido.
            </p>
          </div>
        </motion.div>

        {/* Gamification Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="role-section pacer-section"
        >
          <div className="role-header">
            <div className="role-icon">
              <Medal size={40} />
            </div>
            <div>
              <h3 className="role-title">Sistema de Gamificación</h3>
              <p className="role-subtitle">Niveles Status Runner</p>
            </div>
          </div>

          <div className="role-benefits">
            <div className="benefit-row">
              <Medal size={20} />
              <div>
                <strong>🥉 Bronce:</strong> Registro + 10,000 pts de bienvenida. Acceso a descuentos básicos y canjes iniciales.
              </div>
            </div>
            <div className="benefit-row">
              <Award size={20} />
              <div>
                <strong>🥈 Plata:</strong> 20,000 pts acumulados o 3 carreras completadas. Descuentos hasta 20%, ranking social y retos mensuales.
              </div>
            </div>
            <div className="benefit-row">
              <Trophy size={20} />
              <div>
                <strong>🥇 Oro:</strong> 50,000 pts acumulados o membresía activa. Canje ampliado (hasta 40%), insignia destacada en perfil.
              </div>
            </div>
            <div className="benefit-row">
              <Crown size={20} />
              <div>
                <strong>💎 Élite:</strong> 100,000 pts acumulados + retos completados. Descuentos premium (hasta 50%), acceso preferente a carreras y eventos especiales.
              </div>
            </div>
          </div>

          <div className="role-cta">
            <TrendingUp size={24} />
            <p>
              <strong>Cada ascenso genera una notificación celebratoria</strong> fortaleciendo tu conexión emocional con la app.
            </p>
              </div>
        </motion.div>

        {/* Organizers & Establishments Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="role-section runner-section"
        >
          <div className="role-header">
            <div className="role-icon">
              <Store size={40} />
            </div>
              <div>
              <h3 className="role-title">Para Organizadores y Establecimientos</h3>
              <p className="role-subtitle">Amplifica tu alcance</p>
            </div>
          </div>

          <div className="role-benefits">
            <div className="benefit-row">
              <Calendar size={20} />
              <div>
                <strong>Organizadores:</strong> Publica carreras ilimitadas, emite puntos, accede a analítica avanzada y obtén el distintivo "Organizador Verificado".
              </div>
            </div>
            <div className="benefit-row">
              <Store size={20} />
              <div>
                <strong>Establecimientos:</strong> Afíliate y ofrece descuentos a corredores Z2. Amplifica tu experiencia a través de beneficios tangibles.
              </div>
            </div>
            <div className="benefit-row">
              <BarChart3 size={20} />
              <div>
                <strong>Panel de gestión:</strong> Administra canjes, valida QR codes y visualiza estadísticas de participación.
              </div>
            </div>
            <div className="benefit-row">
              <Users size={20} />
              <div>
                <strong>Comunidad activa:</strong> Conecta con runners comprometidos que valoran tu oferta.
              </div>
            </div>
          </div>

          <div className="role-cta">
            <Target size={24} />
            <p>
              <strong>Z2 une a runners, organizadores y establecimientos</strong> bajo un modelo sostenible que se nutre de la interacción y el compromiso.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;

