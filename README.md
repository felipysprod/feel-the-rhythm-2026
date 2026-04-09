# Felipys Editor Portfolio

A professional, high-performance portfolio website for **Felipys Editor**, a Content Editor and Motion Designer. This application is built with modern web technologies to showcase video editing work, motion graphics, and vertical content with a focus on high retention and cinematic aesthetics.

## 🚀 Features

- **Bilingual Support**: Full English and Portuguese translations with a seamless toggle.
- **Video Showcases**: Integrated YouTube player for long-form content and Instagram links for Shorts/Reels.
- **Modern UI/UX**: Sleek dark theme with custom "Poppins" typography, noise overlays, and smooth Framer Motion animations.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Performance**: Built with Vite for lightning-fast load times and optimized asset delivery.
- **Docker Ready**: Includes multi-stage Dockerfile and Nginx configuration for easy deployment to any VPS (optimized for Easypanel).

## 🛠️ Tech Stack

- **Framework**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📦 Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/felipys-portfolio.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 🐳 Docker Deployment

The project is configured for production deployment using Docker. It uses a multi-stage build (Node.js for building and Nginx for serving) to ensure a small image size and high performance.

The application serves on **port 3000** by default.

```bash
# Build the image
docker build -t felipys-portfolio .

# Run the container
docker run -p 3000:3000 felipys-portfolio
```

## 📄 License

© 2026 FELIPYS EDITOR — All rights reserved.

---
Made with passion for high-quality content creation.