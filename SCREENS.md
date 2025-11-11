# 📱 Zona² - Guía Visual de Pantallas

## Navegación de la Aplicación

```
┌─────────────────────────────────────────┐
│          📱 Zona² Mobile App            │
├─────────────────────────────────────────┤
│                                         │
│     [Content Area - Scrollable]         │
│                                         │
├─────────────────────────────────────────┤
│  🏠      🏃      👥      💰             │
│ Inicio  Correr  Comunidad  Gana         │
└─────────────────────────────────────────┘
```

---

## 1. 🏠 Dashboard Principal

**Ruta:** `/` o `http://localhost:3000`

### Elementos Visuales

```
┌───────────────────────────────────┐
│ Buenos días                       │
│ Carlos Hernández                  │
│ 🟢 Dispositivo conectado          │
├───────────────────────────────────┤
│                                   │
│       ┌─────────────┐            │
│       │    ╱ ╲      │            │
│       │   │ 71% │    │   Zona 2  │
│       │    ╲_╱      │            │
│       └─────────────┘            │
│    128 BPM                        │
│                                   │
│    [Z1] [Z2] [Z3] [Z4] [Z5]      │
├───────────────────────────────────┤
│  👣      📈       🔥              │
│ 8,450   6.2km   420 kcal         │
├───────────────────────────────────┤
│                                   │
│      ▶ Iniciar Carrera           │
│                                   │
├───────────────────────────────────┤
│ Progreso del Mes                  │
│ Días activos: 18/20 ▓▓▓▓▓▓░░     │
│ Meta mensual: 124/150km ▓▓▓▓▓░░  │
└───────────────────────────────────┘
```

### Características Clave
- ✅ Gráfico circular de frecuencia cardíaca (Recharts PieChart)
- ✅ Indicador grande de Zona 2
- ✅ 3 tarjetas de estadísticas diarias
- ✅ Botón CTA con gradiente naranja
- ✅ Barras de progreso mensual
- ✅ Animaciones de entrada escalonadas

### Interacciones
- Click en "Iniciar Carrera" → Navega a `/live`
- Gráfico interactivo con tooltips
- Animación de pulso en indicador conectado

---

## 2. 🏃 Live Activity - Seguimiento en Vivo

**Ruta:** `/live` o click en tab "Correr"

### Elementos Visuales

```
┌───────────────────────────────────┐
│  ┌─────────────────────────────┐ │
│  │    🗺️ MAPA GPS              │ │
│  │                       Zona 2│ │
│  │      ~~~╱╲~~~               │ │
│  │     ╱      ╲      📍        │ │
│  │  Ruta      ╲╱               │ │
│  │   📍 Mérida, YUC            │ │
│  └─────────────────────────────┘ │
├───────────────────────────────────┤
│ ⏱️ Tiempo  📏 Distancia  ⚡ Ritmo │
│  00:42:30    4.82 km    5:24     │
├───────────────────────────────────┤
│ ❤️ Frecuencia Cardíaca            │
│    132 BPM                        │
│                                   │
│ Z1 ░░░░░░░░░                     │
│ Z2 ▓▓▓▓▓▓▓░░  127-144 BPM       │
│ Z3 ░░░░░░░░░                     │
│ Z4 ░░░░░░░░░                     │
│ Z5 ░░░░░░░░░                     │
├───────────────────────────────────┤
│  🔥 342 kcal    👟 168 spm       │
├───────────────────────────────────┤
│  [⏸️ Pausar]    [⏹️ Finalizar]    │
└───────────────────────────────────┘
```

### Características Clave
- ✅ Mapa simulado con ruta SVG animada
- ✅ Temporizador funcional (cuenta en tiempo real)
- ✅ 3 métricas principales en tarjetas
- ✅ Barras de zonas cardíacas con zona actual destacada
- ✅ Botones de control (Pausar/Finalizar)
- ✅ Indicador de zona flotante

### Interacciones
- Click "Pausar" → Pausa el temporizador
- Click "Continuar" → Reanuda contador
- Click "Finalizar" → (Preparado para lógica futura)
- Animación de pulso en posición GPS

---

## 3. 👥 Community - Comunidad y Retos

**Ruta:** `/community` o click en tab "Comunidad"

### Elementos Visuales

```
┌───────────────────────────────────┐
│ Comunidad              [👤+]      │
│ Conecta con runners               │
├───────────────────────────────────┤
│ 🏆 Retos Activos                  │
│                                   │
│ ┌─────────────────────────────┐  │
│ │ Reto 50km del Mes   +150 Z2 │  │
│ │ 234 participantes           │  │
│ │ ▓▓▓▓▓▓▓░░░ 38.5/50 km       │  │
│ │ Quedan 8 días               │  │
│ └─────────────────────────────┘  │
├───────────────────────────────────┤
│ 🏅 Clasificación                  │
│                                   │
│ 1 🥇 CH  Carlos Hernández   2,450│
│          [Tú]                     │
│ 2 🥈 LT  Laura Torres       2,380│
│ 3 🥉 MA  Miguel Ángel       2,215│
│ 4    SR  Sofia Ramírez      2,180│
│ 5    DL  Diego López        2,050│
├───────────────────────────────────┤
│ 📱 Actividad Reciente             │
│                                   │
│ ┌─────────────────────────────┐  │
│ │ MG  María González    Z2    │  │
│ │     Carrera matutina        │  │
│ │  8.5km | 42:30 | 5:00       │  │
│ │  👍 24    💬 3               │  │
│ └─────────────────────────────┘  │
└───────────────────────────────────┘
```

### Características Clave
- ✅ 2 retos activos con barras de progreso
- ✅ Leaderboard top 5 con medallas
- ✅ Tu posición destacada
- ✅ Feed social con 3 actividades
- ✅ Sistema de likes y comentarios (UI)
- ✅ Indicadores de zona por actividad

### Interacciones
- Botón "+" para invitar amigos (UI preparado)
- Scroll en feed de actividades
- Click en retos (preparado para expansión)
- Hover effects en botones sociales

---

## 4. 💰 Rewards - Monetización y Ganancias

**Ruta:** `/rewards` o click en tab "Gana"

### Elementos Visuales

```
┌───────────────────────────────────┐
│ Gana                              │
│ Tus recompensas Zona²             │
├───────────────────────────────────┤
│ ┌─────────────────────────────┐  │
│ │ 💳 Wallet Zona²     [Detalles]│ │
│ │                               │ │
│ │   $1,450.00 MXN               │ │
│ │   disponible                  │ │
│ │                               │ │
│ │ Pendiente     Próximo pago    │ │
│ │ $245.50      15 Nov 2025      │ │
│ └─────────────────────────────┘  │
├───────────────────────────────────┤
│ 📅 $245.50  👥 8   📈 18          │
│  Este mes  Invita  Días activos   │
├───────────────────────────────────┤
│ 📊 Ganancias Mensuales            │
│                                   │
│     ╱╲    ╱╲                      │
│    ╱  ╲__╱  ╲__                   │
│  May Jun Jul Ago Sep Oct          │
├───────────────────────────────────┤
│ 🎁 Canjear Recompensas            │
│                                   │
│ 💵 Transferencia Bancaria    →   │
│    Mínimo $500                    │
│                                   │
│ ⚡ Renovar Membresía         →   │
│    $200 MXN                       │
│                                   │
│ 🎁 Tienda Zona²              →   │
│    Mínimo $100                    │
├───────────────────────────────────┤
│ 📜 Historial de Recompensas       │
│                                   │
│ 📅 Meta 20 días cumplida  +$150  │
│    1 Nov 2025                     │
│                                   │
│ 👥 Invitación: María     +$50.00 │
│    28 Oct 2025                    │
└───────────────────────────────────┘
```

### Características Clave
- ✅ Wallet destacado con gradiente premium
- ✅ Balance total y pendiente
- ✅ Gráfico de ganancias (AreaChart con gradiente)
- ✅ 3 estadísticas rápidas
- ✅ Historial detallado con íconos por tipo
- ✅ Opciones de canje con requisitos
- ✅ Banner informativo de ayuda

### Interacciones
- Click "Ver detalles" (preparado)
- Hover sobre gráfico → Tooltip con valores
- Click en opciones de canje (preparado)
- Scroll en historial

---

## 🎨 Sistema de Colores por Pantalla

### Dashboard
- **Primario**: Naranja (#FF6B35) en gráfico y CTA
- **Zona 2**: Azul (#3B82F6) destacado
- **Progreso**: Verde (#10B981) para completado

### Live Activity
- **Zona activa**: Azul con barra animada
- **Mapa**: Gradiente naranja a amarillo en ruta
- **Controles**: Naranja (pausar) y rojo (finalizar)

### Community
- **Medallas**: Gradiente naranja para top 3
- **Retos**: Naranja en recompensas
- **Social**: Gris neutral con acentos naranja

### Rewards
- **Wallet**: Gradiente naranja a naranja oscuro
- **Ganancias**: Verde (#10B981) para ingresos
- **Gráfico**: Naranja con relleno degradado

---

## 📊 Jerarquía Visual

### Nivel 1 - Información Crítica
- Frecuencia cardíaca actual (Dashboard)
- Tiempo/Distancia (Live)
- Balance wallet (Rewards)
- Tu posición (Community)

**Estilo:** Texto 3xl-5xl, bold, gradiente o color primario

### Nivel 2 - Métricas Importantes
- Estadísticas del día
- Zonas cardíacas
- Retos activos
- Ganancias del mes

**Estilo:** Texto xl-2xl, semibold, tarjetas destacadas

### Nivel 3 - Información Contextual
- Labels de métricas
- Fechas y timestamps
- Descripciones
- Ayuda contextual

**Estilo:** Texto xs-sm, gray-400, peso normal

---

## 🎯 Componentes Reutilizables

### Tarjeta Estándar
```
bg-dark-800
rounded-2xl
p-4
border border-dark-600
```

### Botón Primario
```
bg-gradient-to-r from-primary to-primary-light
text-white font-bold
py-4 px-6
rounded-2xl
shadow-lg shadow-primary/30
```

### Barra de Progreso
```
bg-dark-600 (fondo)
bg-gradient-to-r from-primary to-primary-light (relleno)
h-2 rounded-full
```

### Avatar Circular
```
w-10 h-10
bg-primary/20
rounded-full
font-semibold
border-2 border-primary/30
```

---

## 🔄 Flujo de Usuario Típico

```
Inicio (Dashboard)
    ↓
[Click "Iniciar Carrera"]
    ↓
Live Activity (Tracking)
    ↓
[Correr → Click "Finalizar"]
    ↓
Community (Publicar actividad)
    ↓
[Ver recompensa ganada]
    ↓
Rewards (Ver balance actualizado)
```

---

## 💡 Tips de Visualización

### Modo Móvil Recomendado
1. Chrome DevTools → Device Mode
2. Resolución: 390 x 844
3. Zoom: 100%
4. Touch simulation: ON

### Mejor Experiencia
- ✅ Pantalla vertical (portrait)
- ✅ Scroll suave con trackpad
- ✅ Hover para ver tooltips
- ✅ Click en todos los botones (algunos funcionales)

### Elementos Animados
- 🎬 Entrada de elementos (stagger)
- 🔄 Gráficos (transiciones)
- 💓 Indicadores de pulso
- ⚡ Hover effects
- 🏃 Ruta en mapa

---

## 📸 Capturas Sugeridas

Para documentación o presentación, captura:

1. **Dashboard completo** - Vista inicial
2. **Live con mapa** - Durante actividad
3. **Leaderboard** - Gamificación
4. **Wallet abierto** - Monetización

---

**Zona² © 2025 - Running Experience**

*Esta guía describe la implementación visual completa de las 4 pantallas principales de la propuesta UI/UX.*

