import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "¿Qué es Z2?",
      answer:
        "Z2 es una aplicación gratuita creada para transformar la motivación deportiva en reconocimiento real. Combina tecnología, comunidad y gamificación para convertir cada actividad física, logro y conexión social en valor digital. Los corredores acumulan puntos por su esfuerzo y los canjean por beneficios, descuentos o reconocimiento dentro de la comunidad.",
    },
    {
      question: "¿Cómo obtengo puntos en Z2?",
      answer:
        "Ganas puntos de múltiples formas: recibes 10,000 puntos de bienvenida al registrarte, +200 puntos por completar una carrera diaria, +50 puntos por otorgar una Zona, +100 puntos por recibir una Zona, +500 puntos por referir un nuevo usuario, +1,000 puntos por participar en carreras Z2, y puntos adicionales por completar retos, mantener actividad constante y participar en grupos.",
    },
    {
      question: "¿Qué son los niveles Status Runner?",
      answer:
        "Los niveles Status Runner reflejan tu compromiso en la plataforma: 🥉 Bronce (Registro + 10,000 pts), 🥈 Plata (20,000 pts o 3 carreras), 🥇 Oro (50,000 pts o membresía activa), y 💎 Élite (100,000 pts + retos completados). Cada nivel ofrece beneficios progresivos, desde descuentos básicos hasta descuentos premium del 50% y acceso preferente a eventos especiales.",
    },
    {
      question: "¿Cómo funcionan los descuentos con puntos?",
      answer:
        "Puedes canjear puntos por descuentos en carreras y establecimientos afiliados. La escala va desde 5,000 puntos (5% descuento) hasta 50,000 puntos (50% descuento máximo). El sistema calcula automáticamente el ahorro y lo muestra en tu wallet digital. Los organizadores y establecimientos eligen el nivel de descuento que ofrecerán.",
    },
    {
      question: "¿Qué es el intercambio de Zonas?",
      answer:
        "El intercambio de Zonas es el componente social más poderoso de Z2. Otorgar una Zona significa reconocer el esfuerzo de otro corredor. Por cada Zona otorgada, el emisor gana 50 puntos y el receptor 100 puntos. Cada Zona aparece en el perfil del usuario como símbolo de prestigio dentro de la comunidad. No existe límite en la cantidad de Zonas otorgadas o recibidas.",
    },
    {
      question: "¿Cómo funciona el sistema de referidos?",
      answer:
        "Puedes invitar a nuevos miembros de manera ilimitada. Por cada nuevo usuario que se registre con tu enlace o QR, obtienes 500 puntos automáticos. El proceso es simple y transparente, sin jerarquías ni pagos cruzados. Este esquema impulsa el crecimiento orgánico y convierte a cada runner en embajador activo de la marca Z2.",
    },
    {
      question: "¿Qué es el wallet digital?",
      answer:
        "El wallet digital es tu panel personal donde puedes consultar tu saldo total de puntos, puntos por vencer, historial de canjes, ahorro equivalente en pesos y logros alcanzados. El sistema calcula automáticamente el importe total ahorrado y genera mensajes motivacionales. También refleja los puntos obtenidos por referidos, Zonas, retos y niveles.",
    },
    {
      question: "¿Cómo funciona el canje en carreras y establecimientos?",
      answer:
        "En carreras: seleccionas una carrera marcada con 'Acepta Puntos Z2', visualizas tu saldo, eliges cuántos puntos aplicar y generas un QR de validación. El organizador escanea el código y el descuento se aplica de inmediato. En establecimientos: seleccionas un comercio afiliado, generas tu QR de canje, y el establecimiento lo valida en su panel. Los puntos se descuentan y el ahorro se actualiza en tu wallet.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <div className="faq-header-icon">
            <HelpCircle size={48} />
          </div>
          <h2 className="section-title">Preguntas Frecuentes</h2>
          <p className="section-subtitle">
            Encuentra respuestas a las dudas más comunes sobre Zona²
          </p>
        </motion.div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="faq-item"
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <motion.div
                  animate={{
                    rotate: openIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={24} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="faq-answer-wrapper"
                  >
                    <div className="faq-answer">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;

