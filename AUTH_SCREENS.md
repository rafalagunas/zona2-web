# 🔐 Zona² - Pantallas de Autenticación

## Nuevas Pantallas Agregadas

Se han agregado **3 pantallas de autenticación** simuladas para completar el flujo de usuario desde el inicio hasta el dashboard principal.

---

## 📱 Pantallas de Autenticación

### 1. 🎉 Welcome / Landing Page

**Ruta:** `/welcome`

#### Elementos Visuales

```
┌───────────────────────────────────┐
│                                   │
│          ┌────────┐               │
│          │  Z²  ❤️│               │
│          └────────┘               │
│                                   │
│           Zona²                   │
│     Running Experience            │
│                                   │
│        ¡Corre, Conecta           │
│           y Gana!                 │
│                                   │
│   Únete a nuestra comunidad...    │
│                                   │
│  ✓ Trackea tus carreras          │
│  ✓ Conecta con la comunidad      │
│  ✓ Gana recompensas reales       │
│                                   │
│   [    Crear Cuenta    →]        │
│   [  Ya tengo cuenta   ]         │
│                                   │
│  Términos y Política              │
└───────────────────────────────────┘
```

#### Características
- ✅ Logo animado de Zona² con efecto de pulso
- ✅ Headline principal con gradiente
- ✅ 3 features destacadas con iconos
- ✅ 2 CTAs: Crear Cuenta (primario) e Iniciar Sesión
- ✅ Animaciones de entrada escalonadas
- ✅ Footer con términos

#### Interacciones
- **Click "Crear Cuenta"** → Navega a `/register`
- **Click "Ya tengo cuenta"** → Navega a `/login`

---

### 2. 🔑 Login / Inicio de Sesión

**Ruta:** `/login`

#### Elementos Visuales

```
┌───────────────────────────────────┐
│  ← Volver                         │
│                                   │
│  Z²  Bienvenido                   │
│      Inicia sesión para continuar │
│                                   │
│  Correo Electrónico               │
│  📧 [tu@email.com         ]       │
│                                   │
│  Contraseña                       │
│  🔒 [••••••••••]           👁     │
│                                   │
│  ☑ Recordarme  ¿Olvidaste...?    │
│                                   │
│  [  ❤️ Iniciar Sesión  ]         │
│                                   │
│  ─────── o continúa con ──────    │
│                                   │
│  [    🔵 Google    ]              │
│  [    🍎 Apple     ]              │
│                                   │
│  ¿No tienes cuenta? Regístrate    │
│                                   │
│  🎉 Bono: $200 MXN en activación  │
└───────────────────────────────────┘
```

#### Características
- ✅ Formulario de login con 2 campos
- ✅ Input de email con icono
- ✅ Input de contraseña con toggle show/hide
- ✅ Checkbox "Recordarme"
- ✅ Link "¿Olvidaste tu contraseña?"
- ✅ Botón primario con loading state
- ✅ Social login: Google y Apple (UI)
- ✅ Link a registro
- ✅ Banner con bono de bienvenida

#### Interacciones
- **Click "Iniciar Sesión"** → Muestra loading (1s) → Navega a `/` (Dashboard)
- **Click "Regístrate aquí"** → Navega a `/register`
- **Click "Volver"** → Navega a `/welcome`
- **Click ojo** → Toggle visibilidad de contraseña
- **Botones sociales** → Preparados para OAuth (UI only)

#### Estados
- **Normal**: Formulario vacío
- **Loading**: Spinner + texto "Iniciando..."
- **Simulación**: No valida datos, siempre navega a dashboard

---

### 3. 📝 Register / Registro

**Ruta:** `/register`

#### Elementos Visuales

```
┌───────────────────────────────────┐
│  ← Volver                         │
│                                   │
│  Crear Cuenta                     │
│  Únete a la comunidad de runners  │
│                                   │
│  Nombre Completo                  │
│  👤 [Carlos Hernández    ]        │
│                                   │
│  Correo Electrónico               │
│  📧 [tu@email.com         ]       │
│                                   │
│  Teléfono                         │
│  📱 [+52 999 123 4567    ]        │
│                                   │
│  Contraseña                       │
│  🔒 [••••••••••]           👁     │
│                                   │
│  Confirmar Contraseña             │
│  🔒 [••••••••••]           👁     │
│                                   │
│  ☑ Acepto Términos y Política     │
│                                   │
│  [    Crear Cuenta    ]           │
│                                   │
│  ¿Ya tienes cuenta? Inicia sesión │
│                                   │
│  ¿Qué obtienes al registrarte?    │
│  • 🎁 $200 MXN de bono            │
│  • 🏃 Tracking ilimitado          │
│  • 👥 Acceso a comunidad          │
│  • 💰 Gana recompensas            │
└───────────────────────────────────┘
```

#### Características
- ✅ Formulario completo con 5 campos
- ✅ Validación visual (sin backend)
- ✅ Inputs con iconos contextuales
- ✅ Toggle show/hide en ambas contraseñas
- ✅ Checkbox de términos y condiciones
- ✅ Botón primario con loading state
- ✅ Link a login
- ✅ Lista de beneficios del registro

#### Interacciones
- **Click "Crear Cuenta"** → Loading (1.5s) → Pantalla de éxito (2s) → Dashboard
- **Click "Inicia sesión"** → Navega a `/login`
- **Click "Volver"** → Navega a `/welcome`
- **Click ojos** → Toggle visibilidad de contraseñas

#### Pantalla de Éxito (Step 2)

```
┌───────────────────────────────────┐
│                                   │
│           ┌─────┐                 │
│           │  ✓  │                 │
│           └─────┘                 │
│                                   │
│    ¡Bienvenido a Zona²!          │
│                                   │
│   Tu cuenta ha sido creada        │
│   exitosamente.                   │
│   Preparando tu dashboard...      │
│                                   │
│  ┌───────────────────────────┐   │
│  │  🎉 Bono de Bienvenida    │   │
│  │      $200 MXN              │   │
│  │  Ya disponible en tu wallet│   │
│  └───────────────────────────┘   │
│                                   │
│         • • •                     │
│      (loading dots)               │
└───────────────────────────────────┘
```

#### Estados de Registro
1. **Formulario**: Recolección de datos
2. **Loading**: "Creando cuenta..."
3. **Éxito**: Confirmación con bono
4. **Redirect**: Auto-navega a dashboard

---

## 🔄 Flujo de Usuario Completo

### Flujo de Registro (Nuevo Usuario)

```
Landing (Welcome)
    ↓
[Click "Crear Cuenta"]
    ↓
Formulario de Registro
    ↓
[Click "Crear Cuenta"]
    ↓
Loading (1.5s simulado)
    ↓
Pantalla de Éxito
    ↓
Auto-redirect (2s)
    ↓
Dashboard Principal
```

### Flujo de Login (Usuario Existente)

```
Landing (Welcome)
    ↓
[Click "Ya tengo cuenta"]
    ↓
Formulario de Login
    ↓
[Click "Iniciar Sesión"]
    ↓
Loading (1s simulado)
    ↓
Dashboard Principal
```

### Acceso Directo

```
Puedes también ir directamente:
• http://localhost:3000/welcome  → Landing
• http://localhost:3000/login    → Login
• http://localhost:3000/register → Registro
• http://localhost:3000/         → Dashboard
```

---

## 🎨 Diseño y Estilo

### Consistencia Visual

Todas las pantallas de auth mantienen:
- ✅ **Dark Mode** con fondo `#0A0E14`
- ✅ **Naranja primario** `#FF6B35` en CTAs
- ✅ **Tipografía Inter** para consistencia
- ✅ **Inputs oscuros** con bordes sutiles
- ✅ **Animaciones** con Framer Motion
- ✅ **Iconos** de Lucide React

### Elementos Comunes

**Inputs Estándar**
```jsx
bg-dark-800
border border-dark-600
rounded-xl
py-3.5 px-4
focus:border-primary
```

**Botón Primario**
```jsx
bg-gradient-to-r from-primary to-primary-light
text-white font-bold
py-4 rounded-2xl
shadow-lg shadow-primary/30
```

**Botón Secundario**
```jsx
bg-dark-800
border border-dark-600
hover:bg-dark-700
```

---

## 🚀 Cómo Probar las Pantallas

### 1. Ir a la Landing

```bash
# Inicia el servidor
yarn dev

# Abre en el navegador
http://localhost:3000/welcome
```

### 2. Flujo Completo de Registro

1. Click en "Crear Cuenta"
2. Llena el formulario (cualquier dato, no valida)
3. Click en "Crear Cuenta"
4. Observa la animación de loading
5. Ve la pantalla de éxito
6. Auto-redirect al dashboard

### 3. Flujo Completo de Login

1. Desde welcome, click "Ya tengo cuenta"
2. Ingresa email y contraseña (cualquier dato)
3. Click "Iniciar Sesión"
4. Observa loading
5. Redirect a dashboard

---

## ⚙️ Configuración del Routing

### App.jsx Actualizado

El archivo `App.jsx` ahora incluye:

```jsx
// Pantallas de Auth (SIN bottom nav)
<Route path="/welcome" element={<Welcome />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />

// Pantallas Main (CON bottom nav)
<Route path="/" element={<Dashboard />} />
<Route path="/live" element={<LiveActivity />} />
<Route path="/community" element={<Community />} />
<Route path="/rewards" element={<Rewards />} />
```

### Lógica de Bottom Nav

```jsx
const authScreens = ['/welcome', '/login', '/register']
const showBottomNav = !authScreens.includes(location.pathname)

// Solo muestra bottom nav si NO estás en pantallas de auth
{showBottomNav && <BottomNav />}
```

---

## 🎯 Características de Simulación

### ⚠️ NO Funcionales (Solo UI)

- ❌ **Validación de email**: Acepta cualquier formato
- ❌ **Validación de contraseña**: No verifica fuerza
- ❌ **Verificación de usuario**: No consulta base de datos
- ❌ **OAuth real**: Botones sociales son decorativos
- ❌ **Envío de correos**: No envía verificación
- ❌ **Recuperación de contraseña**: Link preparado pero no funciona

### ✅ Funcionales (Simulado)

- ✅ **Navegación**: Todos los links funcionan
- ✅ **Loading states**: Spinners y animaciones
- ✅ **Toggle password**: Show/hide contraseña
- ✅ **Formularios**: Inputs capturan texto (no se envía)
- ✅ **Animaciones**: Transiciones y efectos visuales
- ✅ **Auto-redirect**: Después de registro exitoso
- ✅ **Pantalla de éxito**: Con bono mostrado

---

## 📋 Datos Mock Sugeridos

Para llenar los formularios durante demos:

### Login
```
Email: carlos@zona2.mx
Contraseña: zona2demo
```

### Registro
```
Nombre: Carlos Hernández
Email: carlos@zona2.mx
Teléfono: +52 999 123 4567
Contraseña: zona2demo
Confirmar: zona2demo
☑ Acepto términos
```

**Nota**: Cualquier dato funciona, no hay validación.

---

## 🎬 Animaciones Implementadas

### Welcome Screen
- Logo con escala y rotación continua
- Corazón con pulso
- Features con entrada desde la izquierda
- Fade in escalonado de elementos

### Login Screen
- Entrada escalonada de formulario
- Hover effects en inputs
- Loading spinner en botón
- Transición suave a dashboard

### Register Screen
- Formulario con stagger animation
- Lista de beneficios animada
- Pantalla de éxito con spring animation
- Círculo verde con check animado
- Dots de loading con pulse

---

## 💡 Mejores Prácticas

### Para Demos
1. Empieza siempre en `/welcome`
2. Muestra ambos flujos: registro y login
3. Menciona que es simulación (no backend)
4. Destaca el bono de $200 MXN
5. Muestra las animaciones

### Para Desarrollo Futuro
1. Agregar validación de formularios (Formik/React Hook Form)
2. Conectar con backend API
3. Implementar JWT tokens
4. Agregar OAuth real (Google, Apple)
5. Email de verificación
6. Recuperación de contraseña funcional
7. Persistencia de sesión (localStorage/cookies)

---

## 🔐 Seguridad (Para Producción)

### Por Implementar
- ⏳ Validación de inputs (XSS prevention)
- ⏳ Rate limiting en login
- ⏳ CAPTCHA en registro
- ⏳ Tokens CSRF
- ⏳ Encriptación de contraseñas (bcrypt)
- ⏳ Email de verificación obligatorio
- ⏳ 2FA opcional
- ⏳ Logout funcional

---

## 📸 Capturas Recomendadas

Para documentación, captura:

1. **Welcome screen completa** - Primera impresión
2. **Formulario de login** - Limpio y simple
3. **Formulario de registro** - Completo
4. **Pantalla de éxito** - Con bono destacado
5. **Transición a dashboard** - Flujo completo

---

## 🆕 Resumen de Cambios

### Archivos Creados
- ✅ `src/screens/Welcome.jsx` (120 líneas)
- ✅ `src/screens/Login.jsx` (180 líneas)
- ✅ `src/screens/Register.jsx` (250 líneas)
- ✅ `AUTH_SCREENS.md` (Este documento)

### Archivos Modificados
- ✅ `src/App.jsx` - Routing actualizado

### Total Agregado
- **3 pantallas nuevas**
- **550+ líneas de código**
- **7 rutas totales** (3 auth + 4 main)

---

## 🎉 Resultado

Ahora Zona² tiene un **flujo de autenticación completo** que va desde:

```
Landing → Login/Register → Dashboard → App Principal
```

Todo con diseño profesional, animaciones fluidas y UX intuitiva, manteniendo la coherencia visual del dark mode y el branding de Zona².

---

**Zona² © 2025 - Running Experience**

*"¡Corre, Conecta y Gana!"*

**Nuevas pantallas de autenticación implementadas** ✅

