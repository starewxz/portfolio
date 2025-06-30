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
                        I’m a 16-year-old passionate full-stack web developer from Ukraine. I began programming in the spring of 2024, after deciding to quit playing football.
                        Fun fact: before I started coding, I had very little experience with computers. I didn’t play many video games, and when I did, it wasn’t on a PC.
                        So, beginning my programming journey felt like a completely new adventure.
                    </p>

                    <p className="mb-4 leading-relaxed">
                        I started with free courses on YouTube and, as I got more serious, I invested in quality courses on Udemy.
                        After about a year of dedicated learning, I’m proud of the progress I’ve made. Just a year ago, my first project was a simple{" "}
                        <p className="fancy-link cursor-pointer" onClick={() => navigate("/projects/projectDetails/timer")}>
                          timer for Rubik’s Cube
                        </p>{" "}
                        — nothing like the portfolio I’ve built today.
                    </p>

                    <p className="mb-4 leading-relaxed">
                        My first big project was creating a landing site for online{" "}
                        <p className="fancy-link cursor-pointer" onClick={() => navigate("/projects/projectDetails/fluffy-steps")}>
                          slippers store
                        </p>{" "}
                        , which you can also check out on the projects page. Over time, I’ve connected with many programmer friends, which helps me grow and stay motivated.
                    </p>

                    <p className="mb-4 leading-relaxed">
                        Outside of programming, I’m very passionate about sports and active vacations. I train in boxing regularly, and during holidays, I love playing volleyball or football with friends.
                        Staying active keeps me balanced and energized for all my projects.
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