import { motion } from "framer-motion";

function MethodologySection({ onOpenModal }) {
  const steps = [
    {
      number: "1",
      title: "Regístrate y obtén puntos",
      description:
        "Descarga la app, crea tu perfil y recibe 10,000 puntos de bienvenida válidos por 90 días. Comienza a acumular desde el primer día.",
    },
    {
      number: "2",
      title: "Corre y acumula",
      description:
        "Cada carrera, reto completado y Zona recibida suma puntos a tu wallet. Avanza por niveles y desbloquea beneficios progresivos.",
    },
    {
      number: "3",
      title: "Canjea y ahorra",
      description:
        "Usa tus puntos para obtener descuentos en carreras y establecimientos afiliados. Visualiza tu ahorro total y sigue creciendo.",
    },
  ];

  return (
    <section className="methodology-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">¿Cómo funciona Z2?</h2>
          <p className="section-subtitle">
            Con tecnología, comunidad y sentido humano
          </p>
        </motion.div>

        <div className="methodology-steps">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="methodology-step"
            >
              <div className="methodology-step-number">{step.number}</div>
              <div className="methodology-step-content">
                <h3 className="methodology-step-title">{step.title}</h3>
                <p className="methodology-step-description">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="methodology-cta"
        >
          <p>¿Listo para transformar tu running con un enfoque innovador?</p>
          <button className="btn-primary" onClick={onOpenModal}>
            Únete al Pre-registro
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default MethodologySection;

