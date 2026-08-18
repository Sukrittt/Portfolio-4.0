export const PROJECTS = [
  {
    title: 'Agent-Native Workflows',
    meta: 'Claude Code · Agent orchestration · Ongoing',
    blurb:
      'Prototyping full-stack products end to end with Claude Code — spec to shipped feature, with fallbacks and validation layered in before it ships.',
    tags: ['Claude Code', 'Agent orchestration', 'LLM integration'],
    code: 'https://github.com/Sukrittt',
    codeLabel: 'Explore ↗',
    media: { type: 'image', src: '/projects/agentic_workflows.png' },
  },
  {
    title: 'Claspr',
    meta: 'Next.js · TypeScript · tRPC · Full-stack',
    blurb:
      'An all-in-one classroom platform — assignments, notes, and discussions in one place. Built solo, end to end.',
    tags: ['Next.js', 'TypeScript', 'tRPC', 'PostgreSQL'],
    code: 'https://github.com/Sukrittt/claspr',
    link: 'https://claspr-three.vercel.app',
    media: { type: 'video', src: '/projects/claspr.mp4' },
  },
  {
    title: 'Limetta',
    meta: 'Next.js · Personal finance · 57 GitHub stars',
    blurb:
      'Expense tracking with multiple accounts, transfers, and dues — built to replace three finance apps with one.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    code: 'https://github.com/Sukrittt/Limetta',
    link: 'https://limetta-theta.vercel.app',
    media: { type: 'image', src: '/projects/limetta.png' },
  },
  {
    title: 'Envelope',
    meta: 'Claude Code · Personal finance · Dashboard',
    blurb:
      'A fully personalized YNAB-style envelope expense dashboard — built end to end with Claude Code, tailored to how I actually budget.',
    tags: ['Claude Code', 'Personal finance', 'Dashboard'],
    code: 'https://github.com/Sukrittt/envelope',
    link: 'https://ynab-replacement.vercel.app',
    extraLinks: [
      { label: 'Mobile ↗', href: 'https://github.com/Sukrittt/ynab-mobile' },
      { label: 'APK ↓', href: 'https://github.com/Sukrittt/envelope-mobile/releases/download/Beta/envelope.apk' },
    ],
    media: { type: 'image', src: '/projects/ynab-expense.png' },
  },
  {
    title: 'Spitha Diamonds',
    meta: 'Freelance · E-commerce · Jewelry',
    blurb:
      'A brand and storefront for a diamond jewelry retailer — built as freelance client work, from product presentation to checkout.',
    tags: ['Freelance', 'E-commerce', 'Client work'],
    code: null,
    link: 'https://spitha-diamonds-copy.vercel.app',
    media: { type: 'video', src: '/projects/spitha_diamonds.mp4' },
  },
  {
    title: 'Otaku-Sphere',
    meta: 'Next.js 13 · Community platform',
    blurb:
      'An open-source hub for anime fans — watchlists, leaderboards, and polls, wrapped in a community layer.',
    tags: ['Next.js', 'TypeScript', 'Community'],
    code: 'https://github.com/Sukrittt/Otaku-Sphere',
    link: 'https://otaku-sphere-nine.vercel.app',
    media: { type: 'image', src: '/projects/otaku_sphere.webp' },
  },
  {
    title: 'Polymer Bazaar',
    meta: 'Dashboard · B2B · Client work',
    blurb:
      'A price-index dashboard for the polymer trade — market data made legible for procurement teams.',
    tags: ['Dashboard', 'Data viz', 'Client work'],
    code: null,
    link: 'https://polymerbazaar.com',
    media: { type: 'image', src: '/projects/polymer-bazaar.png', fit: 'icon' },
  },
  {
    title: 'Typournament',
    meta: 'TypeScript · Competitive typing',
    blurb:
      'Head-to-head typing tournaments for speed typists — brackets, live WPM, and leaderboards.',
    tags: ['TypeScript', 'Real-time'],
    code: 'https://github.com/Sukrittt/typournament',
    link: 'https://typournament-pi.vercel.app',
    media: { type: 'image', src: '/projects/typournament.png' },
  },
  {
    title: 'Mini-Portfolio',
    meta: 'Bento grid · Built in 3 hours',
    blurb:
      'A playful bento-grid portfolio, animated top to bottom — a speed-run in interaction design.',
    tags: ['React', 'Motion'],
    code: 'https://github.com/Sukrittt/Mini-Portfolio',
    link: 'https://mini-portfolio-delta-eight.vercel.app',
    media: { type: 'video', src: '/projects/mini_portfolio.mp4' },
  },
  {
    title: 'Spotify Clone',
    meta: 'UI clone · Micro-interactions',
    blurb:
      "A pixel-close rebuild of Spotify's player — an exercise in motion, state, and audio UI.",
    tags: ['React', 'Web Audio'],
    code: 'https://github.com/Sukrittt',
    link: 'https://spotify-pixel-perfect.vercel.app',
    media: { type: 'image', src: '/projects/spotify_clone.png' },
  },
];

export const TAGLINE_WORDS = [
  'Claude Code',
  'agentic workflows',
  'structured guesswork',
  'trial & error',
  'good vibes',
];

export const TOOLKIT = [
  {
    label: 'FRONTEND',
    items: [
      'React.js', 'Next.js (SSR/ISR)', 'TypeScript', 'JavaScript (ES6+)', 'React Native',
      'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI', 'Framer Motion', 'GSAP', 'Redux',
      'Jotai', 'Webpack', 'Three.js', 'Web Components',
    ],
  },
  {
    label: 'UI & DESIGN SYSTEMS',
    items: [
      'Responsive Design', 'WCAG Compliance', 'Cross-browser Testing', 'Design Fidelity',
      'Accessibility', 'Animation', 'Component Libraries (MUI, Shadcn)',
    ],
  },
  {
    label: 'BACKEND & APIS',
    items: [
      'Node.js', 'NestJS', 'RabbitMQ', 'REST APIs', 'tRPC', 'Prisma', 'Firebase', 'Redis', 'MongoDB',
    ],
  },
  {
    label: 'TOOLS & PLATFORMS',
    items: [
      'Git', 'AWS', 'Microservices', 'Postman', 'Swagger', 'Clerk', 'Vercel', 'Netlify', 'CI/CD', 'Docker',
    ],
  },
  {
    label: 'AI & TOOLING',
    items: ['Claude Code', 'Codex', 'OpenCode', 'OpenClaw', 'Antigravity'],
  },
];
