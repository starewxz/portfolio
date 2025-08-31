import '../styles/tech-carousel.css';
import 'devicon/devicon.min.css';
import { useState } from "react";

const techIcons = [
    // Frontend
    "devicon-html5-plain",
    "devicon-css3-plain",
    "devicon-javascript-plain",
    "devicon-typescript-plain",
    "devicon-react-original",
    "devicon-tailwindcss-plain",
    "devicon-bootstrap-plain",
    "devicon-antdesign-plain",
    "devicon-nextjs-plain",
    "devicon-eslint-plain",
    "devicon-git-plain",
    "devicon-vitejs-plain",
    "devicon-vercel-original",
    "devicon-github-original",
    "devicon-figma-plain",
    "devicon-reactrouter-plain",
    "devicon-postcss-original",
    "devicon-npm-original-wordmark",

    // Backend
    "devicon-sqlite-plain",
    "devicon-express-original",
    "devicon-nestjs-plain",
    "devicon-nodejs-plain",
    "devicon-postgresql-plain",
    "devicon-mysql-plain",
    "devicon-mongodb-plain",
    "devicon-firebase-plain",
    "devicon-docker-plain",
    "devicon-graphql-plain",
    "devicon-axios-plain",
    "devicon-mongoose-original",

    // Blockchain
    "devicon-solidity-plain",
    "devicon-ethereum-original",

    // Managing
    "devicon-trello-plain-wordmark",
    "devicon-jira-plain",
    "devicon-notion-plain",
];

const TechCarousel = () => {
    const [isPaused, setIsPaused] = useState(false);

    return (
        <div
            className="w-full overflow-hidden relative pt-5 pb-5"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-inner p-4 sm:p-6">
                <div className="overflow-x-auto hide-scrollbar">
                    <div
                        className={`whitespace-nowrap overflow-hidden flex gap-6 animate-slide py-2`}
                        style={{ animationPlayState: isPaused ? 'paused' : 'running', overflow: "visible" }}
                    >
                        {[...techIcons, ...techIcons].map((icon, i) => (
                            <i
                                key={i}
                                className={`${icon} colored text-3xl sm:text-5xl grayscale transition duration-300 ease-in-out transform hover:grayscale-0 hover:scale-125 cursor-pointer`}
                                aria-label={icon.replace("devicon-", "").replace(/-plain|-original|-wordmark/gi, "")}
                                role="img"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechCarousel;