import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "¿Qué es Zona²?",
      answer:
        "Zona² es una plataforma que conecta corredores y pacers certificados. Los runners ganan recompensas por correr, invitar amigos y participar en retos. Los pacers certificados pueden monetizar su experiencia liderando rutas y acompañando a visitantes.",
    },
    {
      question: "¿Cómo puedo ganar dinero corriendo?",
      answer:
        "Como Runner, ganas recompensas por mantener actividad diaria, cumplir metas mensuales (20 días/mes), invitar nuevos corredores y participar en retos. Tus bonos se acumulan en tu wallet y se liquidan una vez al año.",
    },
    {
      question: "¿Qué es un Pacer Certificado?",
      answer:
        "Un Pacer Certificado es un corredor experimentado que lidera rutas locales y acompaña a visitantes. Puedes ganar dinero por cada sesión que realices, recibir propinas y vender servicios adicionales como hidratación, fotos o rutas personalizadas.",
    },
    {
      question: "¿Cómo me convierto en Pacer Certificado?",
      answer:
        "Para convertirte en Pacer Certificado, necesitas cumplir con ciertos requisitos de experiencia y completar un proceso de certificación. Una vez certificado, podrás crear rutas, establecer tu disponibilidad y comenzar a recibir reservas.",
    },
    {
      question: "¿Cuándo puedo retirar mis ganancias?",
      answer:
        "Las ganancias se acumulan en tu wallet durante el año y se liquidan una vez al año. La membresía se renueva automáticamente descontándose del saldo acumulado si tienes fondos suficientes.",
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

