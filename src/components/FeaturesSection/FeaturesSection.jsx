import { motion } from "framer-motion";
import { Target, Zap, Users, TrendingUp } from "lucide-react";

function FeaturesSection() {
  const features = [
    {
      id: "puntos",
      icon: <Target size={32} />,
      title: "Sistema de Puntos",
      description: "Acumula puntos por cada actividad, logro y participación. Convierte tu esfuerzo en valor real.",
    },
    {
      id: "gamificacion",
      icon: <Zap size={32} />,
      title: "Gamificación Real",
      description: "Avanza por niveles de Bronce a Élite. Cada acción refuerza tu progreso y reconocimiento.",
    },
    {
      id: "comunidad",
      icon: <Users size={32} />,
      title: "Comunidad Activa",
      description: "Intercambia Zonas, participa en retos grupales y crece junto a otros corredores.",
    },
    {
      id: "descuentos",
      icon: <TrendingUp size={32} />,
      title: "Descuentos Reales",
      description: "Hasta 50% de descuento en carreras y establecimientos. Tu constancia se convierte en ahorro.",
    },
  ];

  return (
    <section className="features-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Nuestro enfoque profesional</h2>
          <p className="section-subtitle">
            Mejor motivación, mejores resultados
          </p>
        </motion.div>

        <div className="features-grid-cards">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="feature-card"
            >
              <div className="feature-card-icon">{feature.icon}</div>
              <h3 className="feature-card-title">{feature.title}</h3>
              <p className="feature-card-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;

