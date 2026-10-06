const BASE = import.meta.env.BASE_URL

// Screenshots are shipped as optimised WebP: full size + a small "-sm" variant for cards.
const shots = (prefix, count) =>
    Array.from({ length: count }, (_, i) => `${BASE}projects/${prefix}${i + 1}.webp`)

export const thumbOf = (src) => src.replace(/\.webp$/, "-sm.webp")

const GH = "https://github.com/starewxz/"

// Fields
//   kind       – short category label shown on cards and detail pages
//   pin        – commercial projects pinned to the top (lower = earlier)
//   text       – one/two-sentence summary for cards
//   textAbout  – case-study overview; every "\n" starts a new paragraph
//   highlights – key features / outcomes (bullet list on the detail page)
//   link       – live site (optional)    repos – source links (optional, public repos only)
const dataProjects = [
    {
        id: "collab-docs",
        name: "Collab Docs",
        emoji: "📄",
        kind: "SaaS · Real-time collaboration",
        img: shots("collab", 1),
        text: "A Notion-style workspace where teams write, comment and publish documents together in real time — with roles, version history and full-text search.",
        repos: [{ label: "Source code", url: `${GH}collab-docs` }],
        textAbout: "Collab Docs is a collaborative document platform for teams that need one place to write, discuss and publish. Documents can be nested, edited simultaneously by several people, commented on in threads and restored to earlier versions.\n" +
            "Real-time editing is built on Yjs (CRDT) over WebSockets, so concurrent changes merge without conflicts. The product is secured end to end: short-lived access tokens with rotating refresh tokens, server-side role checks (owner, admin, editor, viewer) and independent plan limits.\n" +
            "The platform is engineered for operations as well as features — PostgreSQL migrations, Redis-backed notifications, private object storage for attachments, health checks, Prometheus metrics, API documentation, Docker Compose and CI.",
        highlights: [
            "Conflict-free live co-editing with presence, powered by Yjs",
            "Nested documents, comment threads, version history and one-click restore",
            "Role-based access (owner / admin / editor / viewer) enforced on the server",
            "Publishable public pages with SEO metadata and safe rendering",
            "PostgreSQL full-text search that respects workspace permissions",
            "Private file attachments via short-lived presigned URLs",
        ],
        tech: ["Next", "React", "TypeScript", "Nest", "PostgreSQL", "TypeORM", "Redis", "MinIO", "Socket.IO", "Swagger", "Docker", "GitHub Actions"],
    },
    {
        id: "cargo-crew",
        name: "Cargo Crew",
        emoji: "🛒",
        kind: "Marketplace · Multi-vendor platform",
        img: shots("cargo", 1),
        text: "A multi-vendor marketplace platform with fixed-price and auction listings, split orders per seller, live updates and fast search.",
        repos: [{ label: "Source code", url: `${GH}vendor-marketplace` }],
        textAbout: "Cargo Crew is a high-volume, multi-vendor marketplace: independent sellers list products at a fixed price or by auction, and every checkout is split into per-seller orders with commissions applied.\n" +
            "The platform was delivered in stages — authentication and seller moderation, catalogue and search, cart and checkout, the seller-order lifecycle with cancellations and refunds, auctions, reviews, disputes and analytics — and finished with a full React frontend. It is documented as a production-minded build-out, with its known limitations written down openly.\n" +
            "A modular NestJS monolith keeps boundaries clear, while PostgreSQL, Redis and BullMQ handle data and background work, Meilisearch powers search, and Socket.IO delivers realtime events with reconnect and resync. Docker Compose, Kubernetes manifests, load tests and CI complete the delivery.",
        highlights: [
            "Fixed-price and auction listings with per-seller order splitting",
            "Seller moderation, order lifecycle, cancellations and refunds",
            "Instant catalogue search powered by Meilisearch",
            "Realtime updates with reconnect and resync",
            "Reviews, disputes and an analytics dashboard",
            "Docker, Kubernetes manifests, load tests and CI included",
        ],
        tech: ["React", "TypeScript", "Vite", "React Router", "TanStack Query", "Axios", "Tailwind", "Nest", "PostgreSQL", "TypeORM", "Redis", "Meilisearch", "Socket.IO", "Swagger", "Docker", "Kubernetes", "GitHub Actions"],
    },
    {
        id: "devpath",
        name: "DevPath",
        emoji: "🧭",
        kind: "Product · Learning platform",
        img: shots("devpath", 1),
        text: "A personal learning CRM for interview preparation: roadmap, quizzes, Kanban, spaced repetition, a SQL lab and analytics, with an extracted analytics microservice.",
        textAbout: "DevPath is a learning management product designed for one goal: preparing for Middle Full-Stack interviews in a structured, measurable way. It brings the whole preparation process into a single, Linear-style interface.\n" +
            "Learners follow a roadmap of courses and lessons, take graded quizzes, track tasks on a drag-and-drop Kanban board, drill an interview question bank, revise with spaced repetition and practise in a sandboxed SQL Lab. A real analytics dashboard turns that activity into progress insights.\n" +
            "Architecturally it starts as a modular NestJS monolith on PostgreSQL (Prisma), with Redis for caching, rate limiting and jobs. The Analytics module is deliberately extracted into its own service with its own database, fed over RabbitMQ through a transactional outbox. Everything runs self-hosted with Docker Compose and is covered by end-to-end tests, CI and architecture decision records.",
        highlights: [
            "Roadmap, courses, lessons and progress tracking",
            "Graded quiz engine, interview question bank and spaced repetition",
            "Sandboxed SQL Lab and system-design practice",
            "Drag-and-drop Kanban board and notes",
            "Analytics dashboard backed by an independent microservice",
            "Strict TypeScript, shared DTO package, e2e tests and CI",
        ],
        tech: ["React", "TypeScript", "Vite", "Tailwind", "React Router", "TanStack Query", "Zustand", "Nest", "PostgreSQL", "Redis", "RabbitMQ", "Docker", "Swagger", "GitHub Actions"],
    },
    {
        id: "stan-bookstore",
        name: "Стан — Online Bookstore",
        emoji: "📚",
        kind: "E-commerce · Trilingual bookstore",
        img: shots("stan", 1),
        text: "A full-stack online bookstore with a storefront and admin panel, atomic checkout, smart recommendations and a catalogue in Ukrainian, English and Polish.",
        repos: [{ label: "Source code", url: `${GH}marketplace` }],
        textAbout: "Стан is a complete e-commerce solution for a bookstore: a customer storefront, a back-office admin panel and a robust API behind them. It handles the details that make a shop reliable in practice, not just in a demo.\n" +
            "Checkout is atomic with stock deduction, orders are processed in the background, sessions use rotating refresh tokens and access control is enforced on the server. The catalogue is genuinely trilingual — titles, authors, descriptions and categories are stored in Ukrainian, English and Polish rather than machine-translated on the fly.\n" +
            "Shoppers get search, filtering and sorting, a guest cart that merges into their account on login, and a rule-based recommendation engine. The seed catalogue contains 80 real books across 10 genres with covers and ISBNs from Open Library.",
        highlights: [
            "Catalogue and UI fully localised: Ukrainian, English, Polish",
            "Atomic checkout with stock deduction and duplicate-submit protection",
            "Guest cart that merges into the account cart on login",
            "Rule-based “You may also like” recommendations",
            "Admin panel with order management and analytics",
            "Redis-cached catalogue and role-based access control",
        ],
        tech: ["React", "TypeScript", "Nest", "PostgreSQL", "Redis", "Docker"],
    },
    {
        id: "task-tracker",
        name: "Task Tracker",
        emoji: "✅",
        kind: "SaaS · Project management",
        img: shots("tracker", 1),
        text: "A Jira/Trello-style task tracker with workspaces, Kanban boards, comments, activity history and live multi-user updates.",
        repos: [{ label: "Source code", url: `${GH}task-tracker` }],
        textAbout: "Task Tracker gives teams a clear picture of who is doing what. Work is organised into workspaces and projects, and every project has a Kanban board with To do, In progress and Done columns.\n" +
            "Tasks can be moved by drag and drop, filtered by status, priority and assignee, discussed in comments and audited through a full activity history that records every change with who, what and when. Status and assignee changes appear for everyone on the board instantly over WebSockets.\n" +
            "Security and quality come built in: short-lived JWTs with rotating httpOnly refresh tokens, owner and member roles, Swagger documentation and a health endpoint. The entire stack starts with a single docker compose command, and the interface is responsive and built on a small design-token system.",
        highlights: [
            "Workspaces → projects → tasks with scoped authorisation",
            "Kanban board with drag-and-drop status changes",
            "Live updates for all viewers via Socket.IO",
            "Comments with owner moderation and a full activity timeline",
            "Filtering, pagination and responsive layouts",
            "One-command Docker setup, Swagger docs and health checks",
        ],
        tech: ["React", "TypeScript", "Vite", "Nest", "PostgreSQL", "Socket.IO", "Swagger", "Docker", "GitHub Actions"],
    },
    {
        id: "runway",
        name: "Runway — Task Control Center",
        emoji: "✈️",
        kind: "Web app · Task management",
        img: shots("runway", 1),
        text: "A focused task manager with an aviation-control-room interface: every task is a flight moving through workflow stages.",
        link: "https://todo-peach-seven-20.vercel.app",
        repos: [
            { label: "Frontend", url: `${GH}Todo` },
            { label: "Backend", url: `${GH}TODO-server` },
        ],
        textAbout: "Runway reimagines the to-do list as a control dashboard. Inspired by airport departure boards and terminal interfaces, it lets users create tasks, follow their progress and move them through workflow stages on a personal board.\n" +
            "The dark interface uses amber for active work, green for completed work and monospaced type for technical data, so status is readable at a glance. The React frontend is backed by its own NestJS API with JWT authentication, hashed passwords and validated input.",
        highlights: [
            "Personal task boards with workflow stages",
            "Distinctive dark, terminal-inspired UI",
            "JWT authentication and per-user data",
            "Separate React client and NestJS API",
            "Deployed live on Vercel",
        ],
        tech: ["React", "TypeScript", "Vite", "React Router", "TanStack Query", "Axios", "Tailwind", "Nest", "TypeORM", "Vercel"],
    },
    {
        id: "meeting-booking",
        name: "Meeting Booking",
        emoji: "📅",
        kind: "Web app · Booking",
        img: shots("meeting", 1),
        text: "A full-stack meeting-booking application: a React + TypeScript client with a NestJS API, JWT authentication and PostgreSQL.",
        repos: [
            { label: "Frontend", url: `${GH}Meeting-Booking` },
            { label: "Backend", url: `${GH}Meeting-Booking-Server` },
        ],
        textAbout: "Meeting Booking is a two-part application for scheduling meetings online. The client is a React and TypeScript single-page app using React Router for navigation, Axios for API calls and Tailwind CSS for the interface.\n" +
            "The server is a NestJS REST API on PostgreSQL via TypeORM, with Passport and JWT authentication, bcrypt password hashing, class-validator input validation and interactive Swagger documentation.",
        highlights: [
            "Typed React client and typed NestJS API",
            "JWT authentication with hashed passwords",
            "Validated requests and documented endpoints (Swagger)",
            "PostgreSQL persistence through TypeORM",
        ],
        tech: ["React", "TypeScript", "Vite", "React Router", "Axios", "Tailwind", "Nest", "TypeORM", "PostgreSQL", "Swagger"],
    },
    {
        id: "tenderness",
        name: "Tenderness",
        emoji: "🛍️",
        kind: "Commercial · E-commerce",
        img: shots("tenderness", 1),
        pin: 2,
        text: "An online store for a Ukrainian homewear brand: made-to-measure pyjamas and loungewear, Nova Poshta checkout, customer accounts and an admin panel.",
        link: "https://tenderness.vercel.app",
        textAbout: "Tenderness is an e-commerce storefront for a homewear brand that sews pyjamas, suits and loungewear from natural fabrics, made individually to each client's measurements. The site turns that personal, made-to-order service into a calm, editorial shopping experience in Ukrainian.\n" +
            "Customers browse by category, save favourites to a wishlist, fill the cart and check out as guests or with an account. Delivery details are completed quickly with Nova Poshta city and branch autocomplete, and signed-in customers get their saved contact data prefilled and an order-history area.\n" +
            "A protected admin panel manages products, categories and orders. Made-to-order items carry a per-product flag and lead time that is shown on the product page, in the cart and in the order view. Built on Next.js and Firebase with security rules and CI, the project is an MVP in active development — orders are captured and a manager follows up personally with each customer.",
        highlights: [
            "Made-to-order flow with lead times shown across the whole journey",
            "Nova Poshta city and branch autocomplete at checkout",
            "Guest checkout plus customer accounts with order history",
            "Wishlist, cart and category browsing",
            "Admin panel for products, categories and orders",
            "Next.js server rendering, Firestore security rules and CI",
        ],
        tech: ["Next", "React", "TypeScript", "Tailwind", "Firebase", "Zustand", "GitHub Actions", "Vercel"],
    },
    {
        id: "sauna-polska",
        name: "Sauna Polska",
        emoji: "🔥",
        kind: "Commercial · Website redesign",
        img: shots("sauna", 1),
        pin: 4,
        text: "A premium website redesign for a private sauna and grill venue in Warsaw, with a complete online booking flow.",
        link: "https://saunapolska.vercel.app",
        textAbout: "Sauna Polska is a redesign of the website for Leń. Sauna & Grill, a private sauna, jacuzzi, pool and grill venue in Warsaw that is rented exclusively to one group at a time. The goal was a site that feels as warm and private as the venue itself and turns visitors into bookings.\n" +
            "After auditing the existing single-page site, I designed a premium Polish-language experience in charcoal, cream and wood tones with a copper accent. The page walks guests from the hero and Google rating through benefits, the venue story, an image gallery, attractions, occasions, transparent pricing, reviews, location and FAQ to a clear booking call to action.\n" +
            "A seven-step booking flow — date, time, duration, guests, extras, contact and summary — validates input and shows available and limited slots. It sits behind a service layer, so the demo backend can be replaced with real APIs without touching the interface.",
        highlights: [
            "Conversion-focused single-page design with gallery, pricing and reviews",
            "Seven-step booking flow with live availability states",
            "Reusable design system and centralised content for fast edits",
            "Service layer ready to connect to a real booking backend",
            "Responsive Next.js build",
        ],
        tech: ["Next", "React", "TypeScript", "Tailwind", "Responsive Design", "Accessibility", "Vercel"],
    },
    {
        id: "fluffy-steps",
        name: "Fluffy Steps",
        emoji: "🐾",
        kind: "Commercial · E-commerce landing page",
        pin: 1,
        img: shots("fluffy", 7),
        text: "A conversion-focused landing page and ordering flow for an online slippers store, built solo with React and Firebase.",
        link: "https://fluffy-beta.vercel.app",
        textAbout: "Fluffy Steps is a landing page and ordering experience for an online slippers store, designed around comfort: a clean, friendly interface that guides a visitor from first impression to a placed order with as little friction as possible.\n" +
            "I designed and developed it end to end on my own. Product data and customer orders live in a cloud database (Firebase), so content updates and new orders are handled without a custom server. The interface uses reusable React components, responsive layouts and Framer Motion animations for a polished feel.\n" +
            "Forms are validated before submission and the data updates in real time. It was my first production-style project with React and a live database, and it established the way I structure and ship client work.",
        highlights: [
            "Designed and built end to end by one developer",
            "Product catalogue and customer orders stored in Firebase",
            "Validated order forms with real-time data updates",
            "Responsive layout with reusable components",
            "Smooth, purposeful animations with Framer Motion",
        ],
        tech: ["React", "HTML5", "CSS3", "JavaScript (ES6+)", "Firebase", "Font Awesome", "Bootstrap", "Ant Design", "ESLint", "Vercel", "GitHub Pages", "Git", "Framer Motion", "Vite", "React Router", "Axios"],
    },
    {
        id: "kuzco-crm",
        name: "Kuzco CRM",
        emoji: "💻",
        kind: "Commercial · CRM system",
        pin: 3,
        img: shots("kuzco", 5),
        text: "A CRM system for a laptop store, built in a two-person team with a fully developed backend.",
        textAbout: "Kuzco CRM is a management system for Kuzco, a laptop store (instagram.com/kuzco.shop), giving the business a single, structured internal tool.\n" +
            "The project is built in a two-person team together with an experienced developer, which meant working to industry-level practices: a well-structured backend with a dedicated server, advanced routing and secure data handling, plus a React interface on top of it. The stack pairs a React client with a NestJS and TypeScript API on MongoDB.\n" +
            "The system runs locally and contains confidential business data, so there is no public demo or source code — but it is the project where I learned the most about backend architecture and collaborating on a complex, team-built system.",
        highlights: [
            "Full-stack system: React client + NestJS / TypeScript API",
            "MongoDB data layer with Mongoose models",
            "Structured backend with advanced routing and secure data handling",
            "Built in a team, with mentorship and real-time feedback",
            "Runs locally with confidential data — no public access",
        ],
        tech: ["React", "HTML5", "CSS3", "JavaScript (ES6+)", "Font Awesome", "Ant Design", "ESLint", "GitHub Pages", "Git", "Framer Motion", "Vite", "React Router", "Axios", "Autoprefixer", "PostCSS", "Nest", "TypeScript", "MongoDB", "Mongoose"],
    },
    {
        id: "tmn-academy",
        name: "TMN Academy",
        emoji: "🎓",
        kind: "Commercial · Educational platform",
        pin: 5,
        img: shots("tmn", 3),
        text: "A fast, fully responsive website for an educational academy that presents its courses and learning opportunities.",
        link: "https://www.tmn.academy",
        textAbout: "TMN Academy is the public website of an educational academy. It gives prospective students a clear overview of the academy, its courses and its learning opportunities in a modern, easy-to-navigate interface.\n" +
            "The site is fully responsive and built for performance, maintainability and growth: reusable React components, a clean project structure and optimised rendering keep it fast on every device and straightforward to extend. Smooth navigation and carefully tuned layouts keep visitors engaged from the first screen.\n" +
            "The project strengthened my experience in delivering production-ready React applications and structuring larger codebases around modern front-end best practices.",
        highlights: [
            "Fully responsive across phones, tablets and desktops",
            "Reusable component architecture for easy updates",
            "Optimised rendering and fast page loads",
            "Clear navigation for courses and academy information",
            "Live in production",
        ],
        tech: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Vite", "React Router", "Git", "Responsive Design", "REST APIs", "GitHub Pages"],
    },
    {
        id: "tarot",
        name: "Tarot",
        emoji: "🔮",
        kind: "Web app · Tarot readings",
        img: shots("tarot", 1),
        text: "A tarot web app with a full card library, guided spreads and saved reading history — in Ukrainian, with accounts and light/dark themes.",
        link: "https://tarot-nine-orpin.vercel.app/",
        textAbout: "Tarot is a web app that makes card readings simple and personal. It includes a complete illustrated card library where every card has upright and reversed meanings, broken down into general, love, career and finance, together with keywords and a short summary.\n" +
            "Users choose a spread, draw cards into its positions and read the interpretation. Signed-in users keep a history of their past readings. Authentication and data run on Firebase, the interface is translated through an i18n layer, and the experience is polished with light and dark themes and Framer Motion animations.",
        highlights: [
            "Full card library with upright and reversed meanings",
            "Guided spreads with position-by-position interpretation",
            "Accounts and saved reading history (Firebase)",
            "Multilingual interface with light and dark themes",
            "Deployed live on Vercel",
        ],
        tech: ["React", "TypeScript", "Vite", "React Router", "Tailwind", "Firebase", "Framer Motion", "Vercel"],
    },
    {
        id: "note-keeper",
        name: "Luna — Note Keeper",
        emoji: "📝",
        kind: "Personal project · Productivity app",
        img: shots("Luna", 5),
        text: "A clean note-taking app with inline editing and local persistence, built to master React state management.",
        link: "https://keeper-delta-taupe.vercel.app",
        repos: [{ label: "Source code", url: `${GH}Luna` }],
        textAbout: "Luna is a focused note-taking app. Users create notes with a title and content, edit them in place with intuitive icons and delete them when they are no longer needed — with every change reflected instantly in the interface.\n" +
            "Notes persist in localStorage between sessions. Under the hood it relies on controlled components, immutable state updates, React hooks and reusable components, and it gives clear UI feedback such as switching between edit and save states.",
        highlights: [
            "Create, edit inline and delete notes",
            "Persistent storage between sessions",
            "Controlled components and immutable state updates",
            "Reusable component architecture",
        ],
        tech: ["HTML5", "CSS3", "React", "React Router", "Styled Components", "Font Awesome", "Ant Design", "Tailwind", "TypeScript", "ESLint", "Autoprefixer", "PostCSS", "Vite"],
    },
    {
        id: "qr-generator",
        name: "QR Generator",
        emoji: "🔳",
        kind: "Utility · Web tool",
        img: shots("qr", 1),
        text: "A lightweight tool that turns any text or link into a QR code in one step.",
        link: "https://qr-gen-rho-ten.vercel.app",
        repos: [{ label: "Source code", url: `${GH}qr-gen` }],
        textAbout: "QR Generator is a compact web utility: enter any text or link and get a scannable QR code instantly. It is built with React and Ant Design on top of the qrcode library and deployed on Vercel.",
        highlights: [
            "Instant QR code generation from text or a URL",
            "Clean Ant Design interface",
            "Deployed live on Vercel",
        ],
        tech: ["React", "JavaScript (ES6+)", "Vite", "React Router", "Ant Design", "Font Awesome", "Vercel"],
    },
    {
        id: "university-presentations",
        name: "University Presentations",
        emoji: "🎓",
        kind: "Personal project · Interactive presentations",
        img: shots("uni", 1),
        text: "Interactive slide decks built as React web apps, including a speaker mode with notes and a timer.",
        link: "https://university-presentation-inventions.vercel.app",
        repos: [
            { label: "Inventions of humanity", url: `${GH}university-presentation-inventions` },
            { label: "Presentation 19.09", url: `${GH}presentation-uni-19.09.26` },
            { label: "Gupta Empire", url: `${GH}presentation-uni-24.09.26` },
        ],
        textAbout: "Instead of static slides, I build university presentations as small React web apps that can be opened from any device with a link. One covers the most shocking inventions of humanity and is deployed on Vercel; the others follow the same approach.\n" +
            "The Gupta Empire deck has ten text-light slides with historical artefacts and comparison tables, and a speaker mode (press N) that shows the script for each slide with a timer. The repository also contains the full ten-minute speech and a Q&A cheat sheet.",
        highlights: [
            "Slide decks as responsive web apps, shareable by link",
            "Speaker mode with per-slide script and timer",
            "Minimal-text slides with artefacts and comparison tables",
            "Three presentations built on one reusable approach",
        ],
        tech: ["React", "TypeScript", "JavaScript (ES6+)", "Vite", "Tailwind", "Vercel", "GitHub Pages"],
    },
    {
        id: "timer",
        name: "Cube Timer",
        emoji: "⏱️",
        kind: "Personal project · Vanilla JavaScript",
        img: shots("timer", 5),
        text: "A speedcubing timer that records solve times and generates scrambles — my first project, built in plain JavaScript.",
        link: "https://starewxz.github.io/cube-timer-/timer.html",
        repos: [{ label: "Source code", url: `${GH}cube-timer-` }],
        textAbout: "Cube Timer is the first project I ever built: a Rubik's Cube timer and results tracker written in vanilla JavaScript, without any framework, to learn the core web technologies properly.\n" +
            "It times each solve, saves the results, lets you compare attempts and follow your progress, and generates a fresh scramble after every attempt using a dedicated scramble library. It is optimised for laptops and not yet responsive on mobile.",
        highlights: [
            "Solve timer with saved results and progress tracking",
            "Automatic scramble generation after every attempt",
            "Pure HTML, CSS and JavaScript — no frameworks",
        ],
        tech: ["HTML5", "CSS3", "JavaScript (ES6+)"],
    },
    {
        id: "portfolio",
        name: "Portfolio",
        emoji: "💼",
        kind: "Personal project · This website",
        img: shots("portfolio", 1),
        text: "This website: a fast, accessible React portfolio with dark and light themes, lazy-loaded pages and optimised assets.",
        link: "https://portfolio-alpha-snowy-55.vercel.app",
        repos: [{ label: "Source code", url: `${GH}portfolio` }],
        textAbout: "The site you are looking at, designed and built from scratch with React, Vite and Tailwind CSS. It is engineered for speed: every page except the landing page is a lazy-loaded chunk, icons are small local SVGs, fonts are self-hosted and every screenshot is an optimised WebP with a thumbnail variant.\n" +
            "The design is an editorial, terminal-flavoured system with a persisted dark and light theme applied before first paint, and animations that respect reduced-motion settings.",
        highlights: [
            "Lazy-loaded routes and ~40 KB entry script",
            "Self-hosted fonts and optimised WebP images",
            "Dark / light theme with no flash on load",
            "Accessible, keyboard-friendly and reduced-motion aware",
        ],
        tech: ["React", "JavaScript (ES6+)", "Vite", "React Router", "Tailwind", "Figma", "Vercel", "Git"],
    },
]

// Pinned (commercial) projects come first, in `pin` order; the rest keep their file order.
const ordered = [
    ...dataProjects.filter((p) => p.pin).sort((a, b) => a.pin - b.pin),
    ...dataProjects.filter((p) => !p.pin),
]

export default ordered
