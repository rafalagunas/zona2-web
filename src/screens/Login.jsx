import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff, ArrowLeft, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function Login() {
  const navigate = useNavigate()
  const { isDark } = useTheme()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulación de login - espera 1 segundo y navega al dashboard
    setTimeout(() => {
      navigate('/')
    }, 1000)
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-full bg-light-bg dark:bg-dark-900 px-6 py-8">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-md mx-auto"
      >
        {/* Header */}
        <motion.div variants={item} className="mb-8">
          <button
            onClick={() => navigate('/welcome')}
            className="flex items-center gap-2 text-light-text-secondary dark:text-gray-400 hover:text-light-text dark:hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            <span className="text-sm">Volver</span>
          </button>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-light-primary to-light-primary-dark dark:from-primary dark:to-primary-light rounded-2xl flex items-center justify-center font-bold text-light-text dark:text-white shadow-lg shadow-light-primary/30 dark:shadow-primary/30">
              Z<sup className="text-sm">2</sup>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-light-text dark:text-white">Bienvenido</h1>
              <p className="text-sm text-light-text-secondary dark:text-gray-400">Inicia sesión para continuar</p>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form variants={item} onSubmit={handleLogin} className="space-y-5">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium mb-2 text-light-text-secondary dark:text-gray-300">
              Correo Electrónico
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-light-text-secondary dark:text-gray-400" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
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

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-light-text-secondary dark:text-gray-400 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-light-border dark:border-dark-600 bg-light-card dark:bg-dark-800 text-light-primary dark:text-primary focus:ring-light-primary dark:focus:ring-primary"
              />
              Recordarme
            </label>
            <button
              type="button"
              className="text-light-primary dark:text-primary hover:text-light-primary-dark dark:hover:text-primary-light transition-colors"
            >
              ¿Olvidaste tu contraseña?
            </button>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isLoading}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-light-primary to-light-primary-dark dark:from-primary dark:to-primary-light text-light-text dark:text-white font-bold text-lg py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-light-primary/30 dark:shadow-primary/30 hover:shadow-light-primary/50 dark:hover:shadow-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                Iniciando...
              </>
            ) : (
              <>
                <Heart size={20} fill="currentColor" />
                Iniciar Sesión
              </>
            )}
          </motion.button>
        </motion.form>

        {/* Divider */}
        <motion.div variants={item} className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-light-border dark:bg-dark-600"></div>
          <span className="text-sm text-light-text-secondary dark:text-gray-500">o continúa con</span>
          <div className="flex-1 h-px bg-light-border dark:bg-dark-600"></div>
        </motion.div>

        {/* Social Login */}
        <motion.div variants={item} className="space-y-3">
          <button className="w-full bg-light-card dark:bg-dark-800 hover:bg-light-hover dark:hover:bg-dark-700 border border-light-border dark:border-dark-600 py-3.5 rounded-xl flex items-center justify-center gap-3 transition-colors text-light-text dark:text-white">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="font-semibold">Google</span>
          </button>

          <button className="w-full bg-light-card dark:bg-dark-800 hover:bg-light-hover dark:hover:bg-dark-700 border border-light-border dark:border-dark-600 py-3.5 rounded-xl flex items-center justify-center gap-3 transition-colors text-light-text dark:text-white">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            <span className="font-semibold">Apple</span>
          </button>
        </motion.div>

        {/* Sign Up Link */}
        <motion.p
          variants={item}
          className="text-center text-sm text-light-text-secondary dark:text-gray-400 mt-6"
        >
          ¿No tienes cuenta?{' '}
          <button
            onClick={() => navigate('/register')}
            className="text-light-primary dark:text-primary font-semibold hover:text-light-primary-dark dark:hover:text-primary-light transition-colors"
          >
            Regístrate aquí
          </button>
        </motion.p>

        {/* Info Banner */}
        <motion.div
          variants={item}
          className="mt-8 bg-gradient-to-r from-light-primary/10 to-blue-500/10 dark:from-primary/10 dark:to-blue-500/10 border border-light-primary/20 dark:border-primary/20 rounded-xl p-4"
        >
          <p className="text-xs text-light-text-secondary dark:text-gray-300 text-center">
            🎉 <strong>Bono de Bienvenida:</strong> $200 MXN en tu primera activación
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

