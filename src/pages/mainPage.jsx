import Card from "../components /social-media-card.jsx";
import Header from "../components /header.jsx";
import TechCarousel from "../components /tech-carousel.jsx";
import CvButton from "../components /cv-button.jsx";
import {useState} from "react";
import { motion } from "framer-motion";

const MainPage = () => {
    const [hovered, setHovered] = useState(null);


    return (
        <div className="relative overflow-x-hidden">
            <Header />
            <main className="relative flex flex-col items-center justify-start px-4 sm:px-10 lg:px-20 gap-6 pt-6 lg:pt-5 pb-20 mt-10">
                <div className="w-full max-w-7xl mb-4 sm:mb-6">
                    <TechCarousel />
                </div>
                <CvButton />

                <div className="main-wrapper flex flex-col-reverse lg:flex-row items-center justify-center gap-10 w-full max-w-7xl mt-[-40px] lg:mt-[-60px]">
                    <motion.div
                        className="z-10 flex justify-center items-center sm:w-1/2 w-full max-w-md mx-auto mt-6 sm:mt-8 lg:mt-0"
                        onHoverStart={() => setHovered("card")}
                        onHoverEnd={() => setHovered(null)}
                        animate={{
                            y: hovered === "card" ? -10 : 0,
                            scale: hovered === "card" ? 1.06 : 1,
                            rotate: hovered === "card" ? 2 : 0
                        }}
                        transition={{ type: "spring", stiffness: 220, damping: 20 }}
                    >
                        <Card />
                    </motion.div>

                    <motion.div
                        className="mt-10 relative w-[250px] h-[350px] sm:w-[300px] sm:h-[420px] lg:w-[400px] lg:h-[630px] sm:mt-6 lg:mt-0 flex-shrink-0"
                        onHoverStart={() => setHovered("photo")}
                        onHoverEnd={() => setHovered(null)}
                        animate={{
                            y: hovered === "photo" ? -8 : hovered === "card" ? 5 : 0,
                            scale: hovered === "photo" ? 1.08 : hovered === "card" ? 0.92 : 1,
                            rotate: hovered === "photo" ? 3 : 0
                        }}
                        transition={{ type: "spring", stiffness: 180, damping: 18 }}
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                            w-[300px] h-[350px] sm:w-[340px] sm:h-[380px] lg:w-[450px] lg:h-[550px]
                            rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500
                            opacity-30 blur-xl animate-rotate-slow pointer-events-none" />

                        <div className="float-slow  relative z-10 rounded-full p-[5px] bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-400 shadow-lg">
                            <img
                                className="me-glow rounded-full object-cover w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] border-4 border-white shadow-xl"
                                src={`${import.meta.env.BASE_URL}img/me2.JPG`}
                                alt="my photo"
                            />
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default MainPage;