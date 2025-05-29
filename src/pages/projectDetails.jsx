import {useParams} from "react-router-dom";
import dataProjects from "../../data-projects.js";
import {message} from "antd";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import Switch from "../components /theme-switch.jsx";
import MyCarousel from "../components /carousel.jsx";

const ProjectDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const project = dataProjects.find(p => p.id === id);
    useEffect (() => {
        if (!project) return navigate("*")
    }, [project]);

    const handleClick = () => {
        console.log('Clicked!');
        if (project?.link) {
            window.open(project.link);
        } else {
            message.error("Can't address you on this site");
        }
    };

    return (
        <div className="p-4">
        <header className="w-full flex items-center justify-between text-4xl font-bold text-[#DBE4FF] gap-2 p-7">
            <FontAwesomeIcon
                icon={faChevronLeft}
                className={"size-6 mb-2 cursor-pointer transition-transform duration-200 hover:scale-110 hover:text-cyan-400 cyan-text"}
                onClick={() => navigate(-1)} />
            <div className="flex items-center gap-4">
                <h1>
                    {project?.name}
                </h1>
                <FontAwesomeIcon
                    icon={faUpRightFromSquare}
                    className={`size-6 transition-transform duration-200 hover:scale-110 ${
                        project?.link
                            ? 'cursor-pointer hover:text-cyan-400 cyan-text'
                            : 'cursor-no-drop text-gray-400' // styling for no link
                    }`}
                    onClick={handleClick}
                />
            </div>
            <div className="animate-slide-in-top">
                <Switch />
            </div>
        </header>
        <main>
                <MyCarousel title={project?.name} image={project?.img} />
                <div>
                    <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-300 mt-6 italic border-l-4 border-cyan-400 pl-4">
                        {project?.text}
                    </p>
                </div>
        </main>
        </div>
    )
}
export default ProjectDetails;