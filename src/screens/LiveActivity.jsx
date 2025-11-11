import { useState, useEffect } from 'react'
import { Pause, Square, MapPin, Activity } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function LiveActivity() {
  const { isDark } = useTheme()
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(true)

  useEffect(() => {
    let interval
    if (isRunning) {
      interval = setInterval(() => {
        setTime(t => t + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isRunning])

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const currentHR = 132
  const pace = '5:24'
  const distance = 4.82
  const calories = 342

  const zones = [
    { zone: 1, range: '90-126 BPM', color: 'from-gray-500 to-gray-600' },
    { zone: 2, range: '127-144 BPM', color: 'from-blue-500 to-blue-600', active: true },
    { zone: 3, range: '145-162 BPM', color: 'from-green-500 to-green-600' },
    { zone: 4, range: '163-180 BPM', color: 'from-yellow-500 to-yellow-600' },
    { zone: 5, range: '181+ BPM', color: 'from-red-500 to-red-600' }
  ]

  return (
    <div className="min-h-full bg-light-bg dark:bg-dark-900">
      {/* Map Area */}
      <div className="relative h-80 bg-gradient-to-br from-light-hover to-light-card dark:from-dark-700 dark:to-dark-800">
        {/* Simulated Map */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* Route Path */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 320">
              <defs>
                <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#FFB800" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              <path
                d="M 50 200 Q 100 150, 150 160 T 250 140 T 350 120"
                stroke="url(#routeGradient)"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
              />
              {/* Current Position */}
              <circle cx="350" cy="120" r="8" fill="#FF6B35">
                <animate
                  attributeName="r"
                  values="8;12;8"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
            
            {/* Map UI Elements */}
            <div className="absolute top-4 left-4 bg-light-card/90 dark:bg-dark-900/80 backdrop-blur-sm px-3 py-2 rounded-xl flex items-center gap-2 border border-light-border dark:border-transparent">
              <MapPin size={16} className="text-light-primary dark:text-primary" />
              <span className="text-sm font-medium text-light-text dark:text-white">Mérida, YUC</span>
            </div>
          </div>
        </div>

        {/* Zone Indicator */}
        <div className="absolute top-4 right-4 bg-light-primary/90 dark:bg-primary/90 backdrop-blur-sm px-4 py-3 rounded-2xl text-center border border-light-primary/30 dark:border-primary/30">
          <p className="text-xs font-medium mb-1 text-light-text dark:text-white">Zona Actual</p>
          <p className="text-3xl font-bold text-light-text dark:text-white">2</p>
        </div>
      </div>

      {/* Metrics */}
      <div className="px-6 py-6 space-y-6">
        {/* Main Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-3 gap-4"
        >
          <div className="bg-light-card dark:bg-dark-800 rounded-2xl p-4 border border-light-border dark:border-dark-600 flex flex-col items-center justify-center">
            <p className="text-xs text-light-text-secondary dark:text-gray-400 mb-1">Tiempo</p>
            <p className="text-lg font-bold text-light-primary dark:text-primary">{formatTime(time)}</p>
          </div>
          <div className="bg-light-card dark:bg-dark-800 rounded-2xl p-4 border border-light-border dark:border-dark-600 flex flex-col items-center justify-center">
            <p className="text-xs text-light-text-secondary dark:text-gray-400 mb-1">Distancia</p>
            <p className="text-lg font-bold text-light-text dark:text-white">{distance.toFixed(2)}</p>
            <p className="text-xs text-light-text-secondary dark:text-gray-400">km</p>
          </div>
          <div className="bg-light-card dark:bg-dark-800 rounded-2xl p-4 border border-light-border dark:border-dark-600 flex flex-col items-center justify-center">
            <p className="text-xs text-light-text-secondary dark:text-gray-400 mb-1">Ritmo</p>
            <p className="text-lg font-bold text-light-text dark:text-white">{pace}</p>
            <p className="text-xs text-light-text-secondary dark:text-gray-400">min/km</p>
          </div>
        </motion.div>

        {/* Heart Rate */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-light-card to-light-hover dark:from-dark-800 dark:to-dark-700 rounded-3xl p-6 border border-light-border dark:border-dark-600"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="bg-light-primary/20 dark:bg-primary/20 p-3 rounded-xl">
                <Activity className="text-light-primary dark:text-primary" size={24} />
              </div>
              <div>
                <p className="text-sm text-light-text-secondary dark:text-gray-400">Frecuencia Cardíaca</p>
                <p className="text-3xl font-bold text-light-primary dark:text-primary">{currentHR} <span className="text-lg text-light-text-secondary dark:text-gray-400">BPM</span></p>
              </div>
            </div>
          </div>

          {/* Zone Bars */}
            <div className="space-y-2">
            {zones.map((z) => (
              <div key={z.zone} className="flex items-center gap-3">
                <span className={`text-xs font-medium w-6 ${z.active ? 'text-light-primary dark:text-primary' : 'text-light-text-secondary dark:text-gray-500'}`}>
                  Z{z.zone}
                </span>
                <div className="flex-1 h-3 bg-light-border dark:bg-dark-600 rounded-full overflow-hidden">
                  {z.active && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '75%' }}
                      transition={{ duration: 0.5 }}
                      className={`h-full bg-gradient-to-r ${z.color} rounded-full`}
                    ></motion.div>
                  )}
                </div>
                <span className="text-xs text-light-text-secondary dark:text-gray-400 w-24">{z.range}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Secondary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 gap-3"
        >
          <div className="bg-light-card dark:bg-dark-800 rounded-2xl p-4 border border-light-border dark:border-dark-600">
            <p className="text-sm text-light-text-secondary dark:text-gray-400 mb-2">Calorías</p>
            <p className="text-2xl font-bold text-light-text dark:text-white">{calories} <span className="text-sm text-light-text-secondary dark:text-gray-400">kcal</span></p>
          </div>
          <div className="bg-light-card dark:bg-dark-800 rounded-2xl p-4 border border-light-border dark:border-dark-600">
            <p className="text-sm text-light-text-secondary dark:text-gray-400 mb-2">Cadencia</p>
            <p className="text-2xl font-bold text-light-text dark:text-white">168 <span className="text-sm text-light-text-secondary dark:text-gray-400">spm</span></p>
          </div>
        </motion.div>

        {/* Control Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex gap-3"
        >
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="flex-1 bg-light-primary hover:bg-light-primary-dark dark:bg-primary dark:hover:bg-primary-light text-light-text dark:text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-light-primary/30 dark:shadow-primary/30"
          >
            <Pause size={20} />
            {isRunning ? 'Pausar' : 'Continuar'}
          </button>
          <button className="bg-red-500/20 hover:bg-red-500/30 text-red-500 font-bold px-6 py-4 rounded-2xl flex items-center justify-center gap-2 transition-colors border border-red-500/30 dark:border-red-500/30">
            <Square size={20} />
            Finalizar
          </button>
        </motion.div>
      </div>
    </div>
  )
}

