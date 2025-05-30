import Header from "../components /header.jsx";
import {Button} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import Card from "../components /card.jsx";
import {useEffect} from "react";

const AboutPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        document.body.style.overflowX = "hidden";
        return () => {
            document.body.style.overflowX = "";
        };
    }, []);
    return (
        <div className={"pb-5"}>
        <Header />
            <div className="animate-fade-in flex flex-col justify-center items-center mt-12 px-4 sm:px-6 lg:px-8 text-white">
                <header className="text-3xl sm:text-4xl text-center text-cyan-500 opacity-95 font-semibold leading-tight max-w-4xl mx-auto">
                    <h1>
                        Hello, I’m Stas — as you’ve probably already noticed on the main
                        page 😄
                    </h1>
                    <p className="mt-4 text-xl sm:text-2xl font-light">
                       💠 Here is a little bit about me 💠
                    </p>
                </header>

                <Card>
                    <p className="leading-relaxed max-w-prose mx-auto">
                        I’m a 16-year-old passionate full-stack web developer from Ukraine.
                        I began programming in the spring of 2024, after deciding to quit
                        playing football. Fun fact: before I started coding, I had very
                        little experience with computers. I didn’t play many video games,
                        and when I did, it wasn’t on a PC. So, beginning my programming
                        journey felt like a completely new adventure.
                        <br />
                        <br />
                        I started with free courses on YouTube and, as I got more serious,
                        I invested in quality courses on Udemy. After about a year of
                        dedicated learning, I’m proud of the progress I’ve made. Just a year
                        ago, my first project was a simple
                        <a className={"cursor-pointer fancy-link ml-2 mr-2"} onClick={() => navigate("/projects/projectDetails/timer")}>
                        timer for Rubik’s Cube
                        </a>
                        — nothing
                        like the portfolio I’ve built today.
                        <br />
                        <br />
                        My first big project was creating a landing site for my brother’s
                        online
                        <a className={"cursor-pointer fancy-link ml-2 mr-2"} onClick={() => navigate("/projects/projectDetails/fluffy-steps")}>
                            slippers store
                        </a>
                        , which you can also check out on the projects
                        page. Over time, I’ve connected with many programmer friends, which
                        helps me grow and stay motivated.
                        <br />
                        <br />
                        Outside of programming, I’m very passionate about sports and active
                        vacations. I train in boxing regularly, and during holidays, I
                        love playing volleyball or football with friends. Staying active
                        keeps me balanced and energized for all my projects.
                        <br />
                        <br />
                        Feel free to explore my projects on the next page!
                    </p>
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
    )
}

export default AboutPage;