import styled from 'styled-components';
import Header from "../components /header.jsx";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Card from "../components /card.jsx";
import { useEffect } from "react";

const Heading = styled.h1`
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    color: #06b6d4; /* cyan-text */
    text-align: center;
    line-height: 1.1;
    margin-bottom: 0.5rem;
    letter-spacing: 0.05em;
    position: relative;
    padding-bottom: 0.25rem;

    @media (max-width: 640px) {
        font-size: 1.75rem;
        width: 90%;
        margin: 0 auto 1rem;
    }
    @media (min-width: 641px) and (max-width: 1024px) {
        font-size: 2.25rem;
        width: 80%;
        margin: 0 auto 1rem;
    }
    @media (min-width: 1025px) {
        font-size: 3rem;
    }
`;

const SubHeading = styled.h2`
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    opacity: 0.85;
    color: #a0cfea;
    text-align: center;
    margin-top: 0;
    margin-bottom: 2rem;

    @media (max-width: 640px) {
        font-size: 1rem;
        margin-bottom: 1.5rem;
        padding: 0 1rem;
    }
    @media (min-width: 641px) and (max-width: 1024px) {
        font-size: 1.1rem;
        margin-bottom: 1.75rem;
    }
`;

const AboutPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.overflowX = "hidden";
        return () => {
            document.body.style.overflowX = "";
        };
    }, []);

    return (
        <div className="pb-5 min-h-screen transition-colors duration-400 ">
            <Header />
            <div className="animate-fade-in flex flex-col justify-center items-center mt-12 px-4 sm:px-6 lg:px-8 text-gray-200 dark:text-gray-800 max-w-3xl mx-auto">
                <Heading>Hello, I’m Stas — as you’ve probably already noticed on the main page 😄</Heading>
                <SubHeading>💠 Here is a little bit about me 💠</SubHeading>

                <Card className="mb-8 rounded-xl border border-gray-600 bg-gray-800 dark:bg-gray-100 transition-colors duration-400 p-6">
                    <p className="mb-4 leading-relaxed">
                        I’m a 16-year-old passionate full-stack web developer from Ukraine. I began programming in the spring of 2024, after deciding to leave behind my football career.
                        Fun fact — before I got into coding, I had almost no experience with computers.
                        I wasn’t into gaming, and when I did play, it wasn’t even on a PC. So diving into programming truly felt like stepping into an entirely new world.
                    </p>

                    <p className="mb-4 leading-relaxed">
                        My journey started with free YouTube tutorials, and as my passion grew, I began investing in quality courses on Udemy.
                        After about a year of consistent learning, I’m proud of how far I’ve come — from building a simple {" "}
                        <span className="fancy-link cursor-pointer about-span" onClick={() => navigate("/projects/projectDetails/timer")}>
                            Rubik’s Cube timer
                        </span>{" "}
                        as my first project to developing full-featured, real-world applications showcased in my portfolio.
                    </p>

                    <p className="mb-4 leading-relaxed">
                        One of my biggest milestones was building a landing page for an online{" "}
                        <span className="fancy-link cursor-pointer about-span" onClick={() => navigate("/projects/projectDetails/fluffy-steps")}>
                          slippers store
                        </span>{" "}
                        — a project I designed and developed entirely on my own. Over time, I’ve also connected with other developers and mentors, whose support continues to help me grow and stay motivated.
                    </p>

                    <p className="mb-4 leading-relaxed">
                        But this path hasn’t always been easy. Like many self-taught learners, I’ve gone through periods of self-doubt, burnout, and mental blocks.
                        Some topics — especially parts of JavaScript or backend logic — were incredibly challenging at first. There were moments I felt stuck, even afraid to start something new or take on more serious, commercial projects. {" "}
                        <span className={'font-inter italic'}>But I moved on on this fear and started creating.</span> {" "}I’ve learned that growth often comes through those uncomfortable steps forward — <span className={'font-inter italic'}>you have to go through it in order to develop.</span>
                        {" "}I’ve made it a rule to stay consistent, even if it’s just 5 minutes of learning on a tough day — progress, no matter how small, still counts.
                    </p>

                    <p>
                        Beyond coding, I’m passionate about sports and staying active. I train in boxing and enjoy spending time outdoors, whether it&apos;s playing volleyball, football, or just being with friends.
                        Staying physically active helps me stay mentally balanced and recharged for every new challenge.
                    </p>

                    <p>
                        Thanks for taking the time to learn a bit about me.
                        I invite you to explore my projects — each one represents a part of my journey as a developer.
                    </p>

                    <p className="mb-4 leading-relaxed">Feel free to explore my projects on the next page!</p>

                    <Button
                        type="primary"
                        size="large"
                        className="mt-8 px-6 py-3 rounded-full bg-cyan-400 hover:bg-[#001EFF] text-white font-semibold flex items-center justify-center gap-2 transition-shadow shadow-cyan-400/70 hover:shadow-cyan-500/90"
                        onClick={() => navigate("/projects")}
                        aria-label="Go to projects"
                    >
                        Go to projects <FontAwesomeIcon icon={faArrowRight} />
                    </Button>
                </Card>
            </div>
        </div>
    );
};

export default AboutPage;