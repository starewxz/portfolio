import Card from "../components /social-media-card.jsx";
import Header from "../components /header.jsx";
import {useEffect} from "react";

const MainPage = () => {
    useEffect(() => {
        const disableScrollOnLargeScreens = () => {
            if (window.innerWidth >= 1024) {
                document.body.style.overflow = "hidden";
            }
        };

        const enableScroll = () => {
            document.body.style.overflow = "auto";
        };
        disableScrollOnLargeScreens();

        window.addEventListener("resize", disableScrollOnLargeScreens);

        return () => {
            enableScroll();
            window.removeEventListener("resize", disableScrollOnLargeScreens);
        };
    }, []);
    return (
        <div>
            <Header />
            <main className="relative flex flex-col-reverse lg:flex-row items-center justify-center px-4 sm:px-10 lg:px-20 mt-10 gap-10 overflow-hidden">
                <div className="z-10 w-full flex justify-center lg:justify-start animate-slide-in-left sm:w-1/2">
                    <Card />
                </div>

                <div className="relative w-[250px] h-[350px] sm:w-[300px] sm:h-[420px] lg:w-[400px] lg:h-[630px] sm:mt-10 lg:mt-20 flex-shrink-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                          w-[300px] h-[350px] sm:w-[100px] sm:h-[100px] lg:w-[480px] lg:h-[550px]
                          bg-[#001EFF] blur-[60px] sm:blur-[70px] lg:blur-[90px]
                          rounded-[50%_40%_60%_50%/50%_60%_40%_50%] opacity-70 animate-pulse z-0"
                    />
                    <img
                        className="relative z-10 w-full h-full object-contain mt-4 animate-fade-in"
                        src={`${import.meta.env.BASE_URL}img/me.png`}
                        alt="my photo"
                    />
                </div>
            </main>

        </div>
    )
}

export default MainPage;