# 🚀 Zona² Landing Page - Quick Start

## What Was Created

A beautiful, modern landing page for Zona² with:

✅ **Three Main Sections:**
1. **Inicio** - Hero section with logo, tagline, and CTAs
2. **Acerca del Proyecto** - Features and how it works
3. **Pre-registro** - Registration form with benefits

✅ **Your Exact Color Palette:**
- Background: `#043847`
- Buttons/Modals: `#bde901`
- Text: `#000000`

✅ **Z² Logo** - Integrated throughout the site

✅ **Fully Responsive** - Works on desktop, tablet, and mobile

✅ **Smooth Animations** - Professional interactions and transitions

## 🎯 How to Run

```bash
cd /Users/rlgs/Desktop/devhood/Zona2/Zona2-web
yarn dev
```

Then open your browser to the URL shown (usually `http://localhost:5173`)

## 📝 What You'll See

### 1. Hero Section (Inicio)
- Large title: "Corre en Zona 2, Conecta con corredores y Gana dinero real"
- Two buttons: "Únete al Pre-registro" and "Conocer más"
- Statistics: 1000+ runners, $50K+ rewards, 15+ cities
- Animated Z² logo on the right

### 2. About Section (Acerca del Proyecto)
- Three feature cards explaining:
  - Heart rate training in Zone 2
  - Community and challenges
  - Real money rewards
- "How it Works" - 3 simple steps
- Statistics showcasing platform success

### 3. Pre-registration Section
- Form with:
  - Full name (required)
  - Email (required)
  - Phone (optional)
- Benefits listed:
  - Early access
  - $50 MXN welcome bonus
  - 3 months free premium

### 4. Footer
- Brand information
- Quick navigation links
- Social media links

## 🎨 Key Features

- **Fixed Navigation Bar** - Always accessible
- **Smooth Scrolling** - Click nav links to scroll to sections
- **Animated Logo** - Floating animation effect
- **Form Validation** - Required fields checked
- **Success Feedback** - Green checkmark after submission
- **Hover Effects** - Interactive buttons and cards
- **Mobile Responsive** - Adapts to all screen sizes

## 🔧 Customization

All content is in: `src/screens/LandingPage.jsx`

To change:
- **Text** - Edit strings directly in the JSX
- **Colors** - Edit CSS variables in `src/index.css`
- **Logo** - Replace `/public/assets/zona2-logo.png`
- **Stats** - Update numbers in the component

## 📱 Next Steps

### To Connect to Backend:
1. Create API endpoints for pre-registration
2. Update the `handleSubmit` function in LandingPage.jsx
3. Add email notifications
4. Store registrations in database

### To Deploy:
```bash
yarn build
```

Then deploy the `dist/` folder to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Your own server

## 🎉 You're Ready!

The landing page is complete and ready to use. Just run `yarn dev` and start accepting pre-registrations!

For detailed documentation, see `LANDING_PAGE.md`

---

**Built with ❤️ for Zona²**

