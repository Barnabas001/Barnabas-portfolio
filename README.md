# 🚀 Personal Portfolio — React + TypeScript + Tailwind

A futuristic, production-grade developer portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion. Features scroll-triggered animations, a typewriter effect, animated timeline, and a fully validated contact form.

![Portfolio Preview](https://barnabas-portfolio-five.vercel.app/)

---

## ✨ Features

- **Futuristic / Cyberpunk Design** — custom dark theme with electric blue, neon purple, and matrix green accents
- **Smooth Animations** — page-load stagger, scroll-triggered reveals, and scroll-linked timeline via Framer Motion
- **Typewriter Effect** — custom `useTypewriter` hook cycles through your roles
- **Responsive** — mobile-first layout, collapsible nav menu, stacked grids on small screens
- **Project Filtering** — filter projects by category with animated tab switching and `AnimatePresence`
- **Animated Timeline** — experience section with a scroll-linked line that draws itself as you scroll
- **Contact Form** — controlled inputs, floating labels, real-time validation, and success/error states
- **Custom Scrollbar** — themed to match the cyber aesthetic
- **Performance** — Vite build, `useMemo` for filtered lists, `once: true` on all scroll triggers

---

## 🛠️ Tech Stack

| Tool                                            | Purpose                 |
| ----------------------------------------------- | ----------------------- |
| [React 18](https://react.dev)                   | UI library              |
| [TypeScript](https://typescriptlang.org)        | Type safety             |
| [Tailwind CSS v3](https://tailwindcss.com)      | Utility-first styling   |
| [Framer Motion](https://www.framer.com/motion/) | Animations              |
| [Lucide React](https://lucide.dev)              | Icons                   |
| [Vite](https://vitejs.dev)                      | Build tool & dev server |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Fixed nav with scroll detection & mobile menu
│   │   └── Footer.tsx          # Footer with social links & back-to-top
│   ├── sections/
│   │   ├── Hero.tsx            # Landing section with typewriter & stagger animations
│   │   ├── About.tsx           # Two-column layout with spinning profile image ring
│   │   ├── Skills.tsx          # Categorized skill cards with per-item hover glow
│   │   ├── Projects.tsx        # Filterable project grid with AnimatePresence
│   │   ├── Experience.tsx      # Scroll-linked animated timeline
│   │   └── Contact.tsx         # Validated contact form with floating labels
│   └── ui/
│       └── SectionHeader.tsx   # Reusable animated section heading
├── data/
│   └── portfolio.ts            # All your content — edit this to update the site
├── hooks/
│   └── useTypewriter.ts        # Custom hook for typewriter cycling effect
├── types/
│   └── index.ts                # Shared TypeScript types
├── App.tsx                     # Root component
└── main.tsx                    # React entry point
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+ — [download here](https://nodejs.org)
- npm v9+

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/my-portfolio.git
cd my-portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ✏️ Customization

All your personal content lives in one file — **`src/data/portfolio.ts`**. You never need to touch component files just to update your info.

### 1. Personal Info

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Fronted Developer",
  subtitle: "Building the future, one commit at a time.",
  email: "barnabasolayinka@gmail.com",
  github: "https://github.com/Barnabas001",
  linkedin: "https://www.linkedin.com/in/barnabas-olayinka-affonshike/",
  location: "Ibadan, Nigeria",
};
```

### 2. Projects

```typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "My Project",
    description: "Short description shown on the card.",
    longDescription: "Longer description shown on hover.",
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/yourusername/project",
    live: "https://myproject.com",
    featured: true,
    category: "fullstack", // "fullstack" | "frontend" | "backend"
  },
];
```

### 3. Skills

```typescript
export const skills = {
  Languages: ["TypeScript", "Python", "SQL"],
  Frontend: ["React", "Next.js", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "PostgreSQL"],
  Tools: ["Git", "Docker", "AWS"],
};
```

### 4. Experience

```typescript
export const experiences: Experience[] = [
  {
    company: "Company Name",
    role: "Frontend Developer",
    period: "2024 — Present",
    description: [
      "What you did and the impact it had",
      "Quantified achievements where possible",
    ],
    tech: ["React", "TypeScript"],
  },
];
```

### 5. Profile Photo

In `About.tsx`, replace the image import with your own photo:

```tsx
import yourPhoto from "../../assets/your-photo.jpg";

// Then in the JSX:
<img
  src={yourPhoto}
  alt="Your Name"
  className="w-full h-full object-cover object-top"
/>;
```

Adjust `object-top` to `object-center` or `object-[top_20%]` to control the crop position.

### 6. Color Theme

Edit `tailwind.config.js` to change the color palette:

```javascript
colors: {
  'cyber-black':  '#050510',  // Background
  'cyber-blue':   '#00D4FF',  // Primary accent
  'cyber-purple': '#BD00FF',  // Secondary accent
  'cyber-green':  '#00FF9F',  // Highlight
}
```

---

## 📬 Setting Up the Contact Form

The form currently simulates a submission. To make it actually send emails, integrate one of these services:

### Option A — EmailJS (no backend needed)

```bash
npm install @emailjs/browser
```

```typescript
import emailjs from "@emailjs/browser";

const handleSubmit = async () => {
  await emailjs.send(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    { name: form.name, email: form.email, message: form.message },
    "YOUR_PUBLIC_KEY",
  );
};
```

### Option B — Formspree (simplest)

Replace the form's submit handler with a fetch to your Formspree endpoint:

```typescript
const res = await fetch("https://formspree.io/f/YOUR_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
```

---

## 🏗️ Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder. Preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deployment

### Vercel (Recommended — free)

```bash
npm install -g vercel
vercel
```

Follow the prompts. Your site will be live at `https://your-portfolio.vercel.app`.

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages

```bash
npm install -D gh-pages
```

Add to `package.json`:

```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

```bash
npm run build && npm run deploy
```

---

## 🧠 Key Concepts Used

| Concept                       | Where                                               |
| ----------------------------- | --------------------------------------------------- |
| `useState`                    | Navbar scroll, mobile menu, form state, hover state |
| `useEffect`                   | Scroll event listener with cleanup                  |
| `useRef` + `useInView`        | Scroll-triggered section animations                 |
| `useScroll` + `useTransform`  | Timeline line draws with scroll                     |
| `useSpring`                   | Physics-based smoothing on scroll values            |
| `useMemo`                     | Memoized filtered project list                      |
| Custom hooks                  | `useTypewriter` — reusable stateful logic           |
| Framer Motion `variants`      | Stagger animations with parent/child system         |
| `AnimatePresence`             | Exit animations when projects are filtered out      |
| `layoutId`                    | Shared layout animation on filter tab indicator     |
| TypeScript types & interfaces | `Project`, `Experience`, `NavItem`, form state      |
| `keyof` operator              | Type-safe form field updates                        |
| Controlled inputs             | Full form field management via React state          |
| Responsive design             | `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`         |

---

## 📄 License

MIT — feel free to use this as a template for your own portfolio. A credit or star is always appreciated! ⭐

---

## 🙏 Inspiration

- [Brittany Chiang](https://brittanychiang.com) — numbered nav links, project card layout
- [Josh W. Comeau](https://joshwcomeau.com) — animation philosophy
- [Lee Robinson](https://leerob.io) — clean data layer separation
