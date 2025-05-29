import Header from "../components /header.jsx";
import Card from "../components /card.jsx";
import Stars from "../components /stars.jsx";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";

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

    return (
        <div className={"pb-5"}>
            <Header />
            <div className="animate-fade-in">
                <Card>
                    <div className="" onClick={() => toggleExpand('frontEnd')}>
                        <h3 className="text-3xl font-bold text-cyan-300 cyan-text cursor-pointer mb-1">
                            Front-end
                        </h3>
                        <FontAwesomeIcon
                            icon={expandedCards.frontEnd ? faChevronUp : faChevronDown}
                            className="text-cyan-300 text-xl mb-6 cursor-pointer cyan-text"
                        />
                    </div>

                    <div className="mb-4">
                        <p className="text-lg text-cyan-100 font-semibold">Languages & Core:</p>
                        <p className="text-base text-[#DBE4FF]">HTML5, CSS3, JavaScript (ES6+), TypeScript</p>
                    </div>

                    <div className="mb-4">
                        <p className="text-lg text-cyan-100 font-semibold">Frameworks & Libraries:</p>
                        <p className="text-base text-[#DBE4FF]">
                            React.js, Tailwind CSS, Bootstrap, Font Awesome, Ant Design, Styled Components, Next.js
                        </p>
                    </div>

                    <div className="mb-4">
                        <p className="text-lg text-cyan-100 font-semibold">Tools:</p>
                        <p className="text-base text-[#DBE4FF]">Git, Vite, ESLint, Vercel, GitHub Pages</p>
                    </div>

                    <div className="mb-4">
                        <p className="text-lg text-cyan-100 font-semibold">Design & UX:</p>
                        <p className="text-base text-[#DBE4FF]">Figma, Responsive Design, Accessibility</p>
                    </div>
                    {expandedCards.frontEnd && (
                        <div className="mt-6 p-4 text-left text-[#DBE4FF] bg-cyan-900/20 rounded-lg border border-cyan-300/20">
                            <p className="text-sm leading-relaxed">
                                Front-end development focuses on what users visually interact with in their browser. It combines structure (HTML), style (CSS), and logic (JavaScript/React/etc). I prioritize accessibility, responsive UI, and performance — ensuring an intuitive and fast experience.
                            </p>
                        </div>
                    )}
                    <Stars rating={4} />
                </Card>
                <Card>
                    <div className="" onClick={() => toggleExpand('backEnd')}>
                        <h3 className="text-3xl font-bold text-cyan-300 cyan-text cursor-pointer mb-1">
                            Back-end
                        </h3>
                        <FontAwesomeIcon
                            icon={expandedCards.backEnd ? faChevronUp : faChevronDown}
                            className="text-cyan-300 text-xl mb-6 cursor-pointer cyan-text"
                        />
                    </div>

                    <div className="mb-4">
                        <p className="text-lg text-cyan-100 font-semibold">Languages & Core:</p>
                        <p className="text-base text-[#DBE4FF]">Node.js, SQL</p>
                    </div>

                    <div className="mb-4">
                        <p className="text-lg text-cyan-100 font-semibold">Frameworks & Libraries:</p>
                        <p className="text-base text-[#DBE4FF]">
                            Express.js, Nest.js, TypeScript
                        </p>
                    </div>

                    <div className="mb-4">
                        <p className="text-lg text-cyan-100 font-semibold">Databases & Storage:</p>
                        <p className="text-base text-[#DBE4FF]">
                            PostgreSQL, MySQL, MongoDB, Firebase
                        </p>
                    </div>

                    <div className="mb-4">
                        <p className="text-lg text-cyan-100 font-semibold">Tools & DevOps:</p>
                        <p className="text-base text-[#DBE4FF]">
                            Docker, Git, REST APIs, GraphQL
                        </p>
                    </div>

                    {expandedCards.backEnd && (
                        <div className="mt-6 p-4 text-left text-[#DBE4FF] bg-cyan-900/20 rounded-lg border border-cyan-300/20">
                            <p className="text-sm leading-relaxed">
                                Back-end development is all about server-side logic, databases, and APIs. It focuses on data storage, security, authentication, and business logic. I strive for scalable, maintainable, and performant back-end systems that support smooth front-end experiences.
                            </p>
                        </div>
                    )}
                    <Stars rating={3.5} />
                </Card>
                <Card>
                    <div onClick={() => toggleExpand('blockchain')}>
                        <h3 className="text-3xl font-bold text-cyan-300 cyan-text cursor-pointer mb-1">
                            Blockchain / Web3
                        </h3>
                        <FontAwesomeIcon
                            icon={expandedCards.blockchain ? faChevronUp : faChevronDown}
                            className="text-cyan-300 text-xl mb-6 cursor-pointer cyan-text"
                        />
                    </div>

                    <div className="mb-4">
                        <p className="text-lg text-cyan-100 font-semibold">Core Concepts:</p>
                        <p className="text-base text-[#DBE4FF]">
                            Decentralized Applications (DApps), Smart Contracts, Blockchain fundamentals
                        </p>
                    </div>

                    <div className="mb-4">
                        <p className="text-lg text-cyan-100 font-semibold">Libraries & Tools:</p>
                        <p className="text-base text-[#DBE4FF]">web3.js, ethers.js, Solidity (basic)</p>
                    </div>

                    {expandedCards.blockchain && (
                        <div className="mt-6 p-4 text-left text-[#DBE4FF] bg-cyan-900/20 rounded-lg border border-cyan-300/20">
                            <p className="text-sm leading-relaxed">
                                Developing decentralized apps on blockchain platforms. I build secure and transparent DApps focusing on smart contract interactions and user-friendly blockchain experiences.
                            </p>
                        </div>
                    )}
                    <Stars rating={2.5} />
                </Card>
                <Card>
                    <div onClick={() => toggleExpand('devOps')}>
                        <h3 className="text-3xl font-bold text-cyan-300 cyan-text cursor-pointer mb-1">
                            DevOps & Deployment
                        </h3>
                        <FontAwesomeIcon
                            icon={expandedCards.devOps ? faChevronUp : faChevronDown}
                            className="text-cyan-300 text-xl mb-6 cursor-pointer cyan-text"
                        />
                    </div>

                    <div className="mb-4">
                        <p className="text-lg text-cyan-100 font-semibold">Tools & Platforms:</p>
                        <p className="text-base text-[#DBE4FF]">Docker, Vercel, GitHub Pages, Firebase Hosting</p>
                    </div>

                    <div className="mb-4">
                        <p className="text-lg text-cyan-100 font-semibold">APIs & Integration:</p>
                        <p className="text-base text-[#DBE4FF]">REST APIs, GraphQL</p>
                    </div>

                    {expandedCards.devOps && (
                        <div className="mt-6 p-4 text-left text-[#DBE4FF] bg-cyan-900/20 rounded-lg border border-cyan-300/20">
                            <p className="text-sm leading-relaxed">
                                Experience with deploying applications using modern CI/CD tools, containerization, and cloud hosting services. Ensuring smooth integration and delivery pipelines.
                            </p>
                        </div>
                    )}
                    <Stars rating={3} />
                </Card>


            </div>
        </div>
    )
}

export default SkillsPage;