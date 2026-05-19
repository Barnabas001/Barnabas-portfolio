import { type Project, type Experience, type NavItem } from "../types";

export const personalInfo = {
  name: "Barnabas Olayinka Affonshike",
  title: "Frontend Developer",
  subtitle: "Building the future, one commit at a time",
  email: "barnabasolayinka@gmail.com",
  github: "https://github.com/Barnabas001",
  linkedin: "https://www.linkedin.com/in/barnabas-olayinka-affonshike/",
  location: "Ibadan, Nigeria",
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Barnabas Homes",
    description:
      "Barnabas Homes solves the frustrating house-hunting experience in Southwest Nigeria.",
    longDescription:
      "Barnabas Homes is a web application designed to simplify the house-hunting process in Southwest Nigeria. It provides users with a comprehensive platform to search for properties, view detailed listings, and connect with landlords or real estate agents. The application features a user-friendly interface, advanced search filters, and real-time updates on property availability. By leveraging modern technologies, Barnabas Homes aims to make finding the perfect home easier and more efficient for users in the region.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Barnabas001/barnabas-homes",
    live: "https://barnabas-homes.vercel.app/",
    featured: true,
    category: "frontend",
  },
  {
    id: "2",
    title: "E-commerce Product Page",
    description: " E-commerce product page challenge on Frontend Mentor",
    longDescription:
      "This project is a solution to the E-commerce product page challenge on Frontend Mentor. It features a responsive design that adapts seamlessly to different screen sizes, providing an optimal user experience across devices. The application is built using React and TypeScript, ensuring a robust and maintainable codebase. Tailwind CSS is utilized for styling, allowing for rapid development and a visually appealing interface. The product page includes interactive elements such as image galleries, product details, and a shopping cart functionality, demonstrating proficiency in frontend development and user interface design.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Barnabas001/ecommerce-product-page",
    live: "https://ecommerce-product-page-lovat-nine.vercel.app/#",
    featured: true,
    category: "frontend",
  },
  {
    id: "3",
    title: "Slingshot Studios",
    description: "Photo Portfolio Website for a Photography Studio in Nigeria.",
    longDescription:
      "Slingshot Studios is a web application designed to showcase the portfolio of a photography studio. It provides users with an elegant and intuitive interface to explore the studio's work, including galleries of photos, information about the photographers, and contact details for booking sessions. The application features responsive design, allowing users to enjoy the content on various devices, and incorporates modern web technologies to ensure a seamless browsing experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Barnabas001/slingshoot-web",
    live: "https://slingshotstudios.com.ng/",
    featured: true,
    category: "frontend",
  },
  {
    id: "4",
    title: "Frankdoff 360 Computers ",
    description:
      "Business website for a Ibadan-based computer and tech hardware dealer",
    longDescription:
      "The website is for Frankdoff 360 Computers, a tech hardware dealer in Ibadan, Nigeria that sells laptops, desktops, printers, photocopiers, accessories, toner cartridges, and office equipment to individuals and businesses.",
    tech: ["REACT.JS", "TailwindCSS", "TYPESCRIPT"],
    github: "https://github.com/Barnabas001/slingshoot-web",
    live: "https://frankdoff.vercel.app/",
    featured: true,
    category: "frontend",
  },
  {
    id: "5",
    title: "Luna Lashes & Brows",
    description:
      "Modern Shopify beauty store built for a lashes and beauty brand using Shopify Dawn theme.",
    longDescription:
      "Luna Lashes & Brows is a Shopify ecommerce store developed for a beauty brand in the lashes and brows industry. The project involved customizing Shopify's Dawn theme to create a clean, premium, and responsive shopping experience inspired by a reference beauty website. Responsibilities included homepage customization, navigation setup, featured product sections, responsive optimization, branding improvements, SEO-friendly content structuring, and Shopify section customization using Liquid.",
    tech: [
      "Shopify",
      "Shopify Liquid",
      "Dawn Theme",
      "CSS",
      "JavaScript",
      "SEO",
    ],
    github: "",
    live: "",
    featured: true,
    category: "shopify",
  },
];

export const skills = {
  Languages: ["JavaScript", "TypeScript", "HTML5", "CSS3"],

  Frontend: [
    "React",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "Responsive Web Design",
  ],

  Shopify: [
    "Shopify",
    "Shopify Liquid",
    "Dawn Theme Customization",
    "Shopify Store Setup",
    "Ecommerce UI Customization",
  ],

  Marketing: [
    "SEO Content Writing",
    "AI-Assisted Content Workflows",
    "Metricool",
  ],

  Tools: ["Git", "GitHub", "VS Code", "Canva"],
};

export const experiences: Experience[] = [
  {
    company: "NOREX MEDIA SOLUTIONS ",
    role: "Frontend & Shopify Developer",
    period: "2025 — 2026",
    description: [
      "Served as the in-house developer managing web development, Shopify customization, and digital content operations",
      "Customized Shopify storefronts and ecommerce experiences using Shopify Liquid and Dawn theme",
      "Developed responsive user interfaces using React.js, TypeScript, and Tailwind CSS",
      "Managed AI-assisted SEO content publishing workflows for beauty brands",
      "Handled social media scheduling and analytics using Metricool",
      "Collaborated with creative and marketing teams to improve brand visibility and digital operations",
    ],
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shopify",
      "Shopify Liquid",
      "Metricool",
    ],
  },
  {
    company: "DE Technology",
    role: "Frontend Developer",
    period: "2024 — 2025",
    description: [
      "Built and maintained features for a web application serving users",
      "Improved performance by 40% through code splitting and lazy loading",
    ],
    tech: ["React", "Next.js", "TypeScript"],
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "2022 — Present",
    description: [
      "Built 15+ client websites from scratch using modern web technologies",
      "Managed full project lifecycle from requirements to deployment",
      "Maintained ongoing client relationships and provided technical support",
    ],
    tech: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScrit"],
  },
];
