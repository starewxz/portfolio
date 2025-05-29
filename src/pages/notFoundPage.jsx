import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import { Button } from "antd";

const NotFoundPage = () => {
    const navigate = useNavigate();
    document.body.style.backgroundColor = "#000000";
    return (
        <div className="min-h-screen flex flex-col md:flex-row text-white px-6 md:px-10 py-10 gap-10 bg-gradient-to-br from-black via-gray-900 to-black">
            <div className="flex flex-col justify-center flex-1 gap-10 relative">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight z-10">
                    Вибачте, не вдалося знайти сторінку.
                </h1>
                <p className="text-xl md:text-2xl font-medium text-gray-300 z-10">
                    Але ми можемо вас повернути на головну
                    <Button
                        className="ml-4 bg-cyan-400 hover:bg-cyan-500 text-black px-4 py-2 rounded-full transition-all"
                        onClick={() => navigate("/")}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </Button>
                </p>

                <header className="text-white-shadow absolute bottom-10 opacity-10 z-0 text-[120px] md:text-[300px] font-black select-none pointer-events-none">
                    404
                </header>
            </div>

            <div className="flex items-center justify-center flex-1">
                <div className="w-[300px] md:w-[500px] h-[400px] md:h-[600px] overflow-hidden rounded-3xl ring-2 ring-cyan-400/30 shadow-xl animate-fade-in">
                    <img
                        className="w-full h-full object-cover"
                        src={`${import.meta.env.BASE_URL}img/onyak.jpeg`}
                        alt="on yak photo"
                    />
                </div>
            </div>
        </div>

    )
}

export default NotFoundPage