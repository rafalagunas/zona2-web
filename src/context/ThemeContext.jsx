import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Cargar tema guardado o usar light por defecto
    const savedTheme = localStorage.getItem('zona2-theme')
    return savedTheme || 'light'
  })

  useEffect(() => {
    // Guardar tema en localStorage
    localStorage.setItem('zona2-theme', theme)
    
    // Aplicar clase al body para estilos globales
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  const isDark = theme === 'dark'
  const isLight = theme === 'light'

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark, isLight }}>
      {children}
    </ThemeContext.Provider>
  )
}

