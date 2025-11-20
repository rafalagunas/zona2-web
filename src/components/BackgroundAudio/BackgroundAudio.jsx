import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import aboutAudio from "../../assets/about-audio.mp3";

function BackgroundAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [playCount, setPlayCount] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    // Handle audio ended event
    const handleAudioEnded = async () => {
      const newCount = playCount + 1;
      setPlayCount(newCount);
      
      if (newCount < 2 && audioRef.current) {
        // Play again (up to 2 times total)
        try {
          await audioRef.current.play();
        } catch (error) {
          console.log("Error replaying audio");
        }
      } else {
        // Stop after 2 plays
        setIsPlaying(false);
      }
    };

    if (audioRef.current) {
      audioRef.current.addEventListener('ended', handleAudioEnded);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleAudioEnded);
      }
    };
  }, [playCount]);

  useEffect(() => {
    // Only try to play if we haven't exceeded the limit
    if (playCount >= 2) {
      return; // Don't set up listeners if we've already played 2 times
    }

    // Try to autoplay when component mounts
    const playAudio = async () => {
      try {
        if (audioRef.current && playCount < 2) {
          audioRef.current.volume = 0.3; // Set initial volume to 30%
          await audioRef.current.play();
          setIsPlaying(true);
          setHasInteracted(true);
        }
      } catch (error) {
        // Autoplay blocked by browser - try on first user interaction
        console.log("Autoplay prevented, waiting for user interaction");
        setIsPlaying(false);
      }
    };

    // Try immediate play
    playAudio();

    // Retry after a small delay
    const timer = setTimeout(playAudio, 500);

    // Setup listeners for first user interaction
    const handleInteraction = async () => {
      if (!hasInteracted && audioRef.current && playCount < 2) {
        try {
          audioRef.current.volume = 0.4;
          await audioRef.current.play();
          setIsPlaying(true);
          setHasInteracted(true);
        } catch (error) {
          console.log("Still unable to play audio");
        }
      }
    };

    // Listen for various user interactions
    document.addEventListener('click', handleInteraction, { once: true });
    document.addEventListener('scroll', handleInteraction, { once: true });
    document.addEventListener('touchstart', handleInteraction, { once: true });
    document.addEventListener('keydown', handleInteraction, { once: true });

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
  }, [hasInteracted, playCount]);

  const togglePlay = async () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        if (playCount < 2) {
          try {
            await audioRef.current.play();
            setIsPlaying(true);
          } catch (error) {
            console.error("Error playing audio:", error);
          }
        } else {
          console.log("Audio has already played 2 times");
        }
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={aboutAudio}
        preload="auto"
        autoPlay
      />
      
      {playCount < 2 && (
        <div className="audio-controls">
          <AnimatePresence>
            {isPlaying && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="audio-toggle-btn"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute audio" : "Mute audio"}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                <span className="audio-tooltip">
                  {isMuted ? "Activar audio" : "Silenciar audio"}
                </span>
              </motion.button>
            )}
          </AnimatePresence>

          {!isPlaying && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="audio-toggle-btn audio-play-btn"
              onClick={togglePlay}
              aria-label="Play background music"
            >
              <Volume2 size={20} />
              <span className="audio-tooltip">Reproducir música</span>
            </motion.button>
          )}
        </div>
      )}
    </>
  );
}

export default BackgroundAudio;

