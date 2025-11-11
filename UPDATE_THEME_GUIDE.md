# 🎨 Guía Rápida: Actualización de Tema Dark/Light

## Patrón de Cambios Aplicados

Para todas las pantallas, se aplicaron estos cambios sistemáticos:

### 1. Importaciones
```jsx
// Agregar al inicio:
import { useTheme } from '../context/ThemeContext'

// En el componente:
const { isDark } = useTheme()
```

### 2. Clases de Tailwind - Patrón de Reemplazo

| Clase Original | Clase con Tema |
|----------------|----------------|
| `bg-dark-900` | `bg-light-bg dark:bg-dark-900` |
| `bg-dark-800` | `bg-light-card dark:bg-dark-800` |
| `bg-dark-700` | `bg-light-hover dark:bg-dark-700` |
| `border-dark-600` | `border-light-border dark:border-dark-600` |
| `text-gray-400` | `text-light-text-secondary dark:text-gray-400` |
| `text-white` | `text-light-text dark:text-white` |
| `text-primary` | `text-light-primary dark:text-primary` |
| `bg-primary` | `bg-light-primary dark:bg-primary` |
| `bg-primary/20` | `bg-light-primary/20 dark:bg-primary/20` |
| `border-primary` | `border-light-primary dark:border-primary` |

### 3. Colores Dinámicos en Recharts
```jsx
// Antes:
const COLORS = ['#FF6B35', '#252B38']

// Después:
const COLORS = isDark ? ['#FF6B35', '#252B38'] : ['#bde901', '#e0e0e0']
```

## Archivos Completados

✅ Dashboard.jsx - Completado  
✅ LiveActivity.jsx - Completado  
✅ Settings.jsx - Completado (nueva)  
✅ BottomNav.jsx - Completado  
⏳ Community.jsx - En progreso  
⏳ Rewards.jsx - En progreso  

## Tema Claro - Paleta de Colores

```css
#bde901  - Verde lima (primario)
#f8f8f8  - Fondo casi blanco
#ffffff  - Tarjetas blancas
#e0e0e0  - Bordes sutiles
#000000  - Texto principal
#666666  - Texto secundario
```

## Resultado Esperado

Todas las pantallas deben:
- ✅ Responder al toggle de tema en Settings
- ✅ Mantener contraste adecuado en ambos temas
- ✅ Usar colores consistentes (naranja oscuro, verde lima claro)
- ✅ Transiciones suaves entre temas

