# 📦 Guía de Montaje del Index - Zona²

Esta guía explica cómo montar y servir el index de la página web de Zona² cuando ya tienes el build listo (carpeta `dist/`).

## 🎯 Prerequisitos

- Tener la carpeta `dist/` con el build completo
- Node.js instalado (para algunas opciones)
- Python instalado (opcional, para servidor simple)

## 📁 Estructura del Build

Asegúrate de tener la siguiente estructura:

```
dist/
├── index.html              # Archivo HTML principal
├── assets/
│   ├── index-XXXXX.js      # JavaScript compilado
│   ├── index-XXXXX.css     # CSS compilado
│   ├── Z2-XXXXX.ico        # Favicon
│   └── runners-XXXXX.mp4   # Videos y otros assets
```

## 🌐 Opciones para Montar/Servir el Index

### ⚠️ IMPORTANTE

**Los módulos ES6 no funcionan cuando abres el HTML directamente desde el sistema de archivos (`file://`) debido a las políticas de seguridad del navegador (CORS). SIEMPRE debes usar un servidor HTTP.**

### Opción 1: Servidor Local con Vite Preview (⭐ RECOMENDADO)

Si tienes acceso al proyecto con Node.js y Yarn:

```bash
yarn preview
```

Esto iniciará un servidor local (generalmente en `http://localhost:4173`) donde podrás ver el build.

**Alternativa rápida con Python:**
```bash
yarn serve
```

Esto iniciará un servidor HTTP simple en `http://localhost:8000` usando Python.

### Opción 2: Servidor HTTP Simple con Python

Si tienes Python instalado (viene preinstalado en macOS y Linux):

```bash
# Navega a la carpeta dist
cd dist

# Python 3
python3 -m http.server 8000

# O Python 2
python -m SimpleHTTPServer 8000
```

Luego abre en tu navegador: `http://localhost:8000`

### Opción 3: Servidor HTTP Simple con Node.js

Usando `http-server`:

```bash
# Instalar globalmente (solo una vez)
npm install -g http-server

# Servir la carpeta dist
cd dist
http-server -p 8000
```

Luego abre en tu navegador: `http://localhost:8000`

### Opción 4: Servidor Nginx (Producción)

Para producción con Nginx, configura un virtual host:

```nginx
server {
    listen 80;
    server_name tu-dominio.com;
    root /ruta/a/zona2-web/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache para assets estáticos
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|mp4|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Opción 5: Apache (Producción)

Para Apache, crea un archivo `.htaccess` en la carpeta `dist/`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### ⚠️ Opción 6: Abrir Directamente desde el Sistema de Archivos (NO FUNCIONA)

**❌ NO FUNCIONARÁ**

**NO puedes abrir el `index.html` directamente desde el sistema de archivos** porque:

- Los módulos ES6 (`type="module"`) están bloqueados por las políticas de seguridad del navegador cuando se usan con `file://`
- Verás errores de CORS como: `Access to script at 'file:///...' from origin 'null' has been blocked by CORS policy`

**Solución**: **SIEMPRE usa un servidor HTTP** (ver Opciones 1-5 arriba).

## 🚀 Despliegue en Servicios de Hosting

### Vercel

1. Arrastra la carpeta `dist/` a [vercel.com](https://vercel.com)
2. O instala Vercel CLI: `npm i -g vercel`
3. Desde la carpeta `dist/`: `vercel`

### Netlify

1. Arrastra la carpeta `dist/` a [netlify.com/drop](https://app.netlify.com/drop)
2. O conecta tu repositorio y configura:
   - Publish directory: `dist`

### GitHub Pages

1. Sube el contenido de `dist/` a la rama `gh-pages` de tu repositorio
2. O usa GitHub Actions para automatizar el despliegue

### AWS S3 + CloudFront

1. Sube el contenido de `dist/` a un bucket S3
2. Configura el bucket para hosting estático
3. Opcionalmente, configura CloudFront para CDN

### Firebase Hosting

1. Instala Firebase CLI: `npm install -g firebase-tools`
2. Inicializa: `firebase init hosting`
3. Configura `dist` como directorio público
4. Despliega: `firebase deploy`

## 📤 Despliegue por FTP

Para subir el build a un servidor mediante FTP, sigue estos pasos:

### Prerequisitos

Necesitarás:
- **Servidor FTP**: Dirección del servidor (ej: `ftp.tudominio.com` o IP)
- **Usuario FTP**: Tu nombre de usuario
- **Contraseña FTP**: Tu contraseña
- **Directorio de destino**: Ruta donde subir los archivos (ej: `/public_html/` o `/www/` o `/htdocs/`)
- **Cliente FTP**: FileZilla, Cyberduck, o cualquier cliente FTP

### Paso 1: Preparar los Archivos

Asegúrate de tener la carpeta `dist/` completa con todos los archivos:

```
dist/
├── index.html
└── assets/
    ├── index-XXXXX.js
    ├── index-XXXXX.css
    ├── Z2-XXXXX.ico
    └── runners-XXXXX.mp4
```

### Paso 2: Conectar al Servidor FTP

#### Opción A: FileZilla (Recomendado)

1. **Descarga e instala FileZilla** desde [filezilla-project.org](https://filezilla-project.org/)

2. **Abre FileZilla** y en la barra superior ingresa:
   - **Servidor**: `ftp.tudominio.com` (o la IP del servidor)
   - **Usuario**: Tu usuario FTP
   - **Contraseña**: Tu contraseña FTP
   - **Puerto**: `21` (o el puerto que te haya proporcionado tu hosting)

3. **Haz clic en "Conectar rápido"** o presiona Enter

4. **Espera a que se establezca la conexión** (verás los archivos del servidor en el panel derecho)

#### Opción B: Cyberduck

1. **Descarga e instala Cyberduck** desde [cyberduck.io](https://cyberduck.io/)

2. **Haz clic en "Abrir Conexión"**

3. **Selecciona "FTP (File Transfer Protocol)"** en el menú desplegable

4. **Ingresa los datos**:
   - **Servidor**: `ftp.tudominio.com`
   - **Usuario**: Tu usuario FTP
   - **Contraseña**: Tu contraseña FTP
   - **Puerto**: `21`

5. **Haz clic en "Conectar"**

#### Opción C: Línea de Comandos (Terminal)

```bash
# Navega a la carpeta dist
cd dist

# Conecta por FTP (reemplaza con tus datos)
ftp ftp.tudominio.com

# Ingresa usuario y contraseña cuando se solicite
# Luego navega al directorio de destino
cd public_html

# Sube todos los archivos
mput *
```

### Paso 3: Navegar al Directorio Correcto

Una vez conectado, navega al directorio donde debe estar tu sitio web:

**Directorio común según el hosting:**
- `/public_html/` (cPanel, Hostinger, etc.)
- `/www/` (algunos servidores)
- `/htdocs/` (algunos servidores)
- `/httpdocs/` (Plesk)
- `/` (raíz del servidor)

**En FileZilla:**
- El panel derecho muestra el servidor remoto
- Navega haciendo doble clic en las carpetas
- O escribe la ruta en la barra de direcciones

### Paso 4: Subir los Archivos

#### Con FileZilla:

1. **Panel izquierdo**: Navega a tu carpeta `dist/` local
2. **Panel derecho**: Navega al directorio de destino en el servidor (ej: `/public_html/`)
3. **Selecciona todos los archivos** en el panel izquierdo:
   - Selecciona `index.html`
   - Selecciona la carpeta `assets/` completa
   - O selecciona todo con `Cmd+A` (Mac) / `Ctrl+A` (Windows)
4. **Arrastra y suelta** los archivos del panel izquierdo al derecho
   - O haz clic derecho → "Subir"
5. **Espera a que termine la transferencia** (verás el progreso en la parte inferior)

#### Con Cyberduck:

1. **Navega al directorio de destino** en el servidor
2. **Abre tu carpeta `dist/`** en Finder (Mac) o Explorador (Windows)
3. **Arrastra y suelta** todos los archivos de `dist/` a la ventana de Cyberduck
4. **Espera a que termine la transferencia**

### Paso 5: Verificar la Subida

1. **Verifica que todos los archivos se subieron**:
   - `index.html` debe estar en el directorio raíz
   - La carpeta `assets/` debe estar presente con todos sus archivos

2. **Verifica los permisos** (si es necesario):
   - `index.html`: `644` o `755`
   - Archivos en `assets/`: `644`
   - Carpeta `assets/`: `755`

3. **Abre tu sitio web** en el navegador:
   - `http://tudominio.com`
   - O `https://tudominio.com` si tienes SSL

### Paso 6: Configurar el Servidor (Si es Necesario)

Si tu sitio usa rutas de React Router, necesitas configurar el servidor para que redirija todas las rutas a `index.html`.

#### Para Apache (.htaccess)

Crea un archivo `.htaccess` en el directorio raíz del servidor (junto a `index.html`) con este contenido:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**Sube este archivo por FTP** al mismo directorio donde está `index.html`.

#### Para Nginx

Si tienes acceso a la configuración de Nginx, agrega:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

### ⚠️ Notas Importantes

1. **Mantén la estructura de carpetas**: La carpeta `assets/` debe estar al mismo nivel que `index.html`

2. **No subas la carpeta `dist/`**: Sube el **contenido** de `dist/`, no la carpeta completa
   - ✅ Correcto: `public_html/index.html` y `public_html/assets/`
   - ❌ Incorrecto: `public_html/dist/index.html`

3. **Sobrescribe archivos antiguos**: Si ya tienes archivos en el servidor, sobrescríbelos con los nuevos

4. **Verifica las rutas**: Asegúrate de que el servidor esté configurado para servir desde el directorio correcto

5. **Limpia la caché**: Después de subir, limpia la caché del navegador (`Cmd+Shift+R` en Mac, `Ctrl+Shift+R` en Windows)

### 🔧 Solución de Problemas FTP

#### Error: "No se puede conectar al servidor"

- Verifica que la dirección del servidor sea correcta
- Verifica que el puerto sea correcto (generalmente `21` para FTP, `22` para SFTP)
- Verifica tu conexión a internet
- Verifica que el firewall no esté bloqueando la conexión

#### Error: "Usuario o contraseña incorrectos"

- Verifica que el usuario y contraseña sean correctos
- Algunos servidores requieren el usuario completo: `usuario@dominio.com`

#### Los archivos no se cargan en el navegador

- Verifica que subiste todos los archivos (incluyendo la carpeta `assets/`)
- Verifica que la estructura de carpetas sea correcta
- Verifica los permisos de los archivos
- Verifica que el servidor esté configurado para servir archivos estáticos

#### Las rutas de React no funcionan

- Asegúrate de tener el archivo `.htaccess` configurado (para Apache)
- O configura el servidor para redirigir todas las rutas a `index.html`

## ⚙️ Configuración Importante

### Rutas Relativas

El proyecto está configurado con rutas relativas (`base: './'`). Esto significa:

- ✅ Funciona en subdirectorios (ej: `https://dominio.com/subcarpeta/`)
- ✅ No requiere configuración especial del servidor para rutas base
- ✅ Los assets se cargan correctamente desde cualquier ubicación

## 🐛 Solución de Problemas

### Error: "Failed to load resource: net::ERR_FAILED" o "CORS policy: Cross origin requests"

**Causa**: Estás intentando abrir el HTML directamente desde el sistema de archivos (`file://`) sin un servidor HTTP.

**Solución**: 
1. **NO abras el archivo directamente** desde el explorador de archivos
2. Usa un servidor HTTP:
   ```bash
   # Opción más fácil con Python
   cd dist
   python3 -m http.server 8000
   ```
3. Abre en tu navegador: `http://localhost:8000`

**Nota**: Este error es normal y esperado cuando intentas abrir archivos con módulos ES6 directamente. Los navegadores bloquean esto por seguridad.

### Las rutas no funcionan al recargar la página

**Causa**: El servidor no está configurado para redirigir todas las rutas a `index.html`.

**Solución**: Configura tu servidor para usar "fallback" a `index.html` (ver ejemplos de Nginx/Apache arriba).

### Los assets no se cargan

**Causa**: Rutas incorrectas o servidor mal configurado.

**Solución**: 
- Asegúrate de servir desde la carpeta `dist/` completa
- Verifica que todos los archivos en `dist/assets/` estén presentes
- Usa un servidor HTTP (no `file://`)

## 📝 Comandos Rápidos

```bash
# Si tienes acceso al proyecto con Node.js/Yarn
yarn preview          # Previsualizar build (http://localhost:4173) ⭐ RECOMENDADO
yarn serve            # Servidor HTTP simple con Python (http://localhost:8000)

# Con Python (más simple, no requiere Node.js)
cd dist
python3 -m http.server 8000    # Servidor en http://localhost:8000

# Con Node.js http-server
cd dist
http-server -p 8000             # Servidor en http://localhost:8000
```

**⚠️ Recuerda**: **SIEMPRE usa un servidor HTTP** para ver el resultado. NO abras el HTML directamente desde el sistema de archivos.

## 📚 Recursos Adicionales

- [Documentación de Vite](https://vitejs.dev/guide/static-deploy.html)
- [Guía de despliegue de React](https://react.dev/learn/start-a-new-react-project#production-builds)

---

**¿Necesitas ayuda?** Revisa el README.md principal o consulta la documentación de Vite.

*Última actualización: 2025*
