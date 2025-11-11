import { Play, TrendingUp, Footprints, Flame } from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function Dashboard() {
  const { isDark } = useTheme()
  const currentHR = 128
  const maxHR = 180
  const targetZone = 2
  const hrPercentage = (currentHR / maxHR) * 100

  const stats = [
    { label: 'Pasos', value: '8,450', icon: Footprints, color: 'text-blue-400' },
    { label: 'Distancia', value: '6.2 km', icon: TrendingUp, color: 'text-green-400' },
    { label: 'Calorías', value: '420 kcal', icon: Flame, color: 'text-orange-400' }
  ]

  const pieData = [
    { name: 'Current', value: currentHR },
    { name: 'Remaining', value: maxHR - currentHR }
  ]

  const COLORS = isDark ? ['#FF6B35', '#252B38'] : ['#bde901', '#e0e0e0']

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
    <div className="min-h-full bg-light-bg dark:bg-dark-900 pt-12 px-6 pb-6">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-6"
      >
        {/* Header */}
        <motion.div variants={item}>
          <p className="text-light-text-secondary dark:text-gray-400 text-sm">Buenos días</p>
          <h1 className="text-3xl font-bold mt-1 text-light-text dark:text-white">Carlos Hernández</h1>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-light-text-secondary dark:text-gray-400">Dispositivo conectado</span>
          </div>
        </motion.div>

        {/* Heart Rate Zone Chart */}
        <motion.div
          variants={item}
          className="bg-light-card dark:bg-dark-800 rounded-3xl p-6 border border-light-border dark:border-dark-600"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-light-text-secondary dark:text-gray-400 text-sm">Frecuencia Cardíaca</p>
              <h2 className="text-3xl font-bold text-light-primary dark:text-primary mt-1">{currentHR} BPM</h2>
            </div>
            <div className="text-right">
              <p className="text-xs text-light-text-secondary dark:text-gray-400">Zona Actual</p>
              <div className="bg-light-primary/20 dark:bg-primary/20 px-4 py-2 rounded-xl border border-light-primary/30 dark:border-primary/30 mt-1">
                <span className="text-light-primary dark:text-primary text-2xl font-bold">Zona {targetZone}</span>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-4xl font-bold text-light-text dark:text-white">{Math.round(hrPercentage)}%</p>
                <p className="text-xs text-light-text-secondary dark:text-gray-400 mt-1">de FC máx</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-2 mt-4">
            {[1, 2, 3, 4, 5].map((zone) => (
              <div key={zone} className="text-center">
                <div
                  className={`h-2 rounded-full mb-1 ${
                    zone === targetZone ? 'bg-light-primary dark:bg-primary' : 'bg-light-border dark:bg-dark-600'
                  }`}
                ></div>
                <span className={`text-xs ${zone === targetZone ? 'text-light-primary dark:text-primary font-semibold' : 'text-light-text-secondary dark:text-gray-500'}`}>
                  Z{zone}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Daily Stats */}
        <motion.div variants={item} className="grid grid-cols-3 gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-light-card dark:bg-dark-800 rounded-2xl p-4 border border-light-border dark:border-dark-600 text-center"
            >
              <stat.icon className={`${stat.color} mx-auto mb-2`} size={24} />
              <p className="text-xs text-light-text-secondary dark:text-gray-400 mb-1">{stat.label}</p>
              <p className="font-bold text-lg text-light-text dark:text-white">{stat.value}</p>
            </div>
          ))}
        </motion.div>

        {/* Start Run Button */}
        <motion.button
          variants={item}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-light-primary dark:bg-gradient-to-r dark:from-primary dark:to-primary-light text-light-text dark:text-white font-bold text-lg py-5 rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-light-primary/30 dark:shadow-primary/30 hover:shadow-light-primary/50 dark:hover:shadow-primary/50 transition-all"
        >
          <Play size={24} fill="currentColor" />
          Iniciar Carrera
        </motion.button>

        {/* Quick Stats */}
        <motion.div
          variants={item}
          className="bg-light-card dark:bg-dark-800 rounded-2xl p-4 border border-light-border dark:border-dark-600"
        >
          <h3 className="font-semibold mb-3 text-light-text dark:text-white">Progreso del Mes</h3>
          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-light-text-secondary dark:text-gray-400">Días activos</span>
                <span className="font-semibold text-light-text dark:text-white">18/20 días</span>
              </div>
              <div className="w-full bg-light-border dark:bg-dark-600 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-light-text-secondary dark:text-gray-400">Meta mensual</span>
                <span className="font-semibold text-light-text dark:text-white">124/150 km</span>
              </div>
              <div className="w-full bg-light-border dark:bg-dark-600 rounded-full h-2">
                <div className="bg-light-primary dark:bg-primary h-2 rounded-full" style={{ width: '82%' }}></div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

