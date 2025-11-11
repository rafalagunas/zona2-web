import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { User, Bell, Lock, HelpCircle, Moon, Sun, ChevronRight, Palette, Shield, Languages, Info } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Settings() {
  const { theme, toggleTheme, isDark } = useTheme()
  const [notifications, setNotifications] = useState(true)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  const settingsSections = [
    {
      title: 'Apariencia',
      items: [
        {
          icon: isDark ? Moon : Sun,
          label: 'Tema',
          value: isDark ? 'Oscuro' : 'Claro',
          action: 'toggle',
          color: 'text-primary'
        }
      ]
    },
    {
      title: 'Cuenta',
      items: [
        {
          icon: User,
          label: 'Información personal',
          action: 'navigate',
          color: 'text-blue-400'
        },
        {
          icon: Lock,
          label: 'Privacidad y seguridad',
          action: 'navigate',
          color: 'text-green-400'
        }
      ]
    },
    {
      title: 'Preferencias',
      items: [
        {
          icon: Bell,
          label: 'Notificaciones',
          value: notifications ? 'Activadas' : 'Desactivadas',
          action: 'toggle-notifications',
          color: 'text-orange-400'
        },
        {
          icon: Languages,
          label: 'Idioma',
          value: 'Español',
          action: 'navigate',
          color: 'text-purple-400'
        }
      ]
    },
    {
      title: 'Soporte',
      items: [
        {
          icon: HelpCircle,
          label: 'Ayuda y soporte',
          action: 'navigate',
          color: 'text-yellow-400'
        },
        {
          icon: Info,
          label: 'Acerca de',
          value: 'v1.0.0',
          action: 'navigate',
          color: 'text-gray-400'
        }
      ]
    }
  ]

  const handleAction = (action) => {
    if (action === 'toggle') {
      toggleTheme()
    } else if (action === 'toggle-notifications') {
      setNotifications(!notifications)
    }
    // Otras acciones se pueden implementar aquí
  }

  return (
    <div className="min-h-full bg-light-bg dark:bg-dark-900 pt-12 px-6 pb-6">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-6"
      >
        {/* Header */}
        <motion.div variants={item}>
          <h1 className="text-3xl font-bold text-light-text dark:text-white">Configuración</h1>
          <p className="text-light-text-secondary dark:text-gray-400 text-sm mt-1">
            Personaliza tu experiencia
          </p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          variants={item}
          className="bg-light-card dark:bg-dark-800 rounded-3xl p-6 border border-light-border dark:border-dark-600"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-light-primary/20 dark:bg-primary/20 rounded-full flex items-center justify-center text-2xl font-bold border-2 border-light-primary dark:border-primary text-light-text dark:text-white">
              CH
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-light-text dark:text-white">Carlos Hernández</h3>
              <p className="text-sm text-light-text-secondary dark:text-gray-400">carlos@zona2.mx</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="px-2 py-1 bg-light-primary/20 dark:bg-primary/20 rounded-lg">
                  <span className="text-xs font-semibold text-light-text dark:text-primary">
                    Premium Runner
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Settings Sections */}
        {settingsSections.map((section, sectionIndex) => (
          <motion.div key={section.title} variants={item}>
            <h2 className="text-sm font-semibold text-light-text-secondary dark:text-gray-400 mb-3 px-2">
              {section.title}
            </h2>
            <div className="bg-light-card dark:bg-dark-800 rounded-2xl border border-light-border dark:border-dark-600 overflow-hidden">
              {section.items.map((settingItem, index) => (
                <button
                  key={index}
                  onClick={() => handleAction(settingItem.action)}
                  className={`w-full flex items-center gap-4 p-4 hover:bg-light-hover dark:hover:bg-dark-700 transition-colors ${
                    index !== section.items.length - 1 ? 'border-b border-light-border dark:border-dark-600' : ''
                  }`}
                >
                  <div className={`${settingItem.color}`}>
                    <settingItem.icon size={22} />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-medium text-light-text dark:text-white">{settingItem.label}</p>
                    {settingItem.value && (
                      <p className="text-sm text-light-text-secondary dark:text-gray-400">
                        {settingItem.value}
                      </p>
                    )}
                  </div>
                  {settingItem.action === 'toggle' && (
                    <motion.div
                      animate={{ rotate: isDark ? 0 : 180 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-12 h-6 bg-light-primary dark:bg-primary rounded-full p-1"
                    >
                      <motion.div
                        animate={{ x: isDark ? 0 : 24 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        className="w-4 h-4 bg-white rounded-full shadow-md"
                      />
                    </motion.div>
                  )}
                  {settingItem.action !== 'toggle' && (
                    <ChevronRight className="text-light-text-secondary dark:text-gray-400" size={20} />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Theme Preview */}
        <motion.div
          variants={item}
          className="bg-gradient-to-br from-light-primary/10 to-light-primary/5 dark:from-primary/10 dark:to-primary/5 border border-light-primary/30 dark:border-primary/30 rounded-2xl p-4"
        >
          <div className="flex items-start gap-3">
            <Palette className="text-light-primary dark:text-primary flex-shrink-0" size={20} />
            <div>
              <p className="font-semibold text-sm text-light-text dark:text-white mb-1">
                Tema {isDark ? 'Oscuro' : 'Claro'} Activado
              </p>
              <p className="text-xs text-light-text-secondary dark:text-gray-300">
                {isDark 
                  ? 'Diseño optimizado para uso nocturno con colores oscuros y contrastes suaves.'
                  : 'Diseño brillante y energético con colores vibrantes para el día.'}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Danger Zone */}
        <motion.div variants={item}>
          <h2 className="text-sm font-semibold text-red-400 mb-3 px-2">
            Zona de Peligro
          </h2>
          <div className="bg-light-card dark:bg-dark-800 rounded-2xl border border-red-500/30 overflow-hidden">
            <button className="w-full flex items-center gap-4 p-4 hover:bg-red-500/10 transition-colors">
              <Shield className="text-red-400" size={22} />
              <div className="flex-1 text-left">
                <p className="font-medium text-red-400">Cerrar sesión</p>
                <p className="text-sm text-light-text-secondary dark:text-gray-400">
                  Salir de tu cuenta
                </p>
              </div>
              <ChevronRight className="text-red-400" size={20} />
            </button>
          </div>
        </motion.div>

        {/* App Info */}
        <motion.div variants={item} className="text-center py-4">
          <p className="text-xs text-light-text-secondary dark:text-gray-500">
            Zona² Running Experience
          </p>
          <p className="text-xs text-light-text-secondary dark:text-gray-500">
            Versión 1.0.0 • © 2025
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

