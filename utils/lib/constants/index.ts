import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx"


export const SkillData = [
  { name: "Html 5", Image: "/html.png", width: 80, height: 80 },
  { name: "Css", Image: "/css.png", width: 80, height: 80 },
  { name: "JavaScript", Image: "/js.png", width: 65, height: 65 },
  { name: "Tailwind Css", Image: "/tailwind.png", width: 80, height: 80 },
  { name: "React", Image: "/react.png", width: 80, height: 80 },
  { name: "Redux", Image: "/redux.png", width: 80, height: 80 },
  { name: "TypeScript", Image: "/ts.png", width: 80, height: 80 },
  { name: "Next js 13", Image: "/next.png", width: 80, height: 80 },
  { name: "Framer Motion", Image: "/framer.png", width: 80, height: 80 },
  { name: "Stripe Payment", Image: "/stripe.webp", width: 80, height: 80 },
  { name: "Node js", Image: "/node-js.png", width: 80, height: 80 },
  { name: "Mongo db", Image: "/mongodb.png", width: 40, height: 40 },
]

export const Socials = [
  {
    name: "Github",
    src: "/github.svg",
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

export type ThemeName = "forest" | "cloud" | "cosmic"

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
