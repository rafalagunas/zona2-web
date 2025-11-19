import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, animate } from "framer-motion";
import { Play } from "lucide-react";
import AuroraBackground from "./AuroraBackground";

function AnimatedNumber({ value, formatter, isActive, className = "" }) {
  const [displayValue, setDisplayValue] = useState(0);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 90,
    damping: 20,
    mass: 0.6,
  });

  useEffect(() => {
    if (isActive) {
      const controls = animate(motionValue, value, {
        duration: 1.4,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
    motionValue.set(0);
  }, [isActive, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return () => unsubscribe();
  }, [springValue]);

  return (
    <span className={className}>
      {formatter ? formatter(displayValue) : Math.round(displayValue)}
    </span>
  );
}

function HeroSection({ onScrollToSection, onOpenModal }) {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, amount: 0.4 });

  const heroHighlights = [
    {
      id: "status",
      label: "Status Runner",
      valueLabel: "🥇 Oro",
      detail: "50,230 pts acumulados",
    },
    {
      id: "wallet",
      label: "Wallet ahorro",
      value: 180,
      formatter: (val) => `$${Math.round(val).toLocaleString("es-MX")} MXN`,
      detail: "Últimos 90 días",
    },
    {
      id: "zonas",
      label: "Zonas recibidas",
      value: 12,
      formatter: (val) => `+${Math.round(val)}`,
      detail: "Esta semana",
    },
  ];

  const heroStats = [
    {
      id: "welcome",
      value: 10000,
      label: "Puntos de bienvenida",
      formatter: (val) => Math.round(val).toLocaleString("es-MX"),
    },
    {
      id: "discount",
      value: 50,
      label: "De descuentos máximos",
      formatter: (val) => `${Math.round(val)}%`,
    },
    {
      id: "infinite",
      valueLabel: "∞",
      label: "Puntos ilimitados",
    },
  ];

  const heroNotifications = [
    {
      id: "progress",
      badge: "Progreso",
      text: "🔥 Te faltan solo 2,000 pts para alcanzar el nivel Élite.",
    },
    {
      id: "recognition",
      badge: "Reconocimientos",
      text: "🤝 Recibiste 3 Zonas nuevas por tu constancia.",
    },
  ];

  return (
    <section id="inicio" className="hero-section" ref={heroRef}>
      <AuroraBackground />
      <div className="hero-overlay hero-overlay-aurora"></div>
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
           <span className="text-gradient"> Corre, </span> Conecta 
           y
           <br />
            <span className="text-gradient"> Gana </span><br />
          </h1>

          <p className="hero-description">
            Z2 es una aplicación gratuita que transforma tu motivación deportiva en reconocimiento real. 
            Acumula puntos por tu esfuerzo, canjéalos por descuentos en carreras y establecimientos, 
            y forma parte de una comunidad que valora cada paso.
          </p>

          <div className="hero-buttons">
            <button
              onClick={onOpenModal}
              className="btn-primary"
            >
              Únete al Pre-registro
            </button>
            <button
              onClick={() => onScrollToSection("acerca")}
              className="btn-secondary"
            >
              Conocer más
            </button>
          </div>

          <div className="hero-stats">
            {heroStats.map((stat) => (
              <div className="stat-item" key={stat.id}>
                <div className="stat-number">
                  {stat.valueLabel ? (
                    stat.valueLabel
                  ) : (
                    <AnimatedNumber
                      value={stat.value}
                      formatter={(val) =>
                        stat.formatter ? stat.formatter(val) : Math.round(val)
                      }
                      isActive={isInView}
                      className="stat-number"
                    />
                  )}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="hero-experience-panel"
        >
          <div className="hero-panel-header">
            <span>Experiencia inmersiva</span>
            <span className="hero-panel-badge">Tiempo real</span>
          </div>

          <div className="hero-highlight-grid">
            {heroHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.id}
                className="hero-highlight-card"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                <p className="hero-highlight-label">{highlight.label}</p>
                {highlight.value !== undefined ? (
                  <AnimatedNumber
                    value={highlight.value}
                    formatter={(val) =>
                      highlight.formatter
                        ? highlight.formatter(val)
                        : Math.round(val)
                    }
                    isActive={isInView}
                    className="hero-highlight-value"
                  />
                ) : (
                  <p className="hero-highlight-value">{highlight.valueLabel}</p>
                )}
                <br/>
                <span className="hero-highlight-detail">{highlight.detail}</span>
              </motion.div>
            ))}
          </div>

          <div className="hero-progress-card">
            <div className="hero-progress-top">
              <span>Trayectoria Status Runner</span>
              <AnimatedNumber
                value={72}
                formatter={(val) => `${Math.round(val)}%`}
                isActive={isInView}
                className="hero-progress-value"
              />
            </div>
            <div className="hero-progress-bar">
              <motion.span
                className="hero-progress-fill"
                initial={{ width: 0 }}
                animate={{ width: isInView ? "72%" : 0 }}
                transition={{ duration: 1.3, ease: "easeOut" }}
              />
            </div>
            <div className="hero-progress-levels">
              <span>Bronce</span>
              <span>Plata</span>
              <span>Oro</span>
              <span>Élite</span>
            </div>
          </div>

          <div className="hero-notifications">
            {heroNotifications.map((notification) => (
              <motion.div
                key={notification.id}
                className="hero-notification"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <span className="hero-notification-badge">{notification.badge}</span>
                <p>{notification.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;

