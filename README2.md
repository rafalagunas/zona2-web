# 📦 Guía de Despliegue - Zona²

Esta guía explica cómo desplegar la página web de Zona².

## 🎯 Prerequisitos

- Tener la carpeta `dist/` con el build completo

## 📁 Estructura del Build

Asegúrate de tener la siguiente estructura:

```
dist/
├── index.html              # Archivo HTML principal
└── assets/                 # Carpeta con todos los assets
    ├── index-XXXXX.js      # JavaScript compilado
    ├── index-XXXXX.css     # CSS compilado
    ├── Z2-XXXXX.ico        # Favicon
    └── runners-XXXXX.mp4   # Videos y otros assets
```

## 📤 Despliegue

### Subir el archivo index

Para desplegar el sitio web, simplemente sube el archivo `index.html` y la carpeta `assets/` completa a tu servidor.

**Pasos:**

1. Accede a tu servidor (por FTP, cPanel, o el método que uses)
2. Navega al directorio donde debe estar tu sitio web (ej: `/public_html/`, `/www/`, `/htdocs/`)
3. Sube el archivo `index.html` al directorio raíz
4. Sube la carpeta `assets/` completa (con todos sus archivos) al mismo directorio

**Estructura final en el servidor:**

```
directorio_raiz/
├── index.html
└── assets/
    ├── index-XXXXX.js
    ├── index-XXXXX.css
    ├── Z2-XXXXX.ico
    └── runners-XXXXX.mp4
```

### ⚠️ Notas Importantes

1. **Mantén la estructura de carpetas**: La carpeta `assets/` debe estar al mismo nivel que `index.html`

2. **No subas la carpeta `dist/`**: Sube el **contenido** de `dist/`, no la carpeta completa
   - ✅ Correcto: `public_html/index.html` y `public_html/assets/`
   - ❌ Incorrecto: `public_html/dist/index.html`

3. **Sube todos los archivos**: Asegúrate de subir tanto `index.html` como toda la carpeta `assets/` con todos sus archivos

4. **Verifica la subida**: Después de subir, verifica que todos los archivos estén presentes en el servidor

5. **Limpia la caché**: Después de subir, limpia la caché del navegador (`Cmd+Shift+R` en Mac, `Ctrl+Shift+R` en Windows)

---

*Última actualización: 2025*
