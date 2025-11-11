# Zona² - Propuesta Visual UI/UX

## 📋 Resumen del Proyecto

Este proyecto es una **propuesta visual completa de diseño de aplicación móvil** para **Zona2**, una plataforma innovadora de running basada en el concepto "Corre, Conecta y Gana".

## 🎨 Especificaciones de Diseño Implementadas

### Estilo Visual

✅ **Tema Dark Mode**: Todo el diseño utiliza modo oscuro como base
- Fondo principal: `#0A0E14` (dark-900)
- Fondos secundarios: `#11151C` (dark-800)
- Bordes y divisores: `#252B38` (dark-600)

✅ **Paleta de Colores Vibrante**
- Color primario: **Naranja `#FF6B35`** (primary)
- Color acento: **Amarillo `#FFB800`** para gradientes
- Colores de zona cardíaca: Azul, Verde, Amarillo, Rojo
- Estados: Verde (activo), Rojo (alerta)

✅ **Tipografía Clara y Moderna**
- Familia: **Inter** (Sans Serif de Google Fonts)
- Pesos: 300, 400, 500, 600, 700, 800
- Tamaños jerárquicos para legibilidad óptima

## 📱 Pantallas Implementadas

### 1. Dashboard Principal (Home) - `/`

**Elementos incluidos:**
- ✅ Saludo personalizado al usuario
- ✅ Gráfico circular (Pie Chart) grande de frecuencia cardíaca
- ✅ Indicador visual prominente de "Zona 2"
- ✅ Porcentaje de FC máxima en el centro del gráfico
- ✅ Barra de zonas 1-5 con zona actual destacada
- ✅ Tarjetas de estadísticas del día:
  - Pasos con icono
  - Distancia (km)
  - Calorías quemadas
- ✅ Botón CTA grande: "Iniciar Carrera"
- ✅ Progreso del mes (días activos 18/20, meta km)
- ✅ Estado de dispositivo conectado

**Características especiales:**
- Animaciones de entrada con Framer Motion
- Gráfico interactivo con Recharts
- Gradientes en textos y elementos clave
- Indicador de pulso en tiempo real

### 2. Seguimiento en Vivo (Live Activity) - `/live`

**Elementos incluidos:**
- ✅ Mapa en mitad superior con ruta simulada
- ✅ Indicador de ubicación (Mérida, YUC)
- ✅ Métricas grandes y legibles:
  - Tiempo (formato HH:MM:SS)
  - Distancia (km con 2 decimales)
  - Ritmo (min/km)
- ✅ Zona de frecuencia cardíaca destacada
- ✅ BPM actual con gradiente
- ✅ Barras de las 5 zonas cardíacas
- ✅ Estadísticas secundarias (Calorías, Cadencia)
- ✅ Botones de control: Pausar y Finalizar
- ✅ Animación de pulso en posición actual

**Características especiales:**
- Temporizador funcional en tiempo real
- Animaciones SVG para ruta en mapa
- Transiciones suaves entre estados
- Diseño optimizado para lectura durante carrera

### 3. Comunidad/Retos (Conecta) - `/community`

**Elementos incluidos:**
- ✅ Sección de Retos Activos:
  - Nombre del reto
  - Barra de progreso visual
  - Participantes
  - Días restantes
  - Recompensa en Z2 tokens
- ✅ Clasificación (Leaderboard):
  - Top 5 posiciones
  - Medallas para top 3
  - Indicador "Tú" para usuario actual
  - Puntos totales
  - Avatares personalizados
- ✅ Feed Social (Actividad Reciente):
  - Tarjetas de actividades de amigos
  - Avatar y nombre de usuario
  - Tipo de actividad y zona
  - Estadísticas (distancia, tiempo, ritmo)
  - Likes y comentarios
  - Timestamp relativo

**Características especiales:**
- Sistema de gamificación completo
- Interacciones sociales (likes, comentarios)
- Diseño de competición amigable
- Motivación por comunidad

### 4. Monetización (Gana) - `/rewards`

**Elementos incluidos:**
- ✅ Wallet destacado con balance total
- ✅ Diseño de tarjeta premium con gradiente
- ✅ Saldo disponible en MXN
- ✅ Recompensas pendientes
- ✅ Fecha de próximo pago
- ✅ Gráfico de ganancias mensuales (AreaChart)
- ✅ Estadísticas rápidas (mes actual, invitaciones, días)
- ✅ Historial detallado de recompensas:
  - Tipo de actividad (run, referral, challenge)
  - Descripción
  - Monto ganado
  - Fecha
  - Iconos por categoría
- ✅ Opciones de canje:
  - Transferencia bancaria
  - Renovación de membresía
  - Tienda Zona²
- ✅ Banner informativo de cómo ganar más

**Características especiales:**
- Visualización clara del sistema económico
- Historial transparente de transacciones
- Múltiples opciones de monetización
- Motivación por recompensas concretas

## 🚀 Tecnologías Utilizadas

### Frontend Framework
- **React 18.2.0** - Biblioteca UI moderna con hooks
- **Vite 5.0** - Build tool rápido y eficiente

### Routing
- **React Router DOM 6.20** - Navegación SPA fluida

### Styling
- **Tailwind CSS 3.3** - Utility-first CSS framework
- **Custom CSS** - Animaciones y estilos específicos
- **PostCSS + Autoprefixer** - Optimización de CSS

### Charts & Visualización
- **Recharts 2.10** - Biblioteca de gráficos React
  - PieChart para frecuencia cardíaca
  - AreaChart para ganancias mensuales
  - ResponsiveContainer para adaptabilidad

### Icons
- **Lucide React 0.294** - Iconografía moderna y consistente
  - 50+ iconos utilizados
  - Tamaños personalizables
  - SVG optimizados

### Animations
- **Framer Motion 10.16** - Animaciones fluidas
  - Transiciones de entrada
  - Gestos táctiles
  - Animaciones de estado

## 📐 Arquitectura de Componentes

```
App (Router)
├── Phone Container (UI Frame)
│   ├── Screens (Dynamic)
│   │   ├── Dashboard
│   │   ├── LiveActivity
│   │   ├── Community
│   │   └── Rewards
│   └── BottomNav (Fixed)
```

### Componentes Compartidos
- `BottomNav.jsx` - Navegación inferior con 4 tabs
- `Logo.jsx` - Logo de marca reutilizable

### Pantallas (Screens)
Cada pantalla es un componente independiente con:
- Estado local para interactividad
- Animaciones de entrada consistentes
- Diseño responsive
- Datos mock realistas

## 🎯 Características Destacadas

### Experiencia de Usuario (UX)

1. **Navegación Intuitiva**
   - Bottom navigation siempre accesible
   - Indicador visual de tab activa
   - Transiciones suaves entre pantallas

2. **Jerarquía Visual Clara**
   - Información prioritaria en tamaño grande
   - Uso de color para destacar elementos clave
   - Espaciado generoso para legibilidad

3. **Feedback Visual**
   - Animaciones de carga y transiciones
   - Estados hover y active en botones
   - Indicadores de progreso claros

4. **Accesibilidad**
   - Contraste alto (Dark mode optimizado)
   - Tamaños de fuente legibles
   - Íconos con etiquetas

### Interfaz de Usuario (UI)

1. **Sistema de Diseño Consistente**
   - Paleta de colores definida
   - Espaciado uniforme (Tailwind spacing)
   - Bordes redondeados consistentes (8px, 12px, 16px, 20px)

2. **Componentes Reutilizables**
   - Tarjetas con estilo dark
   - Botones con estados
   - Barras de progreso animadas

3. **Microinteracciones**
   - Botones con efecto scale al tocar
   - Gráficos con tooltips
   - Animaciones de pulso para elementos vivos

4. **Responsive Design**
   - Optimizado para 390x844px (iPhone 14 Pro)
   - Grid layouts adaptativos
   - Imágenes y gráficos responsivos

## 📊 Datos Implementados

### Dashboard
- Usuario: Carlos Hernández
- FC actual: 128 BPM (Zona 2)
- Pasos: 8,450
- Distancia: 6.2 km
- Calorías: 420 kcal
- Días activos: 18/20
- Meta mensual: 124/150 km

### Live Activity
- Ubicación: Mérida, YUC
- Zona actual: 2
- Tiempo: Contador en tiempo real
- Distancia: 4.82 km
- Ritmo: 5:24 min/km
- FC: 132 BPM
- Calorías: 342 kcal
- Cadencia: 168 spm

### Community
- 3 actividades recientes de amigos
- 2 retos activos (50km mes, Zona 2 Challenge)
- Top 5 leaderboard con Carlos en 1er lugar
- Sistema de likes y comentarios

### Rewards
- Balance: $1,450.00 MXN
- Pendiente: $245.50 MXN
- Próximo pago: 15 Nov 2025
- 5 transacciones recientes
- Gráfico de 6 meses de ganancias
- 3 opciones de canje

## 🎨 Paleta de Colores Completa

```css
/* Primarios */
--primary: #FF6B35          /* Naranja vibrante */
--primary-light: #FF8C5A    /* Naranja claro */
--primary-dark: #E55527     /* Naranja oscuro */

/* Fondos Dark */
--dark-900: #0A0E14         /* Fondo principal */
--dark-800: #11151C         /* Tarjetas */
--dark-700: #1A1F2A         /* Hover states */
--dark-600: #252B38         /* Bordes */
--dark-500: #313945         /* Divisores */

/* Accentos */
--accent-yellow: #FFB800    /* Gradientes */
--accent-blue: #3B82F6      /* Info */
--accent-green: #10B981     /* Success */
--accent-red: #EF4444       /* Alert */

/* Zonas Cardíacas */
--zone-1: #6B7280           /* Gris */
--zone-2: #3B82F6           /* Azul */
--zone-3: #10B981           /* Verde */
--zone-4: #F59E0B           /* Amarillo */
--zone-5: #EF4444           /* Rojo */
```

## 📱 Simulación de Dispositivo

El proyecto incluye un "phone container" que simula un dispositivo móvil real:

- **Dimensiones**: 390x844px (iPhone 14 Pro)
- **Notch**: Simulado con CSS
- **Bordes**: Redondeados con efecto físico
- **Sombras**: Profundidad 3D
- **Scroll**: Área de contenido scrolleable
- **Nav fija**: Bottom navigation siempre visible

## 🔄 Sistema de Estados

### Interactividad Implementada

1. **Live Activity**
   - Temporizador funcional (start/pause)
   - Estado de carrera (running/paused)
   - Actualización en tiempo real

2. **Navigation**
   - Active state en tab actual
   - Transiciones entre rutas
   - Persistencia de navegación

3. **Animations**
   - Entrada escalonada de elementos
   - Hover effects en botones
   - Pulso en indicadores activos

## 🚀 Próximos Pasos (Sugeridos)

Para convertir esta propuesta en aplicación funcional:

1. **Backend Integration**
   - API REST o GraphQL
   - Autenticación de usuarios
   - Base de datos (MongoDB/PostgreSQL)

2. **Features Reales**
   - Integración con wearables (Garmin, Apple Watch)
   - GPS real para tracking
   - Sistema de pagos (Stripe, PayPal)
   - Notificaciones push

3. **Social Features**
   - Chat en tiempo real
   - Comentarios y likes funcionales
   - Sistema de seguimiento de usuarios

4. **Monetization**
   - Wallet blockchain (opcional)
   - Sistema de referidos completo
   - Certificación de pacers

## 📝 Notas Importantes

- ⚠️ **Este es un prototipo visual/UI** - No incluye backend funcional
- ⚠️ **Datos mock** - Toda la información es simulada para demostración
- ⚠️ **Mapas simulados** - SVG paths en lugar de mapas reales
- ⚠️ **No hay autenticación** - Usuarios hardcodeados para demo

## 🎓 Aprendizajes y Decisiones de Diseño

### Por qué Dark Mode
- Mejor para uso en exteriores (reduce brillo)
- Ahorro de batería en OLED
- Estética moderna y deportiva
- Reduce fatiga visual en sesiones largas

### Por qué Naranja como Primario
- Color energético y motivador
- Alta visibilidad en dark mode
- Asociación con deporte y movimiento
- Contraste óptimo con fondo oscuro

### Por qué estas 4 Pantallas
- **Dashboard**: Punto de partida, información rápida
- **Live Activity**: Core feature, uso durante carrera
- **Community**: Engagement y retención
- **Rewards**: Motivación y monetización

## 📞 Créditos

**Diseño conceptual basado en**: [Zona2.mx](https://zona2.mx)

**Tecnologías open source utilizadas**:
- React, Vite, Tailwind CSS
- Recharts, Framer Motion, Lucide Icons

---

**Zona² © 2025 - Running Experience**
*"¡Corre, Conecta y Gana!"*

