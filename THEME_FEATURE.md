# 🌓 Zona² - Feature: Dark/Light Theme Toggle

## ✅ Funcionalidad Implementada

Se ha agregado un **sistema completo de temas Dark/Light** con toggle interactivo en la sección de Configuración.

---

## 🎨 Temas Disponibles

### 🌙 Dark Theme (Original)
- **Primario**: Naranja `#FF6B35`
- **Fondo**: Negro `#0A0E14`
- **Tarjetas**: Gris oscuro `#11151C`
- **Textos**: Blanco/Gris claro

### ☀️ Light Theme (Nuevo)
- **Primario**: Verde lima `#bde901`
- **Fondo**: Casi blanco `#f8f8f8`
- **Tarjetas**: Blanco `#ffffff`
- **Textos**: Negro `#000000` / Gris `#666666`

---

## 📱 Nuevo: Pantalla de Settings

### Ruta
`http://localhost:3000/settings`

### Características
✅ **Toggle de tema** con animación
✅ **Perfil de usuario** con badge Premium
✅ **Secciones organizadas**: Apariencia, Cuenta, Preferencias, Soporte
✅ **Preview del tema** actual con descripción
✅ **Zona de peligro** con opción de cerrar sesión
✅ **Info de la app** y versión

### Acceso
- **Bottom Navigation**: Nuevo ícono "Config" (5to botón)
- **Ruta directa**: `/settings`

---

## 🔄 Navegación Actualizada

### Bottom Nav (5 tabs)
```
🏠 Inicio | 🏃 Correr | 👥 Comunidad | 💰 Gana | ⚙️ Config
```

### Rutas Totales: 8
1. `/welcome` - Landing
2. `/login` - Inicio de sesión  
3. `/register` - Registro
4. `/` - Dashboard
5. `/live` - Actividad en vivo
6. `/community` - Comunidad
7. `/rewards` - Recompensas
8. `/settings` - **Configuración (NUEVO)**

---

## 🛠️ Implementación Técnica

### Archivos Creados

#### 1. ThemeContext (`src/context/ThemeContext.jsx`)
```jsx
- ThemeProvider: Proveedor global de tema
- useTheme: Hook personalizado
- Persistencia en localStorage
- Clase dark/light en <html>
```

#### 2. Settings Screen (`src/screens/Settings.jsx`)
```jsx
- Toggle de tema animado
- Secciones configurables
- Preview del tema activo
- Perfil de usuario
```

#### 3. Tailwind Config Actualizado
```js
darkMode: 'class'
colors: {
  light: {
    primary: '#bde901',
    bg: '#f8f8f8',
    card: '#ffffff',
    border: '#e0e0e0',
    text: '#000000',
    'text-secondary': '#666666'
  }
}
```

### Archivos Modificados

✅ `App.jsx` - ThemeProvider + ruta Settings
✅ `BottomNav.jsx` - 5to botón + estilos tema
✅ `Dashboard.jsx` - Clases con dark:  
✅ `LiveActivity.jsx` - Clases con dark:
✅ `tailwind.config.js` - darkMode + colores light

⏳ `Community.jsx` - Requiere clases theme
⏳ `Rewards.jsx` - Requiere clases theme

---

## 🎯 Cómo Funciona

### 1. Usuario Cambia el Tema

```
Settings → Toggle Tema
    ↓
ThemeContext actualiza estado
    ↓
localStorage guarda preferencia
    ↓
Clase 'dark' o 'light' en <html>
    ↓
Tailwind aplica estilos condicionales
```

### 2. Persistencia

```javascript
// Al cargar la app:
const savedTheme = localStorage.getItem('zona2-theme')
// 'dark' o 'light'

// Al cambiar tema:
localStorage.setItem('zona2-theme', newTheme)
```

### 3. Estilos Condicionales

```jsx
className="bg-light-bg dark:bg-dark-900"
// Light: bg-light-bg (#f8f8f8)
// Dark: bg-dark-900 (#0A0E14)
```

---

## 🚀 Cómo Probar

### Método 1: Flujo Completo

1. **Iniciar app**
```bash
yarn dev
```

2. **Navegar a Settings**
- Abrir `http://localhost:3000`
- Click en tab "Config" (último botón)

3. **Cambiar tema**
- Toggle "Tema" en primera sección
- Ver cambio instantáneo en toda la app

4. **Verificar persistencia**
- Refrescar página (F5)
- El tema se mantiene

### Método 2: URL Directa

```
http://localhost:3000/settings
```

### Método 3: Probar en Todas las Pantallas

```
/ → Dashboard con tema
/live → Live Activity con tema
/community → Community (parcial)
/rewards → Rewards (parcial)
/settings → Toggle tema
```

---

## 🎨 Componentes del Tema

### Toggle Animado

```jsx
<motion.div
  animate={{ x: isDark ? 0 : 24 }}
  className="w-4 h-4 bg-white rounded-full"
/>
```

**Estados:**
- 🌙 Dark: Toggle a la izquierda
- ☀️ Light: Toggle a la derecha

### Preview del Tema

```jsx
{isDark 
  ? 'Diseño optimizado para uso nocturno'
  : 'Diseño brillante y energético para el día'
}
```

---

## ✨ Pantallas Completamente Actualizadas

| Pantalla | Tema Dark | Tema Light | Estado |
|----------|-----------|------------|--------|
| **Dashboard** | ✅ | ✅ | Completo |
| **Live Activity** | ✅ | ✅ | Completo |
| **Settings** | ✅ | ✅ | Completo |
| **Bottom Nav** | ✅ | ✅ | Completo |
| Community | ✅ | ⚠️ | Parcial |
| Rewards | ✅ | ⚠️ | Parcial |

⚠️ = Estructura lista, faltan algunas clases de tema

---

## 📊 Comparación Visual

### Dark Theme
```
🌙 Fondo: Negro profundo
   Contraste alto para uso nocturno
   Naranja #FF6B35 destaca
   Reduce fatiga visual
```

### Light Theme
```
☀️ Fondo: Blanco brillante
   Energético y vibrante
   Verde lima #bde901 resalta
   Óptimo para uso diurno
```

---

## 🔧 Configuración Adicional

### Secciones en Settings

1. **Apariencia**
   - ✅ Toggle Tema (Dark/Light)

2. **Cuenta**
   - Información personal
   - Privacidad y seguridad

3. **Preferencias**
   - Notificaciones
   - Idioma

4. **Soporte**
   - Ayuda
   - Acerca de (v1.0.0)

5. **Zona de Peligro**
   - Cerrar sesión

---

## 💡 Beneficios

### UX Mejorado
✅ Usuario controla la apariencia
✅ Mejor legibilidad según contexto
✅ Reducción de fatiga visual
✅ Personalización de experiencia

### Técnico
✅ Sistema escalable
✅ Fácil de extender
✅ Persistencia automática
✅ Sin recarga de página

### Accesibilidad
✅ Alto contraste en ambos temas
✅ Opciones visuales flexibles
✅ Adaptable a preferencias del usuario

---

## 🎯 Próximos Pasos

### Para completar 100%:

1. **Finalizar Community.jsx**
   - Aplicar patrón de clases dark:
   - useTheme hook
   - Colores condicionales

2. **Finalizar Rewards.jsx**
   - Aplicar patrón de clases dark:
   - useTheme hook
   - Colores en gráficos

3. **Pantallas Auth (Opcional)**
   - Welcome.jsx
   - Login.jsx
   - Register.jsx

### Mejoras Futuras:

- [ ] Más opciones de personalización
- [ ] Temas custom por usuario
- [ ] Modo automático (según hora del día)
- [ ] Transiciones suaves entre temas
- [ ] Previsualización antes de aplicar

---

## 📝 Ejemplo de Uso del Hook

```jsx
import { useTheme } from '../context/ThemeContext'

function MiComponente() {
  const { theme, toggleTheme, isDark, isLight } = useTheme()
  
  return (
    <div className="bg-light-bg dark:bg-dark-900">
      <button onClick={toggleTheme}>
        {isDark ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
      </button>
    </div>
  )
}
```

---

## 🎨 Paleta Completa

### Dark Theme
```css
Primary:     #FF6B35 (Naranja)
Primary Light: #FF8C5A
Primary Dark:  #E55527
Background:    #0A0E14
Card:          #11151C
Border:        #252B38
Text:          #FFFFFF
Text Secondary: #9CA3AF
```

### Light Theme
```css
Primary:     #bde901 (Verde lima)
Primary Dark: #a5cf01
Background:  #f8f8f8
Card:        #ffffff
Border:      #e0e0e0
Hover:       #f0f0f0
Text:        #000000
Text Secondary: #666666
```

---

## ✅ Resumen de Cambios

### Nuevos Archivos: 3
- `src/context/ThemeContext.jsx`
- `src/screens/Settings.jsx`
- `UPDATE_THEME_GUIDE.md`
- `THEME_FEATURE.md` (este archivo)

### Archivos Modificados: 5
- `src/App.jsx`
- `src/components/BottomNav.jsx`
- `src/screens/Dashboard.jsx`
- `src/screens/LiveActivity.jsx`
- `tailwind.config.js`

### Total Agregado
- **~500 líneas** de código nuevo
- **1 pantalla** nueva (Settings)
- **1 tab** nuevo en navegación
- **2 temas** completos

---

## 🎉 Resultado Final

**Zona² ahora tiene un sistema de temas completo** que permite a los usuarios personalizar su experiencia visual entre:

- 🌙 **Dark Mode**: Diseño original oscuro y elegante
- ☀️ **Light Mode**: Diseño nuevo brillante con verde lima

**Acceso rápido:** Tab "Config" en la navegación inferior → Primera opción "Tema"

---

**Zona² © 2025 - Running Experience**

*"¡Corre, Conecta y Gana... ahora con el tema que prefieras!"*

**Feature:** Dark/Light Theme Toggle ✅  
**Versión:** 1.1.0  
**Estado:** Funcional y listo para uso

