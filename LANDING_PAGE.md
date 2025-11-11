# Zona² Landing Page

## 🎉 Overview

This is a beautiful, modern landing page for the Zona² running platform. The website showcases the "Corre, Conecta y Gana" (Run, Connect, and Earn) concept with three main sections.

## 🎨 Design Specifications

### Color Palette
- **Background**: `#043847` (Deep teal)
- **Primary (Buttons/Modals)**: `#bde901` (Lime green)
- **Text**: `#000000` (Black)
- **White**: `#ffffff` (For contrast text on dark backgrounds)

### Logo
The Z² logo is located at `/public/assets/zona2-logo.png`

## 📱 Sections

### 1. **Inicio (Home/Hero)**
- Eye-catching hero section with animated logo
- Value proposition: "Corre, Conecta y Gana"
- Call-to-action buttons
- Statistics showcase (1000+ runners, $50K+ rewards, 15+ cities)
- Smooth animations using Framer Motion

### 2. **Acerca del Proyecto (About the Project)**
- Three feature cards:
  - **Corre en Zona 2**: Heart rate training with real-time monitoring
  - **Conecta con Corredores**: Community features and challenges
  - **Gana Dinero Real**: Monetization through running
- "How it Works" section with 3-step process
- Statistics cards showing improvements and achievements

### 3. **Pre-registro (Pre-registration)**
- Benefits of early registration:
  - Early access to the app
  - Welcome bonus (100 Z2 tokens = $50 MXN)
  - 3 months free premium plan
- Registration form with name, email, and phone fields
- Success state after form submission

## 🚀 Running the Application

### Development
```bash
yarn dev
```

### Build for Production
```bash
yarn build
```

### Preview Production Build
```bash
yarn preview
```

## 🛠️ Technologies Used

- **React 18.2** - UI framework
- **Vite 5.0** - Build tool
- **React Router DOM 6.20** - Navigation
- **Framer Motion 10.16** - Animations
- **Lucide React 0.294** - Icons
- **Tailwind CSS 3.3** - Utility-first CSS

## 📂 File Structure

```
Zona2-web/
├── public/
│   └── assets/
│       └── zona2-logo.png
├── src/
│   ├── screens/
│   │   └── LandingPage.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── vite.config.js
```

## ✨ Features

### Responsive Design
- Fully responsive layout that works on all devices
- Mobile-optimized navigation and forms
- Adaptive grid layouts

### Smooth Interactions
- Smooth scrolling navigation
- Animated elements on scroll (intersection observer)
- Hover effects on buttons and cards
- Form validation and success states

### Performance
- Optimized images and assets
- Lazy loading where appropriate
- Fast Vite build system

## 🎯 Key Components

### Navigation
- Fixed navbar with smooth scroll to sections
- Responsive menu for mobile devices
- Logo and brand identity

### Hero Section
- Large, impactful title with gradient text
- Animated logo mockup
- Multiple CTAs
- Social proof with statistics

### Feature Cards
- Icon-based visual communication
- Checklist of features
- Hover animations

### Pre-registration Form
- Clean, user-friendly design
- Form validation
- Success feedback
- Privacy disclaimer

### Footer
- Brand information
- Quick links
- Social media links
- Copyright notice

## 🔧 Customization

### Colors
To change colors, edit the CSS variables in `src/index.css`:

```css
:root {
  --color-bg: #043847;
  --color-primary: #bde901;
  --color-text: #000000;
  --color-white: #ffffff;
  --color-bg-light: #065666;
  --color-primary-dark: #a5cf01;
}
```

### Content
All content is in `src/screens/LandingPage.jsx` and can be easily modified.

### Images
Replace the logo at `/public/assets/zona2-logo.png` with your own.

## 📝 Next Steps

To connect this landing page to a backend:

1. **Create a pre-registration API endpoint**
2. **Set up email notifications** (e.g., using SendGrid, Mailgun)
3. **Add analytics** (Google Analytics, Mixpanel)
4. **Implement form validation** on the backend
5. **Store pre-registrations** in a database (MongoDB, PostgreSQL)

### Example API Integration

```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  
  try {
    const response = await fetch('/api/pre-register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    
    if (response.ok) {
      setFormSubmitted(true)
      // Send confirmation email
      // Track conversion event
    }
  } catch (error) {
    console.error('Error:', error)
  }
}
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build
yarn build

# Deploy dist/ folder
```

### Other Platforms
The `dist/` folder after running `yarn build` can be deployed to any static hosting service.

## 📞 Support

For questions or issues with the landing page, please refer to the main project documentation.

---

**Zona² © 2025 - Running Experience**
*"¡Corre, Conecta y Gana!"*

