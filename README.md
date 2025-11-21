# Zona² - Running Experience

![Zona2 Logo](https://zona2.mx)

**¡Corre, Conecta y Gana!**

Una propuesta visual de diseño de aplicación móvil (UI/UX) para Zona2, la plataforma de running que recompensa tu constancia.

## 🎯 Características


- **Dashboard Principal**: Visualización de frecuencia cardíaca por zonas, estadísticas diarias y progreso mensual
- **Seguimiento en Vivo**: Monitoreo en tiempo real durante carreras con métricas y mapa
- **Comunidad**: Feed social, retos activos y clasificaciones entre runners
- **Monetización**: Wallet digital, historial de ganancias y opciones de canje

## 🎨 Diseño

### Estilo Visual
- **Tema**: Dark Mode
- **Paleta de colores**: 
  - Fondo: Negro/Gris oscuro (#0A0E14)
  - Primario: Naranja vibrante (#FF6B35)
  - Accentos: Gradientes hacia amarillo (#FFB800)
- **Tipografía**: Inter (Sans Serif moderna y legible)

### Pantallas Incluidas

1. **Dashboard (Home)** - `/`
   - Saludo personalizado
   - Gráfico circular de frecuencia cardíaca
   - Indicador de Zona actual
   - Estadísticas: Pasos, Distancia, Calorías
   - Botón de inicio rápido
   - Progreso mensual

2. **Seguimiento en Vivo** - `/live`
   - Mapa interactivo con ruta
   - Métricas en tiempo real: Tiempo, Distancia, Ritmo
   - Indicador visual de Zona cardíaca
   - Control de pausa/finalizar
   - Estadísticas secundarias

3. **Comunidad** - `/community`
   - Retos activos con progreso
   - Clasificación (Leaderboard)
   - Feed social de actividades
   - Sistema de likes y comentarios
   - Recompensas por participación

4. **Recompensas** - `/rewards`
   - Balance de Wallet
   - Gráfico de ganancias mensuales
   - Historial de recompensas
   - Opciones de canje
   - Estadísticas de ingresos

## 🚀 Tecnologías

- **React 18** - Biblioteca UI
- **Vite** - Build tool y dev server
- **React Router DOM** - Navegación entre pantallas
- **Tailwind CSS** - Estilos y diseño responsivo
- **Recharts** - Gráficos y visualización de datos
- **Framer Motion** - Animaciones fluidas
- **Lucide React** - Iconografía moderna

## 📦 Instalación

### Prerequisitos

- Node.js 18+ instalado
- Yarn package manager

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/zona2.git
cd zona2
```

2. **Instalar dependencias**
```bash
yarn install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env
# Edita .env con tus credenciales
```

4. **Iniciar servidor de desarrollo**
```bash
yarn dev
```

5. **Abrir en navegador**
```
http://localhost:3000
```

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
yarn dev          # Inicia servidor de desarrollo

# Producción
yarn build        # Construye para producción
yarn preview      # Preview de build de producción

# Calidad de código
yarn lint         # Ejecuta ESLint
```

## 📱 Vista Móvil

La aplicación está diseñada específicamente para dispositivos móviles con:
- Viewport optimizado para 390x844px (iPhone 14 Pro)
- Diseño "phone container" con notch simulado
- Navegación inferior fija
- Gestos táctiles optimizados

## 🏗️ Estructura del Proyecto

```
Zona2/
├── src/
│   ├── components/
│   │   └── BottomNav.jsx      # Navegación inferior
│   ├── screens/
│   │   ├── Dashboard.jsx      # Pantalla principal
│   │   ├── LiveActivity.jsx   # Seguimiento en vivo
│   │   ├── Community.jsx      # Comunidad y retos
│   │   └── Rewards.jsx        # Monetización
│   ├── App.jsx                # Componente raíz con rutas
│   ├── main.jsx               # Punto de entrada
│   └── index.css              # Estilos globales
├── public/                    # Assets estáticos
├── index.html                 # HTML base
├── package.json               # Dependencias
├── vite.config.js            # Configuración Vite
├── tailwind.config.js        # Configuración Tailwind
└── README.md                 # Documentación
```

## 🎯 Concepto Zona2

### ¿Cómo funciona?

**Zona2** recompensa a los corredores de tres formas:

#### 🏃 Runner
- Gana por actividad diaria
- Bonos por cumplir 20 días/mes
- Recompensas por invitaciones
- Retos y medallas
- Wallet automática con liquidación anual

#### 🎖️ Pacer Certificado
- Ingresos por sesiones guiadas
- Propinas y servicios premium
- Agenda flexible
- Niveles y reputación
- Marca personal

#### 🌎 Runner Visitante
- Descubre nuevas ciudades
- Corre con pacers locales
- Experiencias seguras
- Rutas personalizadas

## 🔐 Seguridad

- Variables de entorno para API keys
- No incluir `.env` en el repositorio
- Autenticación JWT (a implementar)
- HTTPS en producción

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este es un proyecto de propuesta visual/concepto para Zona2.

## 📞 Contacto

Zona² - [@zona2mx](https://zona2.mx)

Sitio Web: [https://zona2.mx](https://zona2.mx)

## 🙏 Agradecimientos

- [Zona2](https://zona2.mx) por el concepto original
- Comunidad de runners de Mérida, Yucatán
- [Lucide Icons](https://lucide.dev)
- [Recharts](https://recharts.org)
- [Framer Motion](https://www.framer.com/motion/)

---

**Hecho con ❤️ para la comunidad de running**

*Running Experience © 2025 Zona²*

