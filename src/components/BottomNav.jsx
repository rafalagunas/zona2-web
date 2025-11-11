import { NavLink } from 'react-router-dom'
import { Home, Activity, Users, Gift, Settings } from 'lucide-react'

export default function BottomNav() {
  const navItems = [
    { path: '/', icon: Home, label: 'Inicio' },
    { path: '/live', icon: Activity, label: 'Correr' },
    { path: '/community', icon: Users, label: 'Comunidad' },
    { path: '/rewards', icon: Gift, label: 'Gana' },
    { path: '/settings', icon: Settings, label: 'Config' }
  ]

  return (
    <nav className="absolute bottom-0 left-0 right-0 bg-light-card dark:bg-dark-800 border-t border-light-border dark:border-dark-600 px-4 py-3 z-50">
      <div className="flex items-center justify-between">
        {navItems.map(({ path, icon: Icon, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 transition-colors ${
                isActive ? 'text-light-primary dark:text-primary' : 'text-light-text-secondary dark:text-gray-400'
              }`
            }
          >
            <Icon size={22} />
            <span className="text-xs font-medium">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

