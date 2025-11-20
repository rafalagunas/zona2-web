import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import zona2Video from "../../assets/zona2.mp4";

function VideoSplash() {
  const [isVisible, setIsVisible] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    // Hide video after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    // Try to play video
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="video-splash-container"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="video-splash-wrapper"
          >
            <video
              ref={videoRef}
              className="video-splash"
              autoPlay
              muted
              playsInline
              onEnded={() => setIsVisible(false)}
            >
              <source src={zona2Video} type="video/mp4" />
            </video>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default VideoSplash;

