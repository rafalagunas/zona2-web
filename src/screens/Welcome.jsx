import { useNavigate } from 'react-router-dom'
import { Activity, Heart, Users, Zap, ArrowRight, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function Welcome() {
  const navigate = useNavigate()
  const { isDark } = useTheme()

  const features = [
    { icon: Activity, text: 'Trackea tus carreras en Zona 2', color: 'text-blue-400' },
    { icon: Users, text: 'Conecta con la comunidad', color: 'text-green-400' },
    { icon: Zap, text: 'Gana recompensas reales', color: 'text-primary' }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-full bg-gradient-to-br from-light-bg via-light-card to-light-bg dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 flex flex-col items-center justify-between px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        {/* Logo animado */}
        <div className="relative inline-flex items-center justify-center mb-4">
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            
            className="w-20 h-20 bg-gradient-to-br from-light-primary to-light-primary-dark dark:from-primary dark:to-primary-light rounded-3xl flex items-center justify-center font-bold text-black dark:text-white text-3xl shadow-2xl shadow-light-primary/50 dark:shadow-primary/50"
          >
            Z<sup className="text-xl">2</sup>
          </motion.div>
      
        </div>
        
        <h1 className="text-4xl font-bold mb-2 text-light-text dark:text-white">
          Zona<sup className="text-2xl">2</sup>
        </h1>
        <p className="text-light-text-secondary dark:text-gray-400 text-sm mb-8">Running Experience</p>
      </motion.div>

      {/* Hero Section */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex-1 flex flex-col justify-center max-w-sm"
      >
        <motion.h2 
          variants={item}
          className="text-3xl font-bold text-center mb-3 leading-tight text-light-text dark:text-white"
        >
          ¡Corre, Conecta <br />
          <span className="text-light-primary dark:text-primary">y Gana!</span>
        </motion.h2>
        
        <motion.p 
          variants={item}
          className="text-light-text-secondary dark:text-gray-400 text-center mb-8"
        >
          Únete a nuestra comunidad de corredores, sincroniza tus actividades y gana recompensas reales.
        </motion.p>

        {/* Features */}
        <motion.div variants={item} className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-3 bg-light-card/80 dark:bg-dark-800/50 backdrop-blur-sm rounded-xl p-3 border border-light-border dark:border-dark-600"
            >
              <div className={`${feature.color} bg-light-hover dark:bg-dark-700 p-2 rounded-lg`}>
                <feature.icon size={20} />
              </div>
              <span className="text-sm font-medium text-light-text dark:text-white">{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={item} className="space-y-3">
          <button
            onClick={() => navigate('/register')}
            className="w-full bg-gradient-to-r from-light-primary to-light-primary-dark dark:from-primary dark:to-primary-light text-light-text dark:text-white font-bold text-lg py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-light-primary/30 dark:shadow-primary/30 hover:shadow-light-primary/50 dark:hover:shadow-primary/50 transition-all"
          >
            Crear Cuenta
            <ArrowRight size={20} />
          </button>
          
          <button
            onClick={() => navigate('/login')}
            className="w-full bg-light-card dark:bg-dark-800 hover:bg-light-hover dark:hover:bg-dark-700 text-light-text dark:text-white font-semibold py-4 rounded-2xl border border-light-border dark:border-dark-600 transition-colors"
          >
            Ya tengo cuenta
          </button>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 w-full max-w-sm space-y-6"
      >
        {/* App Store Buttons */}
        <div className="flex gap-3 justify-center">
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-light-card dark:bg-dark-800 hover:bg-light-hover dark:hover:bg-dark-700 border border-light-border dark:border-dark-600 rounded-xl px-4 py-3 flex items-center gap-3 transition-all hover:scale-105"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
              <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.61 3 21.09 3 20.5Z" fill="#32BBFF"/>
              <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z" fill="#32BBFF"/>
              <path d="M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.5 12.92 20.16 13.19L17.89 14.5L15.35 12L17.89 9.5L20.16 10.81Z" fill="#32BBFF"/>
              <path d="M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" fill="#32BBFF"/>
            </svg>
            <div className="flex flex-col items-start">
              <span className="text-[9px] text-light-text-secondary dark:text-gray-400 leading-tight">GET IT ON</span>
              <span className="text-xs font-semibold text-light-text dark:text-white leading-tight">Google Play</span>
            </div>
          </a>

          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-light-card dark:bg-dark-800 hover:bg-light-hover dark:hover:bg-dark-700 border border-light-border dark:border-dark-600 rounded-xl px-4 py-3 flex items-center gap-3 transition-all hover:scale-105"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" className="text-light-text dark:text-white">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            <div className="flex flex-col items-start">
              <span className="text-[9px] text-light-text-secondary dark:text-gray-400 leading-tight">Download on the</span>
              <span className="text-xs font-semibold text-light-text dark:text-white leading-tight">App Store</span>
            </div>
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-light-card dark:bg-dark-800 border border-light-border dark:border-dark-600 text-light-text-secondary dark:text-gray-400 hover:text-light-primary dark:hover:text-primary hover:border-light-primary dark:hover:border-primary transition-all hover:scale-110"
            aria-label="Facebook"
          >
            <Facebook size={18} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-light-card dark:bg-dark-800 border border-light-border dark:border-dark-600 text-light-text-secondary dark:text-gray-400 hover:text-light-primary dark:hover:text-primary hover:border-light-primary dark:hover:border-primary transition-all hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-light-card dark:bg-dark-800 border border-light-border dark:border-dark-600 text-light-text-secondary dark:text-gray-400 hover:text-light-primary dark:hover:text-primary hover:border-light-primary dark:hover:border-primary transition-all hover:scale-110"
            aria-label="Twitter"
          >
            <Twitter size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-light-card dark:bg-dark-800 border border-light-border dark:border-dark-600 text-light-text-secondary dark:text-gray-400 hover:text-light-primary dark:hover:text-primary hover:border-light-primary dark:hover:border-primary transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>

        {/* Terms */}
        <p className="text-xs text-light-text-secondary dark:text-gray-500 text-center">
          Al continuar, aceptas nuestros{' '}
          <span className="text-light-primary dark:text-primary cursor-pointer hover:underline">Términos de Servicio</span> y{' '}
          <span className="text-light-primary dark:text-primary cursor-pointer hover:underline">Política de Privacidad</span>
        </p>
      </motion.div>
    </div>
  )
}

