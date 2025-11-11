import { Trophy, Medal, UserPlus, ThumbsUp, MessageCircle, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function Community() {
  const { isDark } = useTheme()
  const activities = [
    {
      id: 1,
      user: 'María González',
      avatar: 'MG',
      activity: 'Carrera matutina',
      distance: 8.5,
      time: '42:30',
      pace: '5:00',
      zone: 2,
      likes: 24,
      comments: 3,
      timestamp: 'Hace 2 horas'
    },
    {
      id: 2,
      user: 'Pedro Sánchez',
      avatar: 'PS',
      activity: 'Entrenamiento intervalos',
      distance: 5.2,
      time: '28:15',
      pace: '5:26',
      zone: 4,
      likes: 18,
      comments: 5,
      timestamp: 'Hace 5 horas'
    },
    {
      id: 3,
      user: 'Ana Martínez',
      avatar: 'AM',
      activity: 'Carrera larga',
      distance: 15.0,
      time: '1:30:00',
      pace: '6:00',
      zone: 2,
      likes: 42,
      comments: 8,
      timestamp: 'Hace 8 horas'
    }
  ]

  const challenges = [
    {
      id: 1,
      name: 'Reto 50km del Mes',
      progress: 38.5,
      total: 50,
      participants: 234,
      daysLeft: 8,
      reward: 150
    },
    {
      id: 2,
      name: 'Zona 2 Challenge',
      progress: 12,
      total: 20,
      participants: 156,
      daysLeft: 15,
      reward: 200
    }
  ]

  const leaderboard = [
    { position: 1, name: 'Carlos Hernández', points: 2450, avatar: 'CH', isYou: true },
    { position: 2, name: 'Laura Torres', points: 2380, avatar: 'LT' },
    { position: 3, name: 'Miguel Ángel', points: 2215, avatar: 'MA' },
    { position: 4, name: 'Sofia Ramírez', points: 2180, avatar: 'SR' },
    { position: 5, name: 'Diego López', points: 2050, avatar: 'DL' }
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
        <motion.div variants={item} className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-light-text dark:text-white">Comunidad</h1>
            <p className="text-light-text-secondary dark:text-gray-400 text-sm mt-1">Conecta con runners</p>
          </div>
          <button className="bg-light-primary/20 dark:bg-primary/20 text-light-primary dark:text-primary p-3 rounded-xl border border-light-primary/30 dark:border-primary/30">
            <UserPlus size={20} />
          </button>
        </motion.div>

        {/* Active Challenges */}
        <motion.div variants={item}>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-light-text dark:text-white">Retos Activos</h2>
            <Trophy className="text-light-primary dark:text-primary" size={20} />
          </div>
          <div className="space-y-3">
            {challenges.map((challenge) => (
              <div
                key={challenge.id}
                className="bg-gradient-to-br from-light-card to-light-hover dark:from-dark-800 dark:to-dark-700 rounded-2xl p-4 border border-light-border dark:border-dark-600"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1 text-light-text dark:text-white">{challenge.name}</h3>
                    <p className="text-xs text-light-text-secondary dark:text-gray-400">{challenge.participants} participantes</p>
                  </div>
                  <div className="bg-light-primary/20 dark:bg-primary/20 px-3 py-1 rounded-lg border border-light-primary/30 dark:border-primary/30">
                    <p className="text-light-text dark:text-primary text-xs font-semibold">+{challenge.reward} Z2</p>
                  </div>
                </div>
                <div className="mb-2">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-light-text-secondary dark:text-gray-400">Progreso</span>
                    <span className="font-semibold text-light-text dark:text-white">{challenge.progress}/{challenge.total} km</span>
                  </div>
                  <div className="w-full bg-light-border dark:bg-dark-600 rounded-full h-2">
                    <div
                      className="bg-light-primary dark:bg-gradient-to-r dark:from-primary dark:to-primary-light h-2 rounded-full"
                      style={{ width: `${(challenge.progress / challenge.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <p className="text-xs text-light-text-secondary dark:text-gray-400">Quedan {challenge.daysLeft} días</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Leaderboard */}
        <motion.div variants={item}>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-light-text dark:text-white">Clasificación</h2>
            <Award className="text-light-primary dark:text-primary" size={20} />
          </div>
          <div className="bg-light-card dark:bg-dark-800 rounded-2xl border border-light-border dark:border-dark-600 overflow-hidden">
            {leaderboard.map((entry, index) => (
              <div
                key={entry.position}
                className={`flex items-center gap-4 p-4 ${
                  index !== leaderboard.length - 1 ? 'border-b border-light-border dark:border-dark-600' : ''
                } ${entry.isYou ? 'bg-light-primary/10 dark:bg-primary/10' : ''}`}
              >
                <div className={`text-xl font-bold w-8 ${entry.position <= 3 ? 'text-light-primary dark:text-primary' : 'text-light-text-secondary dark:text-gray-400'}`}>
                  {entry.position}
                </div>
                {entry.position <= 3 && (
                  <Medal className="text-light-primary dark:text-primary" size={20} />
                )}
                <div className="flex items-center justify-center w-10 h-10 bg-light-hover dark:bg-dark-700 rounded-full font-semibold text-sm border-2 border-light-primary/30 dark:border-primary/30 text-light-text dark:text-white">
                  {entry.avatar}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-light-text dark:text-white">{entry.name}</p>
                  {entry.isYou && <p className="text-xs text-light-primary dark:text-primary">Tú</p>}
                </div>
                <div className="text-right">
                  <p className="font-bold text-light-primary dark:text-primary">{entry.points.toLocaleString()}</p>
                  <p className="text-xs text-light-text-secondary dark:text-gray-400">puntos</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Social Feed */}
        <motion.div variants={item}>
          <h2 className="text-lg font-semibold mb-3 text-light-text dark:text-white">Actividad Reciente</h2>
          <div className="space-y-4">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="bg-light-card dark:bg-dark-800 rounded-2xl p-4 border border-light-border dark:border-dark-600"
              >
                {/* User Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-light-primary/20 dark:bg-primary/20 rounded-full font-semibold text-sm border-2 border-light-primary/30 dark:border-primary/30 text-light-text dark:text-white">
                    {activity.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-light-text dark:text-white">{activity.user}</p>
                    <p className="text-xs text-light-text-secondary dark:text-gray-400">{activity.timestamp}</p>
                  </div>
                  <div className="bg-light-primary/20 dark:bg-primary/20 px-2 py-1 rounded-lg">
                    <p className="text-light-primary dark:text-primary text-xs font-semibold">Z{activity.zone}</p>
                  </div>
                </div>

                {/* Activity Info */}
                <h3 className="font-semibold mb-3 text-light-text dark:text-white">{activity.activity}</h3>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-3">
                  <div className="bg-light-hover dark:bg-dark-700 rounded-xl p-2 text-center">
                    <p className="text-xs text-light-text-secondary dark:text-gray-400">Distancia</p>
                    <p className="font-bold text-light-text dark:text-white">{activity.distance} km</p>
                  </div>
                  <div className="bg-light-hover dark:bg-dark-700 rounded-xl p-2 text-center">
                    <p className="text-xs text-light-text-secondary dark:text-gray-400">Tiempo</p>
                    <p className="font-bold text-light-text dark:text-white">{activity.time}</p>
                  </div>
                  <div className="bg-light-hover dark:bg-dark-700 rounded-xl p-2 text-center">
                    <p className="text-xs text-light-text-secondary dark:text-gray-400">Ritmo</p>
                    <p className="font-bold text-light-text dark:text-white">{activity.pace}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-3 border-t border-light-border dark:border-dark-600">
                  <button className="flex items-center gap-2 text-light-text-secondary dark:text-gray-400 hover:text-light-primary dark:hover:text-primary transition-colors">
                    <ThumbsUp size={18} />
                    <span className="text-sm font-medium">{activity.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-light-text-secondary dark:text-gray-400 hover:text-light-primary dark:hover:text-primary transition-colors">
                    <MessageCircle size={18} />
                    <span className="text-sm font-medium">{activity.comments}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

