import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { User, Mail, Lock, Eye, EyeOff, ArrowLeft, Smartphone, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function Register() {
  const navigate = useNavigate()
  const { isDark } = useTheme()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState(1) // 1: datos básicos, 2: éxito

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleRegister = (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulación de registro - espera 1.5 segundos y muestra mensaje de éxito
    setTimeout(() => {
      setIsLoading(false)
      setStep(2)
      
      // Después de 2 segundos más, navega al dashboard
      setTimeout(() => {
        navigate('/')
      }, 2000)
    }, 1500)
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  if (step === 2) {
    return (
      <div className="min-h-full bg-light-bg dark:bg-dark-900 flex items-center justify-center px-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-sm"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-500/30"
          >
            <CheckCircle2 size={40} className="text-white" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold mb-3 text-light-text dark:text-white"
          >
            ¡Bienvenido a Zona²!
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-light-text-secondary dark:text-gray-400 mb-6"
          >
            Tu cuenta ha sido creada exitosamente. <br />
            Preparando tu dashboard...
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-light-primary/20 to-light-primary-dark/20 dark:from-primary/20 dark:to-primary-light/20 border border-light-primary/30 dark:border-primary/30 rounded-xl p-4"
          >
            <p className="text-sm font-semibold text-light-primary dark:text-primary mb-1">
              🎉 Bono de Bienvenida
            </p>
            <p className="text-2xl font-bold text-light-primary dark:text-primary">$200 MXN</p>
            <p className="text-xs text-light-text-secondary dark:text-gray-400 mt-1">
              Ya disponible en tu wallet
            </p>
          </motion.div>

          <div className="mt-8 flex justify-center">
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-light-primary dark:bg-primary rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-light-primary dark:bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-light-primary dark:bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-full bg-light-bg dark:bg-dark-900 px-6 py-8 overflow-y-auto">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-md mx-auto pb-6"
      >
        {/* Header */}
        <motion.div variants={item} className="mb-6">
          <button
            onClick={() => navigate('/welcome')}
            className="flex items-center gap-2 text-light-text-secondary dark:text-gray-400 hover:text-light-text dark:hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            <span className="text-sm">Volver</span>
          </button>

          <h1 className="text-3xl font-bold mb-2 text-light-text dark:text-white">Crear Cuenta</h1>
          <p className="text-light-text-secondary dark:text-gray-400">
            Únete a la comunidad de runners
          </p>
        </motion.div>

        {/* Form */}
        <motion.form variants={item} onSubmit={handleRegister} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium mb-2 text-light-text-secondary dark:text-gray-300">
              Nombre Completo
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-light-text-secondary dark:text-gray-400" size={20} />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Carlos Hernández"
                className="w-full bg-light-card dark:bg-dark-800 border border-light-border dark:border-dark-600 rounded-xl py-3.5 pl-12 pr-4 text-light-text dark:text-white placeholder-light-text-secondary dark:placeholder-gray-500 focus:outline-none focus:border-light-primary dark:focus:border-primary transition-colors"
              />
            </div>
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium mb-2 text-light-text-secondary dark:text-gray-300">
              Correo Electrónico
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-light-text-secondary dark:text-gray-400" size={20} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="tu@email.com"
                className="w-full bg-light-card dark:bg-dark-800 border border-light-border dark:border-dark-600 rounded-xl py-3.5 pl-12 pr-4 text-light-text dark:text-white placeholder-light-text-secondary dark:placeholder-gray-500 focus:outline-none focus:border-light-primary dark:focus:border-primary transition-colors"
              />
            </div>
          </div>

          {/* Phone Input */}
          <div>
            <label className="block text-sm font-medium mb-2 text-light-text-secondary dark:text-gray-300">
              Teléfono
            </label>
            <div className="relative">
              <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-light-text-secondary dark:text-gray-400" size={20} />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+52 999 123 4567"
                className="w-full bg-light-card dark:bg-dark-800 border border-light-border dark:border-dark-600 rounded-xl py-3.5 pl-12 pr-4 text-light-text dark:text-white placeholder-light-text-secondary dark:placeholder-gray-500 focus:outline-none focus:border-light-primary dark:focus:border-primary transition-colors"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium mb-2 text-light-text-secondary dark:text-gray-300">
              Contraseña
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-light-text-secondary dark:text-gray-400" size={20} />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Mínimo 8 caracteres"
                className="w-full bg-light-card dark:bg-dark-800 border border-light-border dark:border-dark-600 rounded-xl py-3.5 pl-12 pr-12 text-light-text dark:text-white placeholder-light-text-secondary dark:placeholder-gray-500 focus:outline-none focus:border-light-primary dark:focus:border-primary transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-light-text-secondary dark:text-gray-400 hover:text-light-text dark:hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Confirm Password Input */}
          <div>
            <label className="block text-sm font-medium mb-2 text-light-text-secondary dark:text-gray-300">
              Confirmar Contraseña
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-light-text-secondary dark:text-gray-400" size={20} />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Repite tu contraseña"
                className="w-full bg-light-card dark:bg-dark-800 border border-light-border dark:border-dark-600 rounded-xl py-3.5 pl-12 pr-12 text-light-text dark:text-white placeholder-light-text-secondary dark:placeholder-gray-500 focus:outline-none focus:border-light-primary dark:focus:border-primary transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-light-text-secondary dark:text-gray-400 hover:text-light-text dark:hover:text-white transition-colors"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="bg-light-card dark:bg-dark-800 border border-light-border dark:border-dark-600 rounded-xl p-4">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleInputChange}
                className="w-5 h-5 mt-0.5 rounded border-light-border dark:border-dark-600 bg-light-hover dark:bg-dark-700 text-light-primary dark:text-primary focus:ring-light-primary dark:focus:ring-primary flex-shrink-0"
              />
              <span className="text-sm text-light-text-secondary dark:text-gray-300">
                Acepto los{' '}
                <button type="button" className="text-light-primary dark:text-primary hover:text-light-primary-dark dark:hover:text-primary-light">
                  Términos de Servicio
                </button>{' '}
                y la{' '}
                <button type="button" className="text-light-primary dark:text-primary hover:text-light-primary-dark dark:hover:text-primary-light">
                  Política de Privacidad
                </button>
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isLoading}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-light-primary to-light-primary-dark dark:from-primary dark:to-primary-light text-light-text dark:text-white font-bold text-lg py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-light-primary/30 dark:shadow-primary/30 hover:shadow-light-primary/50 dark:hover:shadow-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-6"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                Creando cuenta...
              </>
            ) : (
              'Crear Cuenta'
            )}
          </motion.button>
        </motion.form>

        {/* Login Link */}
        <motion.p
          variants={item}
          className="text-center text-sm text-light-text-secondary dark:text-gray-400 mt-6"
        >
          ¿Ya tienes cuenta?{' '}
          <button
            onClick={() => navigate('/login')}
            className="text-light-primary dark:text-primary font-semibold hover:text-light-primary-dark dark:hover:text-primary-light transition-colors"
          >
            Inicia sesión
          </button>
        </motion.p>

        {/* Benefits */}
        <motion.div
          variants={item}
          className="mt-6 space-y-3"
        >
          <p className="text-xs text-light-text-secondary dark:text-gray-500 text-center mb-3">
            ¿Qué obtienes al registrarte?
          </p>
          
          {[
            '🎁 $200 MXN de bono de bienvenida',
            '🏃 Tracking ilimitado de carreras',
            '👥 Acceso a la comunidad y retos',
            '💰 Gana recompensas por correr'
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-2 text-sm text-light-text-secondary dark:text-gray-400"
            >
              <div className="w-1 h-1 bg-light-primary dark:bg-primary rounded-full"></div>
              {benefit}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

