import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx"

export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
    description:
      "The foundation of every website. Provides the structure and semantic layout of web applications.",
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
    description:
      "Styles and designs websites with responsive layouts, animations, and modern user interfaces.",
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
    description:
      "The programming language of the web. Adds interactivity, logic, and dynamic behavior to applications.",
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
    description:
      "Utility-first CSS framework for rapidly building responsive and modern user interfaces.",
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
    description:
      "Component-based frontend library used to create interactive and scalable web applications.",
  },
  {
    name: "Redux",
    Image: "/redux.png",
    width: 80,
    height: 80,
    description:
      "State management solution for handling complex application data across multiple components.",
  },
  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
    description:
      "A strongly typed version of JavaScript that improves code quality, maintainability, and developer productivity.",
  },
  {
    name: "Next.js",
    Image: "/next.png",
    width: 80,
    height: 80,
    description:
      "Full-stack React framework with server components, API routes, SEO optimization, and high performance.",
  },
  {
    name: "Framer Motion",
    Image: "/framer.png",
    width: 80,
    height: 80,
    description:
      "Animation library for React used to create smooth transitions, gestures, and cinematic user experiences.",
  },
  {
    name: "Stripe Payment",
    Image: "/stripe.webp",
    width: 80,
    height: 80,
    description:
      "Secure payment processing platform for subscriptions, one-time purchases, and SaaS billing systems.",
  },
  {
    name: "Node.js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
    description:
      "JavaScript runtime used to build scalable backend services, APIs, and server-side applications.",
  },
  {
    name: "MongoDB",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
    description:
      "NoSQL database designed for flexible schemas, rapid development, and scalable data storage.",
  },
  {
    name: "Prisma",
    Image: "/prisma.png",
    width: 80,
    height: 80,
    description:
      "Type-safe ORM that makes working with databases simple, fast, and developer-friendly.",
  },
  {
    name: "Google Drive API",
    Image: "/google-drive.png",
    width: 80,
    height: 80,
    description:
      "Integrates cloud storage directly into applications for file management, uploads, and automation.",
  },
  {
    name: "YouTube API",
    Image: "/youtube.png",
    width: 80,
    height: 80,
    description:
      "Access YouTube videos, channels, playlists, and search functionality directly inside applications.",
  },
  {
    name: "Firebase",
    Image: "/firebase.png",
    width: 80,
    height: 80,
    description:
      "Backend platform providing authentication, databases, storage, analytics, and hosting.",
  },
  {
    name: "OpenAI",
    Image: "/openai.png",
    width: 80,
    height: 80,
    description:
      "AI platform used to power intelligent assistants, content generation, search, and automation.",
  },
  {
    name: "Flutter",
    Image: "/flutter.png",
    width: 80,
    height: 80,
    description:
      "Cross-platform framework for building mobile, desktop, and web applications from a single codebase.",
  },
  {
    name: "GitHub",
    Image: "/github.png",
    width: 80,
    height: 80,
    description:
      "Version control and collaboration platform used to manage source code and software projects.",
  },
  {
    name: "Sanity CMS",
    Image: "/sanity.png",
    width: 80,
    height: 80,
    description:
      "Headless CMS that provides structured content management with real-time collaboration.",
  },
  {
    name: "Cloudinary",
    Image: "/cloudinary.png",
    width: 80,
    height: 80,
    description:
      "Cloud-based media management platform for image optimization, video delivery, and transformations.",
  },
]

export const Socials = [
  {
    name: "Github",
    src: "/github.png",
    link: "https://github.com/knjprojects",
  },
  {
    name: "LinkTree",
    src: "/linktree.svg",
    link: "https://linktr.ee/joshuabridgemohan",
  },
]

export const Projects = [
  {
    title: "Modern Nextjs Website Showcasing Beats Headphones",
    text:
      "A stylish website displaying Beats headphones and accessories.",
    src: "/beats.png",
    link: "https://mart-joshthereactdev-gmailcom.vercel.app/",
  },
  {
    title: "Restaurant Website",
    text:
      "A cozy Trinidad-style restaurant site with categorized dishes.",
    src: "/restaurant.png",
    link: "https://restaurant-joshthereactdev-gmailcom.vercel.app/",
  },
  {
    title: "Main Portfolio Website",
    text: "My live portfolio showcasing my design and engineering skills.",
    src: "/WebPortfolio.png",
    link: "https://web-portfolio-joshthereactdev-gmailcom.vercel.app/",
  },
  {
    title: "Car Rental Website",
    text: "A fully custom car rental UI built from scratch.",
    src: "/Cars.png",
    link: "https://carrentalhub-r0lzpmrjt-joshthereactdev-gmailcom.vercel.app/",
  },
]

export const NavLinks = [
  { name: "/", icon: RxHome, link: "/" },
  { name: "/my-skills", icon: RxPerson, link: "/my-skills" },
  { name: "/my-projects", icon: RxDashboard, link: "/my-projects" },
  { name: "/contact-me", icon: RxClipboard, link: "/contact-me" },
]

// =========================
// BASE THEME SYSTEM
// =========================

// =========================
// TYPES
// =========================

/*export type ThemeName = "forest" | "cloud" | "cosmic"

export type ThemeTokens = {
  card: string
  button: string
  glass: string
  input: string
  textarea: string
  select: string
  dropzone: string
  uploadButton: string
  hover: string
}

// =========================
// BASE DESIGN SYSTEM (shared rules)
// =========================

const base = {
  hover:
    "transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1",

  glass:
    "backdrop-blur-md backdrop-saturate-150 border border-white/10 shadow-lg shadow-black/20",

  input:
    "w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white outline-none focus:border-purple-400/40",

  textarea:
    "w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white outline-none resize-none focus:border-purple-400/40",

  select:
    "w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white outline-none",

  dropzone:
    "flex flex-col items-center justify-center h-32 rounded-xl border-2 border-dashed border-white/20 bg-white/5 hover:bg-white/10 transition-all cursor-pointer",

  uploadButton:
    "w-full p-3 rounded-xl font-medium transition-all duration-300",
}

// =========================
// THEMES (visual modes)
// =========================

export const theme: Record<ThemeName, ThemeTokens> = {
  forest: {
    card:
      "rounded-2xl border border-emerald-500/20 bg-emerald-950/40",
    button:
      "px-4 py-2 rounded-xl bg-emerald-600/20 text-emerald-100 hover:bg-emerald-600/30",
    glass: base.glass,
    input: base.input,
    textarea: base.textarea,
    select: base.select,
    dropzone: base.dropzone,
    uploadButton:
      base.uploadButton + " bg-emerald-600 hover:bg-emerald-500",
    hover: base.hover,
  },

  cloud: {
    card:
      "rounded-2xl border border-white/20 bg-white/40",
    button:
      "px-4 py-2 rounded-xl bg-white/60 text-slate-800 hover:bg-white/80",
    glass: base.glass,
    input: base.input,
    textarea: base.textarea,
    select: base.select,
    dropzone: base.dropzone,
    uploadButton:
      base.uploadButton + " bg-slate-700 hover:bg-slate-600",
    hover: base.hover,
  },

  cosmic: {
    card:
      "rounded-2xl border border-purple-500/20 bg-black/40",
    button:
      "px-4 py-2 rounded-xl bg-purple-600/30 text-white hover:bg-purple-600/50",
    glass: base.glass,
    input: base.input,
    textarea: base.textarea,
    select: base.select,
    dropzone: base.dropzone,
    uploadButton:
      base.uploadButton + " bg-purple-600 hover:bg-purple-500",
    hover: base.hover,
  },
}
*/

export const theme = {
  // BASE GLASS CARD (single source of truth)
  card: `
    rounded-2xl
    border
    border-white/10
    bg-white/5
    backdrop-blur-md
    transition-all
    duration-300
  `,

  // BUTTON
  button: `
    rounded-xl
    px-4
    py-2
    bg-purple-500/20
    hover:bg-purple-500/30
    transition-all
    duration-300
  `,

  // REPO CARD = BASE CARD + STYLE
  repoCard: `
    rounded-2xl
    border
    border-white/10
    bg-white/5
    backdrop-blur-md
    shadow-lg
    shadow-cyan-500/10
    p-4
    transition-all
    duration-300
  `,
    glass: `
    bg-white/5
    backdrop-blur-md
    backdrop-saturate-150
    border-white/10
    shadow-lg
    shadow-black/20
  `,

  glassHover: `
    hover:bg-white/10
    hover:border-white/20
    hover:shadow-purple-500/20
    transition-all
    duration-300
  `,

  // HOVER SYSTEM (reusable everywhere)
  hoverLift: `
    cursor-pointer
    hover:scale-[1.02]
    hover:-translate-y-1
    hover:border-purple-400/30
    hover:shadow-purple-500/20
  `,

  // TEXT HELPERS (optional but useful later)
  title: `
    text-white
    font-semibold
  `,

  subtitle: `
    text-gray-400
    text-sm
  `,
  // ✨ RESPONSIVE DISPLAY TEXT SYSTEM
  display: {
    h1: `
      text-2xl
      sm:text-3xl
      md:text-4xl
      lg:text-5xl
      font-bold
      tracking-tight
    `,

    h2: `
      text-xl
      sm:text-2xl
      md:text-3xl
      font-semibold
      tracking-tight
    `,

    h3: `
      text-lg
      sm:text-xl
      md:text-2xl
      font-medium
    `,

    body: `
      text-sm
      sm:text-base
      md:text-lg
      text-gray-300
    `,

    small: `
      text-xs
      sm:text-sm
      text-gray-400
    `,
  },
};