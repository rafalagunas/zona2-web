import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

function AuroraBackground() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 45, damping: 18, mass: 0.6 });
  const smoothY = useSpring(pointerY, { stiffness: 45, damping: 18, mass: 0.6 });
  const slowX = useTransform(smoothX, (value) => value * 0.4);
  const slowY = useTransform(smoothY, (value) => value * 0.4);
  const fastX = useTransform(smoothX, (value) => value * 0.8);
  const fastY = useTransform(smoothY, (value) => value * 0.8);

  useEffect(() => {
    const handlePointer = (event) => {
      const { innerWidth, innerHeight } = window;
      const xOffset = (event.clientX / innerWidth - 0.5) * 30;
      const yOffset = (event.clientY / innerHeight - 0.5) * 18;
      pointerX.set(xOffset);
      pointerY.set(yOffset);
    };

    window.addEventListener("pointermove", handlePointer);
    return () => window.removeEventListener("pointermove", handlePointer);
  }, [pointerX, pointerY]);

  return (
    <div className="hero-canvas" aria-hidden="true">
      <motion.div
        className="hero-parallax-layer hero-parallax-aurora"
        style={{ x: slowX, y: slowY }}
        animate={{ opacity: [0.75, 0.95, 0.75] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="hero-parallax-layer hero-parallax-glow"
        style={{ x: smoothX, y: smoothY }}
        animate={{ backgroundPosition: ["0% 0%", "100% 50%", "0% 100%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="hero-parallax-layer hero-parallax-dust"
        style={{ x: fastX, y: fastY }}
        animate={{ opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="hero-parallax-layer hero-parallax-grid" />
    </div>
  );
}

export default AuroraBackground;

