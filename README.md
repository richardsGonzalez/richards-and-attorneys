# Richards & Attorneys - Law Firm Website

A modern, responsive law firm website built with Next.js 14, TypeScript, and Tailwind CSS. This professional website showcases legal services with a clean, accessible design optimized for client engagement.

## 🚀 Features

- **Modern Design**: Clean, professional interface with responsive layout
- **Performance Optimized**: Built with Next.js 14 for optimal loading speeds
- **Accessible**: WCAG compliant design with proper semantic HTML
- **Interactive Components**: Smooth animations and user-friendly navigation
- **Contact Integration**: Easy-to-use contact forms and information sections
- **SEO Optimized**: Proper meta tags and structured data for search engines

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) primitives
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📁 Project Structure

```
├── app/                    # Next.js 14 app directory
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── about-section.tsx
│   ├── contact-section.tsx
│   ├── experience-section.tsx
│   ├── hero-section.tsx
│   └── navigation.tsx
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Additional stylesheets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd richards-and-attorneys
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## 🎨 Styling

The project uses Tailwind CSS with a custom design system:

- **CSS Variables**: Defined in `app/globals.css` for consistent theming
- **Component Styling**: Utility-first approach with Tailwind classes
- **Dark/Light Mode**: CSS variables support theme switching
- **Responsive Design**: Mobile-first responsive breakpoints

## 🚀 Deployment

The website is automatically deployed on Vercel:

**Live Site**: [https://richards-and-attorneys.vercel.app](https://richards-and-attorneys.vercel.app)

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

## 🔧 Configuration

### Tailwind Configuration

The project includes custom Tailwind configuration in `tailwind.config.ts` with:
- Extended color palette
- Custom typography
- Component-specific utilities

### Next.js Configuration

See `next.config.mjs` for:
- Build optimizations
- Image optimization settings
- Custom webpack configurations

## 📱 Components

Key components include:

- **Hero Section**: Eye-catching landing area with call-to-action
- **About Section**: Firm overview and values
- **Experience Section**: Legal expertise and practice areas
- **Contact Section**: Contact information and forms
- **Navigation**: Responsive navigation with mobile menu

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
