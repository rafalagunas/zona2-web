import { Wallet, TrendingUp, Gift, Users, Calendar, Zap, ChevronRight, DollarSign } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function Rewards() {
  const { isDark } = useTheme()
  const balance = 1450.00
  const pendingRewards = 245.50
  const nextPayout = '15 Nov 2025'

  const earningsData = [
    { month: 'May', amount: 180 },
    { month: 'Jun', amount: 240 },
    { month: 'Jul', amount: 320 },
    { month: 'Ago', amount: 280 },
    { month: 'Sep', amount: 380 },
    { month: 'Oct', amount: 450 }
  ]

  const activities = [
    {
      id: 1,
      type: 'run',
      description: 'Meta 20 días cumplida',
      amount: 150.00,
      date: '1 Nov 2025',
      icon: Calendar,
      color: 'text-green-400'
    },
    {
      id: 2,
      type: 'referral',
      description: 'Invitación: María González',
      amount: 50.00,
      date: '28 Oct 2025',
      icon: Users,
      color: 'text-blue-400'
    },
    {
      id: 3,
      type: 'challenge',
      description: 'Reto Octubre completado',
      amount: 200.00,
      date: '31 Oct 2025',
      icon: Zap,
      color: 'text-purple-400'
    },
    {
      id: 4,
      type: 'run',
      description: 'Actividad diaria',
      amount: 10.00,
      date: '27 Oct 2025',
      icon: TrendingUp,
      color: 'text-orange-400'
    },
    {
      id: 5,
      type: 'run',
      description: 'Actividad diaria',
      amount: 10.00,
      date: '26 Oct 2025',
      icon: TrendingUp,
      color: 'text-orange-400'
    }
  ]

  const quickStats = [
    { label: 'Este mes', value: '$245.50', icon: Calendar },
    { label: 'Invitaciones', value: '8', icon: Users },
    { label: 'Días activos', value: '18', icon: TrendingUp }
  ]

  const rewardOptions = [
    { name: 'Transferencia Bancaria', min: 500, icon: DollarSign },
    { name: 'Renovar Membresía', cost: 200, icon: Zap },
    { name: 'Tienda Zona²', min: 100, icon: Gift }
  ]

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
          <h1 className="text-3xl font-bold mb-1 text-light-text dark:text-white">Gana</h1>
          <p className="text-light-text-secondary dark:text-gray-400 text-sm">Tus recompensas Zona²</p>
        </motion.div>

        {/* Wallet Balance */}
        <motion.div
          variants={item}
          className="bg-gradient-to-br from-light-primary to-light-primary-dark dark:from-primary dark:to-primary-dark rounded-3xl p-6 shadow-xl shadow-light-primary/20 dark:shadow-primary/20 relative"
        >
          <button className="absolute top-4 right-4 bg-black/20 dark:bg-white/20 hover:bg-black/30 dark:hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-xl font-semibold text-sm transition-colors text-light-text dark:text-white">
            Ver detalles
          </button>
          
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Wallet size={20} className="text-light-text dark:text-white" />
              <p className="text-sm font-medium opacity-90 text-light-text dark:text-white">Wallet Zona²</p>
            </div>
            <h2 className="text-5xl font-bold mb-1 text-light-text dark:text-white">${balance.toFixed(2)}</h2>
            <p className="text-sm opacity-90 text-light-text dark:text-white">MXN disponible</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-black/10 dark:bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <p className="text-xs opacity-80 mb-1 text-light-text dark:text-white">Pendiente</p>
              <p className="text-xl font-bold text-light-text dark:text-white">${pendingRewards.toFixed(2)}</p>
            </div>
            <div className="bg-black/10 dark:bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <p className="text-xs opacity-80 mb-1 text-light-text dark:text-white">Próximo pago</p>
              <p className="text-sm font-semibold text-light-text dark:text-white">{nextPayout}</p>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div variants={item} className="grid grid-cols-3 gap-3">
          {quickStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-light-card dark:bg-dark-800 rounded-2xl p-4 border border-light-border dark:border-dark-600 text-center"
            >
              <stat.icon className="text-light-primary dark:text-primary mx-auto mb-2" size={24} />
              <p className="font-bold text-lg mb-1 text-light-text dark:text-white">{stat.value}</p>
              <p className="text-xs text-light-text-secondary dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Earnings Chart */}
        <motion.div
          variants={item}
          className="bg-light-card dark:bg-dark-800 rounded-2xl p-4 border border-light-border dark:border-dark-600"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-light-text dark:text-white">Ganancias Mensuales</h3>
            <TrendingUp className="text-green-400" size={20} />
          </div>
          <ResponsiveContainer width="100%" height={150}>
            <AreaChart data={earningsData}>
              <defs>
                <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={isDark ? "#FF6B35" : "#bde901"} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={isDark ? "#FF6B35" : "#bde901"} stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="month"
                stroke="#6B7280"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis hide />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1A1F2A',
                  border: '1px solid #313945',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
              />
              <Area
                type="monotone"
                dataKey="amount"
                stroke={isDark ? "#FF6B35" : "#bde901"}
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorAmount)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Redeem Options */}
        <motion.div variants={item}>
          <h3 className="font-semibold mb-3 text-light-text dark:text-white">Canjear Recompensas</h3>
          <div className="space-y-3">
            {rewardOptions.map((option) => (
              <button
                key={option.name}
                className="w-full bg-light-card dark:bg-dark-800 hover:bg-light-hover dark:hover:bg-dark-700 rounded-2xl p-4 border border-light-border dark:border-dark-600 flex items-center gap-4 transition-colors"
              >
                <div className="bg-light-primary/20 dark:bg-primary/20 p-3 rounded-xl">
                  <option.icon className="text-light-primary dark:text-primary" size={20} />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-semibold text-light-text dark:text-white">{option.name}</p>
                  <p className="text-xs text-light-text-secondary dark:text-gray-400">
                    {option.min ? `Mínimo $${option.min}` : `$${option.cost} MXN`}
                  </p>
                </div>
                <ChevronRight className="text-light-text-secondary dark:text-gray-400" size={20} />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Activity History */}
        <motion.div variants={item}>
          <h3 className="font-semibold mb-3 text-light-text dark:text-white">Historial de Recompensas</h3>
          <div className="bg-light-card dark:bg-dark-800 rounded-2xl border border-light-border dark:border-dark-600 overflow-hidden">
            {activities.map((activity, index) => (
              <div
                key={activity.id}
                className={`flex items-center gap-4 p-4 ${
                  index !== activities.length - 1 ? 'border-b border-light-border dark:border-dark-600' : ''
                }`}
              >
                <div className={`${activity.color}`}>
                  <activity.icon size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm text-light-text dark:text-white">{activity.description}</p>
                  <p className="text-xs text-light-text-secondary dark:text-gray-400">{activity.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-400">+${activity.amount.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Info Banner */}
        <motion.div
          variants={item}
          className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-4 border border-blue-500/30 dark:border-blue-500/30"
        >
          <div className="flex items-start gap-3">
            <Gift className="text-blue-400 flex-shrink-0" size={20} />
            <div>
              <p className="font-semibold text-sm mb-1 text-light-text dark:text-white">¿Cómo ganas más?</p>
              <p className="text-xs text-light-text-secondary dark:text-gray-300">
                Completa tu meta de 20 días al mes, invita amigos y participa en retos para maximizar tus recompensas.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

