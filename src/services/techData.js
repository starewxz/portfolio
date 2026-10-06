// Icons are local SVGs in /public/tech (no icon font, no runtime SVG strings).
// `dark: true` marks monochrome-black logos that need inverting on the dark theme.
const t = (icon, url, dark = false) => ({ icon: `${import.meta.env.BASE_URL}tech/${icon}.svg`, url, dark })

const techData = {
    // Front-end
    HTML5: t("html5", "https://developer.mozilla.org/en-US/docs/Web/HTML"),
    CSS3: t("css3", "https://developer.mozilla.org/en-US/docs/Web/CSS"),
    "JavaScript (ES6+)": t("javascript", "https://developer.mozilla.org/en-US/docs/Web/JavaScript"),
    TypeScript: t("typescript", "https://www.typescriptlang.org/"),
    React: t("react", "https://react.dev/"),
    Tailwind: t("tailwindcss", "https://tailwindcss.com/"),
    Bootstrap: t("bootstrap", "https://getbootstrap.com/"),
    "Font Awesome": t("fontawesome", "https://fontawesome.com/"),
    "Ant Design": t("antdesign", "https://ant.design/"),
    "Styled Components": t("styledcomponents", "https://styled-components.com/"),
    Next: t("nextjs", "https://nextjs.org/", true),
    Git: t("git", "https://git-scm.com/"),
    Vite: t("vitejs", "https://vitejs.dev/"),
    ESLint: t("eslint", "https://eslint.org/"),
    Vercel: t("vercel", "https://vercel.com/", true),
    "GitHub Pages": t("github", "https://pages.github.com/", true),
    Figma: t("figma", "https://figma.com/"),
    "React Router": t("reactrouter", "https://reactrouter.com"),
    Autoprefixer: t("autoprefixer", "https://www.npmjs.com/package/autoprefixer"),
    PostCSS: t("postcss", "https://postcss.org"),
    NPM: t("npm", "https://www.npmjs.com"),

    // Back-end
    SQL: t("sqlite", "https://en.wikipedia.org/wiki/SQL"),
    Express: t("express", "https://expressjs.com/", true),
    Nest: t("nestjs", "https://nestjs.com/"),
    Node: t("nodejs", "https://nodejs.org/"),
    PostgreSQL: t("postgresql", "https://www.postgresql.org/"),
    MySQL: t("mysql", "https://dev.mysql.com/doc/"),
    MongoDB: t("mongodb", "https://www.mongodb.com/"),
    Firebase: t("firebase", "https://firebase.google.com/"),
    Docker: t("docker", "https://www.docker.com/"),
    "REST APIs": t("postman", "https://restfulapi.net/"),
    GraphQL: t("graphql", "https://graphql.org/"),
    Axios: t("axios", "https://axios-http.com/uk/docs/intro"),
    Mongoose: t("mongoose", "https://mongoosejs.com"),

    PHP: t("php", "https://www.php.net/"),
    Laravel: t("laravel", "https://laravel.com/"),
    "Atlassian Forge": t("atlassian", "https://developer.atlassian.com/platform/forge/"),
    Redis: t("redis", "https://redis.io/"),
    "Socket.IO": t("socketio", "https://socket.io/", true),
    Kubernetes: t("kubernetes", "https://kubernetes.io/"),
    "GitHub Actions": t("githubactions", "https://github.com/features/actions"),
    Swagger: t("swagger", "https://swagger.io/"),
    Meilisearch: t("meilisearch", "https://www.meilisearch.com/"),
    MinIO: t("minio", "https://min.io/"),
    "TanStack Query": t("reactquery", "https://tanstack.com/query"),
    TypeORM: t("typeorm", "https://typeorm.io/"),
    Prisma: t("prisma", "https://www.prisma.io/", true),
    RabbitMQ: t("rabbitmq", "https://www.rabbitmq.com/"),
    "Passport.js": t("passport", "https://www.passportjs.org/"),
    JWT: t("jsonwebtokens", "https://jwt.io/", true),
    Zod: t("zod", "https://zod.dev/"),
    "React Hook Form": t("reacthookform", "https://react-hook-form.com/"),
    Jest: t("jest", "https://jestjs.io/"),
    Vitest: t("vitest", "https://vitest.dev/"),

    // Blockchain
    DApps: t("ethereum", "https://ethereum.org/en/dapps/"),
    Solidity: t("solidity", "https://docs.soliditylang.org/", true),
    "web3.js": t("web3dotjs", "https://web3js.readthedocs.io/"),
    "ethers.js": t("ethers", "https://docs.ethers.org/"),

    // Design & UX
    "Responsive Design": t("css3", "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"),
    Accessibility: t("w3schools", "https://www.w3.org/WAI/fundamentals/accessibility-intro/"),
    "Framer Motion": t("framer", "https://motion.dev"),

    // Managing
    Trello: t("trello", "https://trello.com/"),
    Jira: t("jira", "https://jira.com/"),
    Notion: t("notion", "https://www.notion.com", true),
}

// Short list used by the home-page marquee.
export const marquee = [
    "React", "TypeScript", "JavaScript (ES6+)", "Next", "Tailwind", "Vite", "Node", "Nest", "Express",
    "PostgreSQL", "MongoDB", "Firebase", "Docker", "GraphQL", "Git", "Figma", "Solidity", "Vercel",
]

export default techData
