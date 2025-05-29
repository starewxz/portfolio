import { useParams, useNavigate } from "react-router-dom";
import dataProjects from "../../data-projects.js";
import { message, Skeleton } from "antd";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Switch from "../components /theme-switch.jsx";
import MyCarousel from "../components /carousel.jsx";

const ProjectDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const rawProject = dataProjects.find((p) => p.id === id);
    const [project, setProject] = useState(null);

    useEffect(() => {
        if (!rawProject) return navigate("*");

        // Simulate data loading delay
        const timer = setTimeout(() => {
            setProject(rawProject);
        }, 1500); // 1.5 seconds delay

        return () => clearTimeout(timer);
    }, [rawProject]);

    const handleClick = () => {
        if (project?.link) {
            window.open(project.link);
        } else {
            message.error("Can't address you on this site");
        }
    };

    const isLoading = !project;

    return (
        <div className="pb-8 page">
            {isLoading ? (
                <div className="px-8 py-20">
                    <Skeleton active paragraph={{ rows: 6 }} />
                </div>
            ) : (
                <>
                    <header className="w-full flex items-center justify-between text-4xl font-bold text-[#DBE4FF] gap-2 p-7">
                        <FontAwesomeIcon
                            icon={faChevronLeft}
                            className="size-6 mb-2 cursor-pointer transition-transform duration-200 hover:scale-110 hover:text-cyan-400 hover:-translate-x-1 cyan-text"
                            onClick={() => navigate(-1)}
                        />
                        <div className="flex items-center gap-4">
                            <h1>{project?.name}</h1>
                            <FontAwesomeIcon
                                icon={faUpRightFromSquare}
                                className={`size-6 transition-transform duration-200 hover:scale-110 hover:rotate-6 ${
                                    project?.link
                                        ? "cursor-pointer hover:text-cyan-400 cyan-text"
                                        : "cursor-no-drop text-gray-400"
                                }`}
                                onClick={handleClick}
                            />
                        </div>
                        <div className="animate-slide-in-top">
                            <Switch />
                        </div>
                    </header>

                    <main className="mt-10 animate-fade-in">
                        <MyCarousel title={project?.name} image={project?.img} />
                        <div className="mt-20 max-w-6xl mx-auto px-4">
                            <p className="text-lg leading-relaxed text-gray-300 italic border-l-4 border-cyan-400 pl-6">
                                {project?.textAbout}
                            </p>
                        </div>
                    </main>
                </>
            )}
        </div>
    );
};

export default ProjectDetails;
