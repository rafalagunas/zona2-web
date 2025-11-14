import { motion } from "framer-motion";

function SponsorsSection() {
  const sponsors = [
    { src: "/assets/sponsors/mmerida.jpg", alt: "Municipio de Mérida" },
    { src: "/assets/sponsors/vivedeporte.png", alt: "Vive Deporte" },
    { src: "/assets/sponsors/edifactMx.png", alt: "Edifact MX" },
    { src: "/assets/sponsors/amerida.png", alt: "A Mérida" },
    { src: "/assets/sponsors/munacarreras.jpeg", alt: "Muna Carreras" },
    { src: "/assets/sponsors/carrerasyucatan.jpeg", alt: "Carreras Yucatán" },
    { src: "/assets/sponsors/hazlo.jpeg", alt: "Hazlo" },
    { src: "/assets/sponsors/planetamaraton.jpeg", alt: "Planeta Maratón" },
    { src: "/assets/sponsors/aiym.jpeg", alt: "AIYM" },
  ];

  return (
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
            {sponsors.map((sponsor, index) => (
              <div key={`sponsor-${index}`} className="sponsor-item">
                <img src={sponsor.src} alt={sponsor.alt} />
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {sponsors.map((sponsor, index) => (
              <div key={`sponsor-duplicate-${index}`} className="sponsor-item">
                <img src={sponsor.src} alt={sponsor.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SponsorsSection;

