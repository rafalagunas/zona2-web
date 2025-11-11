# 🚀 Zona² - Guía de Inicio Rápido

## Instalación en 3 Pasos

### 1️⃣ Instalar Dependencias

```bash
cd /Users/rlgs/Desktop/devhood/Zona2
yarn install
```

### 2️⃣ Iniciar Servidor de Desarrollo

```bash
yarn dev
```

### 3️⃣ Abrir en Navegador

El proyecto se abrirá automáticamente en:
```
http://localhost:3000
```

## 📱 Navegación de la App

Una vez iniciado, verás 7 pantallas en total (3 de autenticación + 4 principales):

### 🎉 Pantallas de Autenticación

#### Welcome (/welcome)
- Pantalla de bienvenida inicial
- Opciones: Crear Cuenta o Ya tengo cuenta
- Features destacadas de Zona²

#### Login (/login)
- Formulario de inicio de sesión
- Login con Google y Apple (UI)
- Simulación: cualquier dato funciona

#### Register (/register)
- Formulario completo de registro
- Pantalla de éxito con bono $200 MXN
- Auto-redirect a dashboard

### 🏠 Pantallas Principales (Requieren "login")

#### Dashboard (/)
- Vista inicial con estadísticas
- Gráfico de frecuencia cardíaca
- Botón "Iniciar Carrera"

#### Live Activity (/live)
- Click en el tab "Correr" en la navegación inferior
- Verás el seguimiento en tiempo real
- Botones de Pausar/Finalizar funcionales

#### Community (/community)
- Click en el tab "Comunidad"
- Retos activos y leaderboard
- Feed social de amigos

#### Rewards (/rewards)
- Click en el tab "Gana"
- Wallet y balance
- Historial de ganancias

## 🎨 Características Visuales

✨ **Dark Mode** por defecto
🎯 **Responsive** - Optimizado para móvil (390x844px)
🌟 **Animaciones** - Transiciones suaves con Framer Motion
📊 **Gráficos** - Visualización de datos con Recharts
⚡ **Fast Refresh** - Cambios instantáneos durante desarrollo

## 🛠️ Comandos Útiles

```bash
# Ver versión de Node
node --version

# Ver versión de Yarn
yarn --version

# Limpiar caché y reinstalar
rm -rf node_modules yarn.lock
yarn install

# Build para producción
yarn build

# Preview del build
yarn preview
```

## 🔄 Flujo de Usuario Completo

### Opción 1: Empezar desde Welcome

```
http://localhost:3000/welcome
    ↓
Crear Cuenta o Ya tengo cuenta
    ↓
Formulario (cualquier dato)
    ↓
Dashboard Principal
```

### Opción 2: Acceso Directo

Puedes saltar directamente al dashboard:
```
http://localhost:3000/
```

### URLs Disponibles

- `/welcome` - Landing page
- `/login` - Inicio de sesión
- `/register` - Registro
- `/` - Dashboard (Home)
- `/live` - Actividad en vivo
- `/community` - Comunidad
- `/rewards` - Recompensas

## 🔧 Solución de Problemas

### Error: "yarn: command not found"

Instala Yarn globalmente:
```bash
npm install -g yarn
```

### Error: "Port 3000 already in use"

Mata el proceso:
```bash
lsof -ti:3000 | xargs kill -9
```

O cambia el puerto en `vite.config.js`:
```js
server: {
  port: 3001
}
```

### Pantalla en blanco

1. Verifica que todas las dependencias estén instaladas
2. Revisa la consola del navegador (F12)
3. Limpia caché del navegador (Cmd+Shift+R)

## 📊 Datos de Prueba

La aplicación usa datos mock para demostración:

- **Usuario**: Carlos Hernández
- **FC Actual**: 128 BPM (Zona 2)
- **Balance Wallet**: $1,450.00 MXN
- **Posición Leaderboard**: #1 con 2,450 puntos

## 🎯 Funcionalidades Interactivas

### ✅ Funcionales
- ✅ Navegación entre 7 pantallas
- ✅ Flujo de autenticación completo (simulado)
- ✅ Formularios de login y registro
- ✅ Temporizador en Live Activity (Play/Pause)
- ✅ Animaciones de entrada
- ✅ Hover effects en botones
- ✅ Gráficos interactivos (tooltips)
- ✅ Toggle show/hide en contraseñas

### ⏳ Mock/Demo
- ⏳ Validación de usuarios (acepta cualquier dato)
- ⏳ OAuth real (botones sociales solo UI)
- ⏳ Conexión a wearables (simulado)
- ⏳ Mapa GPS (SVG path simulado)
- ⏳ Sistema de likes/comentarios (UI only)
- ⏳ Transacciones de wallet (datos mock)

## 📱 Mejor Experiencia

Para ver la app como en móvil real:

### Chrome DevTools
1. Abre DevTools (F12)
2. Click en el ícono de dispositivo móvil (Cmd+Shift+M)
3. Selecciona "iPhone 14 Pro" o resolución 390x844
4. Recarga la página

### Firefox Responsive Design
1. Abre herramientas (Cmd+Option+M)
2. Selecciona dimensiones: 390 x 844
3. Activa "Touch simulation"

## 🎨 Personalización

### Cambiar Color Primario

Edita `tailwind.config.js`:

```js
colors: {
  primary: {
    DEFAULT: '#FF6B35',  // Cambia este valor
    light: '#FF8C5A',
    dark: '#E55527'
  }
}
```

### Cambiar Datos de Usuario

Edita cada archivo en `src/screens/`:

```js
// Dashboard.jsx - línea ~10
const userName = "Carlos Hernández"  // Cambia aquí
```

## 📚 Recursos Adicionales

- 📖 [Documentación completa](./README.md)
- 📋 [Detalles del proyecto](./PROYECTO.md)
- 🔐 [Pantallas de autenticación](./AUTH_SCREENS.md) ← NUEVO
- 📱 [Guía de pantallas](./SCREENS.md)
- 🌐 [Sitio oficial Zona2](https://zona2.mx)

## 💡 Tips

1. **Edita en caliente**: Los cambios se reflejan automáticamente
2. **Usa el navegador móvil**: Mejor experiencia en vista responsive
3. **Explora las animaciones**: Navega entre pantallas para ver transiciones
4. **Revisa los gráficos**: Hover sobre los charts para ver detalles

## 🤝 Soporte

¿Problemas? Revisa:
1. Que Node.js 18+ esté instalado
2. Que Yarn esté instalado globalmente
3. Que el puerto 3000 esté disponible
4. La consola del navegador para errores

---

**¡Disfruta explorando Zona²!** 🏃‍♂️💨

*Running Experience © 2025*

