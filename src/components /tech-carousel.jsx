import '../tech-carousel.css';// for custom keyframes
import 'devicon/devicon.min.css';
import {useState} from "react";


const techIcons = [
    // Frontend
    "devicon-html5-plain",
    "devicon-css3-plain",
    "devicon-javascript-plain",
    "devicon-typescript-plain",
    "devicon-react-original",
    "devicon-nextjs-plain",
    "devicon-tailwindcss-plain",
    "devicon-eslint-plain",
    "devicon-bootstrap-plain",
    "devicon-antdesign-plain",
    "devicon-canva-original",

    // Tools & DevOps
    "devicon-git-plain",
    "devicon-vitejs-plain",
    "devicon-vercel-original", //black
    "devicon-docker-plain",
    "devicon-trello-plain-wordmark",

    // Backend
    "devicon-nodejs-plain",
    "devicon-express-original",
    "devicon-nestjs-plain",
    "devicon-postgresql-plain",
    "devicon-mongodb-plain",
    "devicon-firebase-plain",
    "devicon-mysql-plain",
    "devicon-amazonwebservices-plain-wordmark",
    "devicon-github-original",

    // Blockchain
    "devicon-solidity-plain",
    "devicon-ethereum-original",
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
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechCarousel;