import {
    siStyledcomponents,
    siPostman,
    siEthereum,
    siWeb3dotjs,
    siEthers,
    siW3schools,
    siFontawesome,
} from "simple-icons/icons";


const techData = {
    // Front-end
    HTML5: { icon: "devicon-html5-plain", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    CSS3: { icon: "devicon-css3-plain", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    JavaScript: { icon: "devicon-javascript-plain", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    TypeScript: { icon: "devicon-typescript-plain", url: "https://www.typescriptlang.org/" },
    React: { icon: "devicon-react-original", url: "https://react.dev/" },
    Tailwind: { icon: "devicon-tailwindcss-plain", url: "https://tailwindcss.com/" },
    Bootstrap: { icon: "devicon-bootstrap-plain", url: "https://getbootstrap.com/" },
    "Font Awesome": { icon: siFontawesome.svg, url: "https://fontawesome.com/", color: `#${siFontawesome.hex}` },
    "Ant Design": { icon: "devicon-antdesign-plain", url: "https://ant.design/" },
    "Styled Components": { icon: siStyledcomponents.svg, url: "https://styled-components.com/", color: `#${siStyledcomponents.hex}` },
    Next: { icon: "devicon-nextjs-line", url: "https://nextjs.org/" },
    Git: { icon: "devicon-git-plain", url: "https://git-scm.com/" },
    Vite: { icon: "devicon-vitejs-plain", url: "https://vitejs.dev/" },
    ESLint: { icon: "devicon-eslint-plain", url: "https://eslint.org/" },
    Vercel: { icon: "devicon-vercel-original", url: "https://vercel.com/" },
    "GitHub Pages": { icon: "devicon-github-original", url: "https://pages.github.com/" },
    Figma: { icon: "devicon-figma-plain", url: "https://figma.com/" },

    // Back-end
    SQL: { icon: "devicon-sqlite-plain", url: "https://en.wikipedia.org/wiki/SQL" },
    Express: { icon: "devicon-express-original", url: "https://expressjs.com/" },
    Nest: { icon: "devicon-nestjs-plain", url: "https://nestjs.com/" },
    Node: { icon: "devicon-nodejs-plain", url: "https://nodejs.org/" },
    PostgreSQL: { icon: "devicon-postgresql-plain", url: "https://www.postgresql.org/" },
    MySQL: { icon: "devicon-mysql-plain", url: "https://www.mysql.com/" },
    MongoDB: { icon: "devicon-mongodb-plain", url: "https://www.mongodb.com/" },
    Firebase: { icon: "devicon-firebase-plain", url: "https://firebase.google.com/" },
    Docker: { icon: "devicon-docker-plain", url: "https://www.docker.com/" },
    "REST APIs": { icon: siPostman.svg, url: "https://restfulapi.net/", color: `#${siPostman.hex}` },
    GraphQL: { icon: "devicon-graphql-plain", url: "https://graphql.org/" },

    // Blockchain
    DApps: { icon: siEthereum.svg, url: "https://ethereum.org/en/dapps/", color: `#${siEthereum.hex}` },
    Solidity: { icon: "devicon-solidity-plain", url: "https://docs.soliditylang.org/" },
    "web3.js": { icon: siWeb3dotjs.svg, url: "https://web3js.readthedocs.io/", color: `#${siWeb3dotjs.hex}` },
    "ethers.js": { icon: siEthers.svg, url: "https://docs.ethers.org/", color: `#${siEthers.hex}` },

    // Design & UX
    "Responsive Design": { icon: "devicon-css3-plain", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" },
    Accessibility: { icon: siW3schools.svg, url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/", color: `#${siW3schools.hex}` },
};

export default techData;