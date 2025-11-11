#!/bin/bash

# Zona² - Script de Instalación y Ejecución
# Running Experience © 2025

echo "🏃 ======================================"
echo "   Zona² - Running Experience"
echo "   ¡Corre, Conecta y Gana!"
echo "======================================== 🏃"
echo ""

# Verificar Node.js
echo "🔍 Verificando Node.js..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado."
    echo "📥 Instálalo desde: https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node --version)
echo "✅ Node.js $NODE_VERSION instalado"
echo ""

# Verificar Yarn
echo "🔍 Verificando Yarn..."
if ! command -v yarn &> /dev/null; then
    echo "⚠️  Yarn no encontrado. Instalando..."
    npm install -g yarn
    echo "✅ Yarn instalado correctamente"
else
    YARN_VERSION=$(yarn --version)
    echo "✅ Yarn $YARN_VERSION instalado"
fi
echo ""

# Instalar dependencias
echo "📦 Instalando dependencias del proyecto..."
echo "   (Esto puede tomar 1-2 minutos)"
echo ""
yarn install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ ¡Dependencias instaladas correctamente!"
    echo ""
    echo "🚀 ======================================"
    echo "   Iniciando servidor de desarrollo..."
    echo "======================================== 🚀"
    echo ""
    echo "📱 La aplicación se abrirá en:"
    echo "   http://localhost:3000"
    echo ""
    echo "💡 Tips:"
    echo "   • Presiona Ctrl+C para detener el servidor"
    echo "   • Usa el modo móvil del navegador (F12)"
    echo "   • Resolución recomendada: 390x844px"
    echo ""
    echo "🎯 Pantallas disponibles:"
    echo "   🏠 Dashboard:  http://localhost:3000/"
    echo "   🏃 Live:       http://localhost:3000/live"
    echo "   👥 Comunidad:  http://localhost:3000/community"
    echo "   💰 Gana:       http://localhost:3000/rewards"
    echo ""
    
    # Iniciar servidor
    yarn dev
else
    echo ""
    echo "❌ Error al instalar dependencias"
    echo "💡 Intenta ejecutar manualmente:"
    echo "   yarn install"
    echo "   yarn dev"
    exit 1
fi

