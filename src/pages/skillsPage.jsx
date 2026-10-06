import Reveal from "../components/reveal.jsx";
import TechChip from "../components/tech-chip.jsx";

const skills = [
    {
        key: "frontEnd",
        title: "Front-end",
        lists: [
            { title: "Languages & Core", items: "HTML5, CSS3, JavaScript (ES6+), TypeScript" },
            { title: "Frameworks & Libraries", items: "React, Next, Tailwind, Bootstrap, Ant Design, Styled Components, React Router, Framer Motion, Font Awesome" },
            { title: "State, Data & Forms", items: "TanStack Query, Zustand, React Hook Form, Zod, Axios" },
            { title: "Build Tools & Package Managers", items: "Vite, NPM, ESLint, PostCSS, Autoprefixer" },
            { title: "UI & Design Tools", items: "Figma, Responsive Design, Accessibility" },
        ],
        description: "Fast, accessible interfaces: typed React applications with server-state management, validated forms and a strong focus on performance.",
    },
    {
        key: "backEnd",
        title: "Back-end",
        lists: [
            { title: "Languages & Core", items: "TypeScript, PHP, SQL" },
            { title: "Frameworks & ORMs", items: "Node, Express, Nest, Laravel, TypeORM, Prisma, Mongoose" },
            { title: "APIs & Authentication", items: "REST APIs, GraphQL, Swagger, JWT, Passport.js" },
            { title: "Databases & Storage", items: "PostgreSQL, MySQL, MongoDB, Firebase, Redis, MinIO, Meilisearch" },
            { title: "Platforms & Integrations", items: "Atlassian Forge, Jira" },
        ],
        description: "Modular, well-documented APIs and internal tools with secure authentication, migrations-first databases, caching and search — in Node.js / NestJS and PHP / Laravel, plus hands-on work with the Atlassian Forge framework.",
    },
    {
        key: "realtime",
        title: "Real-time & Messaging",
        lists: [
            { title: "Real-time", items: "Socket.IO, Yjs" },
            { title: "Queues & Background Jobs", items: "RabbitMQ, BullMQ" },
        ],
        description: "Live collaboration and instant updates over WebSockets, plus event-driven architecture with message queues, outbox publishing and background workers.",
    },
    {
        key: "devOps",
        title: "DevOps & Deployment",
        lists: [
            { title: "Containers & Orchestration", items: "Docker, Kubernetes" },
            { title: "CI/CD & Hosting", items: "GitHub Actions, Git, Vercel, GitHub Pages, Firebase Hosting" },
            { title: "Testing & Observability", items: "E2E Testing, Jest, Vitest, Prometheus" },
        ],
        description: "Containerised, reproducible environments with Docker Compose and Kubernetes manifests, automated CI pipelines, end-to-end tests, metrics and health checks.",
    },
    {
        key: "blockchain",
        title: "Blockchain / Web3",
        lists: [
            { title: "Core Concepts", items: "DApps, Smart Contracts, Blockchain fundamentals" },
            { title: "Libraries & Tools", items: "web3.js, ethers.js, Solidity" },
        ],
        description: "Building decentralized applications with smart contract interactions and secure blockchain integration.",
    },
    {
        key: "projectManagement",
        title: "Project Management & Collaboration",
        lists: [{ title: "Tools", items: "Trello, Notion, Jira" }],
        description: "Managing projects, workflows, documentation, and team collaboration using Trello, Notion, and Jira.",
    },
];

const SkillsPage = () => (
    <section className="container-x pt-32 sm:pt-40">
        <header className="mb-14 max-w-4xl">
            <p className="label m-0"><b>~/skills</b> — package.json</p>
            <h1 className="m-0 mt-3 text-[clamp(3rem,10vw,7.5rem)] font-bold leading-[0.92]">
                The toolbox <span className="hl">I work with</span>
            </h1>
            <p className="mt-6 text-xl" style={{ color: "var(--muted)" }}>Click any tool to open its docs.</p>
        </header>

        <div style={{ borderBottom: "2px solid var(--line)" }}>
            {skills.map(({ key, title, lists, description }, i) => (
                <Reveal key={key} as="section" className="grid gap-8 py-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14" style={{ borderTop: "2px solid var(--line)" }}>
                    <div className="lg:sticky lg:top-28 lg:self-start">
                        <p className="label m-0"><b>{String(i + 1).padStart(2, "0")}</b></p>
                        <h2 className="m-0 mt-2 text-4xl font-bold sm:text-5xl">{title}</h2>
                        <p className="mt-4 max-w-sm text-base leading-relaxed" style={{ color: "var(--muted)" }}>{description}</p>
                    </div>

                    <div className="grid gap-6">
                        {lists.map(({ title: groupTitle, items }) => (
                            <div key={groupTitle}>
                                <h3 className="label m-0 mb-3 !font-semibold" style={{ fontFamily: "JetBrains Mono Variable, monospace", letterSpacing: "0.08em" }}>
                                    {groupTitle}
                                </h3>
                                <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
                                    {items.split(",").map((raw) => {
                                        const name = raw.trim();
                                        return (
                                            <li key={name}>
                                                <TechChip name={name} />
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>
                </Reveal>
            ))}
        </div>
    </section>
);

export default SkillsPage;
