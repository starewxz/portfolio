import Header from "../components /header.jsx";
import Card from "../components /card.jsx";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import TechIcon from "../components /tech-icon.jsx";
import techData from "../services/techData.js";

const SkillsPage = () => {
    const [expandedCards, setExpandedCards] = useState({
        frontEnd: false,
        backEnd: false,
        blockchain: false,
        devOps: false,
    });

    const toggleExpand = (cardName) => {
        setExpandedCards((prev) => ({
            ...prev,
            [cardName]: !prev[cardName],
        }));
    };

    const skills = [
        {
            key: "frontEnd",
            title: "Front-end",
            lists: [
                { title: "Languages & Core:", items: "HTML5, CSS3, JavaScript (ES6+), TypeScript" },
                {
                    title: "Frameworks & Libraries:",
                    items:
                        "React, Tailwind, Bootstrap, Font Awesome, Ant Design, Styled Components, Next, React Router, Framer Motion",
                },
                {
                    title: "Build Tools & Package Managers:",
                    items: "Vite, NPM, ESLint, PostCSS, Autoprefixer",
                },
                {
                    title: "UI & Design Tools:",
                    items: "Figma, Responsive Design, Accessibility",
                },
            ],
            description:
                "Front-end development focuses on user interaction and UI with an emphasis on accessibility and performance.",
        },
        {
            key: "backEnd",
            title: "Back-end",
            lists: [
                { title: "Languages & Core:", items: "TypeScript, SQL" },
                { title: "Frameworks & Libraries:", items: "Express, Nest, Node, Axios, Mongoose" },
                { title: "Databases & Storage:", items: "PostgreSQL, MySQL, MongoDB, Firebase" },
                { title: "Tools & DevOps:", items: "Docker, Git, REST APIs, GraphQL" },
            ],
            description:
                "Server-side logic, databases, APIs, and ensuring scalable and maintainable back-end systems.",
        },
        {
            key: "blockchain",
            title: "Blockchain / Web3",
            lists: [
                {
                    title: "Core Concepts:",
                    items: "DApps, Smart Contracts, Blockchain fundamentals",
                },
                { title: "Libraries & Tools:", items: "web3.js, ethers.js, Solidity" },
            ],
            description:
                "Building decentralized applications with smart contract interactions and secure blockchain integration.",
        },
        {
            key: "devOps",
            title: "DevOps & Deployment",
            lists: [
                { title: "Tools & Platforms:", items: "Docker, Vercel, GitHub Pages, Firebase Hosting" },
                { title: "APIs & Integration:", items: "REST APIs, GraphQL" },
            ],
            description:
                "Deploying applications with modern CI/CD, containerization, and cloud hosting.",
        },
        {
            key: "projectManagement",
            title: "Project Management & Collaboration",
            lists: [
                {
                    title: "Tools:",
                    items: "Trello, Notion, Jira",
                },
            ],
            description:
                "Managing projects, workflows, documentation, and team collaboration using Trello, Notion, and Jira.",
        },
    ];

    return (
        <div className="pb-10 min-h-screen transition-colors duration-400">
            <Header />
            <main className="animate-fade-in px-4 sm:px-8 md:px-16 lg:px-24 max-w-5xl mx-auto mt-16">
                {skills.map(({ key, title, lists, description }) => (
                    <Card
                        key={key}
                        className="mb-8 rounded-xl border border-gray-600 bg-gray-800 transition-colors duration-400"
                    >
                        <section className="mb-6">
                            <div
                                role="button"
                                tabIndex={0}
                                aria-expanded={expandedCards[key]}
                                onClick={() => toggleExpand(key)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") toggleExpand(key);
                                }}
                                className="flex justify-between items-center cursor-pointer mb-4 select-none"
                            >
                                <h3
                                    className="font-oswald text-2xl sm:text-3xl font-bold cyan-text"
                                    aria-label={`${title} skills section`}
                                >
                                    {title}
                                </h3>
                                <FontAwesomeIcon
                                    icon={expandedCards[key] ? faChevronUp : faChevronDown}
                                    className={`cyan-text text-xl sm:text-2xl transition-transform duration-300 ${
                                        expandedCards[key] ? "rotate-180" : ""
                                    }`}
                                    aria-hidden="true"
                                />
                            </div>

                            {lists.map(({ title, items }) => (
                                <div key={title} className="mb-3">
                                    <p className="cyan-text font-semibold text-lg sm:text-xl mb-1 select-none">{title}</p>
                                    <div className="flex flex-wrap gap-3 mt-2">
                                        {items.split(",").map((name) => {
                                            const trimmed = name.trim();
                                            const tech = techData[trimmed];
                                            return tech ? (
                                                <TechIcon
                                                    key={trimmed}
                                                    techName={trimmed}
                                                    icon={tech.icon}
                                                    url={tech.url}
                                                    color={tech.color}
                                                    isDarkIcon={tech.isDarkIcon}
                                                />
                                            ) : (
                                                <span
                                                    key={trimmed}
                                                    className="px-3 py-2 text-gray-400 text-sm border border-white/10 rounded-md bg-white/5"
                                                >
                                                  {trimmed}
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}

                            {expandedCards[key] && (
                                <div
                                    className="mt-6 p-4 rounded-xl border border-gray-500 bg-gray-700 text-gray-200 select-text text-sm sm:text-base leading-relaxed transition-colors duration-400"
                                >
                                    {description}
                                </div>
                            )}
                        </section>
                    </Card>
                ))}
            </main>
        </div>
    );
};

export default SkillsPage;