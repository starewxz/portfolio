import Card from "../components /social-media-card.jsx";
import Header from "../components /header.jsx";
import {useEffect} from "react";

const MainPage = () => {
        useEffect(() => {
            document.body.style.overflow = "hidden"; // Disable scrolling when page is open

            return () => {
                document.body.style.overflow = "auto"; // Restore scrolling when page is closed
            };
        }, []);
    return (
        <div>
            <Header />
            <main className="relative flex items-center justify-start pl-8 pr-0 lg:pr-20 mt-20">
                <div className="z-10 ml-44 animate-slide-in-left">
                    <Card />
                </div>

                <div className="hidden lg:block relative w-[400px] h-[630px] ml-auto">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[630px] bg-[#001EFF] blur-[90px] rounded-[50%_40%_60%_50%/50%_60%_40%_50%] opacity-70 animate-pulse z-0" />
                    <img
                        className="relative z-10 w-full h-full object-contain mt-16 animate-fade-in"
                        src={`${import.meta.env.BASE_URL}img/me.png`}
                        alt="my photo"
                    />
                </div>
            </main>
        </div>
    )
}

export default MainPage;