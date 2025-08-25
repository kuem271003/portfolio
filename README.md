# 🚀 Phương FullStack Portfolio 
<a href="https://www.facebook.com/ducati.phuong.3" target="_blank">
  <img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" />
</a> 
<a href="https://kuem271003.github.io/portfolio/" target="_blank">
  <img src="https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=About.me&logoColor=white" />
</a>

A modern, responsive portfolio website built with React.js showcasing my skills, projects, and professional experience as a Full Stack Developer.

![Portfolio Preview](https://img.shields.io/badge/React-18.0.0-blue?style=for-the-badge&logo=react)
![Responsive](https://img.shields.io/badge/Responsive-Yes-green?style=for-the-badge)
![Dark Theme](https://img.shields.io/badge/Theme-Dark-black?style=for-the-badge)

## ✨ Features

- 🎨 **Modern Design**: Clean, professional dark theme with gradient accents
- 📱 **Fully Responsive**: Optimized for all devices (Desktop, Tablet, Mobile)
- 🚀 **Fast Performance**: Built with React 18 and optimized for speed
- 🎭 **Smooth Animations**: CSS animations and hover effects
- 📧 **Contact Form**: Integrated contact form with email notifications
- 🔍 **SEO Optimized**: Proper meta tags and semantic HTML
- ♿ **Accessibility**: WCAG compliant with keyboard navigation support

## 🛠️ Tech Stack

### Frontend

- **React.js 18** - Modern React with hooks
- **CSS3** - Custom styling with responsive design
- **JavaScript ES6+** - Modern JavaScript features
- **Vite** - Fast build tool and development server

### Libraries & Tools

- **React Toastify** - Toast notifications
- **Web3Forms** - Contact form handling
- **Font Awesome** - Icon library
- **Google Fonts** - Typography (Outfit font family)

### Development Tools

- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing
- **Git** - Version control

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/portfolio-app.git
   cd portfolio-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## 📁 Project Structure

```
portfolio-app/
├── public/                 # Static assets
│   ├── vite.svg
│   └── images/
├── src/
│   ├── components/         # React components
│   │   ├── Hero/          # Hero section
│   │   ├── About/         # About section
│   │   ├── Services/      # Services section
│   │   ├── MyWork/        # Portfolio projects
│   │   └── Contact/       # Contact form
│   ├── Layout/            # Layout components
│   │   ├── Navbar/        # Navigation bar
│   │   └── Footer/        # Footer section
│   ├── assets/            # Images, icons, data
│   │   ├── images/        # Project images
│   │   ├── logo/          # Logo assets
│   │   ├── services_data.js
│   │   └── mywork_data.js
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # App entry point
│   ├── index.css          # Global styles
│   └── responsive.css     # Responsive design system
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS config
└── README.md              # This file
```

## 🎯 Key Components

### Hero Section

- Eye-catching introduction with profile image
- Call-to-action buttons
- Responsive typography and layout

### About Section

- Personal information and background
- Skills with progress bars
- Achievement highlights
- Responsive grid layout

### Services Section

- Service offerings in card format
- Hover effects and animations
- Responsive grid (3 columns → 2 → 1)

### Portfolio (MyWork)

- Project showcase with images
- Hover effects and scaling
- Responsive image grid

### Contact Section

- Contact form with validation
- Contact information display
- Email submission handling
- Success/error notifications

### Navigation

- Fixed navigation bar
- Smooth scrolling to sections
- Mobile-responsive hamburger menu
- Active section highlighting

## 📱 Responsive Design

The portfolio is built with a **mobile-first** approach and includes:

- **Breakpoints**: 1400px, 1200px, 992px, 768px, 576px, 480px, 320px
- **Flexible Grids**: Adapts from 3 columns to 1 column on mobile
- **Responsive Typography**: Font sizes scale appropriately
- **Touch-Friendly**: Optimized for mobile interactions
- **Landscape Support**: Special handling for mobile landscape orientation

### Responsive Features

- Adaptive layouts for all screen sizes
- Optimized images and media
- Mobile-friendly navigation
- Touch-optimized buttons and forms

## 🎨 Design System

### Color Palette

- **Primary**: Dark theme (#0a0a0a to #1a1a1a)
- **Accent**: Orange to Purple gradient (#DA7C25 to #B923E1)
- **Text**: White and light grays
- **Backgrounds**: Dark gradients with transparency

### Typography

- **Font Family**: Outfit (Google Fonts)
- **Headings**: 40px to 100px (responsive)
- **Body Text**: 14px to 24px (responsive)
- **Weights**: 400, 500, 600, 700, 800

### Components

- **Cards**: Glass morphism effect with borders
- **Buttons**: Gradient backgrounds with hover effects
- **Forms**: Dark theme with focus states
- **Navigation**: Fixed header with backdrop blur

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_key_here
```

### Contact Form Setup

1. Sign up at [Web3Forms](https://web3forms.com/)
2. Get your access key
3. Add it to your environment variables
4. The form will automatically send emails to your registered email

## 📊 Performance

- **Lighthouse Score**: 90+ on all metrics
- **Bundle Size**: Optimized with Vite
- **Image Optimization**: Responsive images with proper sizing
- **Lazy Loading**: Components load as needed
- **CSS Optimization**: Minified and optimized styles

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository
2. Vercel will auto-deploy on push
3. Custom domain setup available

### Netlify

1. Drag and drop the `dist` folder
2. Configure build settings
3. Set up custom domain

### GitHub Pages

1. Build the project: `npm run build`
2. Push the `dist` folder to `gh-pages` branch
3. Enable GitHub Pages in repository settings

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Phương Nguyễn**

- Full Stack Developer
- Based in Vietnam
- Passionate about creating amazing web experiences

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Vite Team** - For the fast build tool
- **Web3Forms** - For the contact form service
- **Font Awesome** - For the beautiful icons
- **Google Fonts** - For the typography

## 📞 Contact

- **Email**: [kuem271003@mail.com.com]
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [https://github.com/kuem271003]
- **Portfolio**: [Your Portfolio URL]

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ by Phương Nguyễn
