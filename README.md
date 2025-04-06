# Interactive Resume - Astro Version

This is an interactive resume built with Astro framework, React components, and Tailwind CSS. It showcases a personal portfolio with interactive elements including skill visualizations, work experience, projects, and achievements.

## Features

- 🚀 Built with Astro for fast page loads
- ⚛️ Interactive components with React
- 🎨 Styled with Tailwind CSS
- 📊 Interactive data visualizations with Recharts
- 📱 Responsive design for all devices
- 🌍 Multi-language support foundation (English with Chinese placeholder)

## Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── CyberSecuritySkills.jsx
│   │   ├── LanguageProficiency.jsx
│   │   ├── Resume.jsx
│   │   └── WordCloud.jsx
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs
└── package.json
```

## Getting Started

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Visit `http://localhost:4321` in your browser

## Building for Production

```bash
npm run build
```

This will generate the static site in the `dist/` directory.

## Deployment

The static site can be deployed to any hosting service that supports static sites, such as Netlify, Vercel, GitHub Pages, or traditional web hosting.

## Customization

- Resume data is stored in the `resumeData` object in `Resume.jsx`
- To update resume information, modify the data object
- To add Chinese language support, fill in the `zh` section of the data object

## Technologies Used

- [Astro](https://astro.build/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Recharts](https://recharts.org/)
- [Lucide Icons](https://lucide.dev/)