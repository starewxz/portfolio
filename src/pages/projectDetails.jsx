import { useParams, useNavigate } from "react-router-dom";
import dataProjects from "../../data-projects.js";
import { message, Skeleton } from "antd";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Switch from "../components /theme-switch.jsx";
import MyCarousel from "../components /carousel.jsx";
import "../skeletons.css";

const ProjectDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const rawProject = dataProjects.find((p) => p.id === id);
    const [project, setProject] = useState(null);

    useEffect(() => {
        if (!rawProject) return navigate("*");
        const timer = setTimeout(() => {
            setProject(rawProject);
        }, 1500);
        return () => clearTimeout(timer);
    }, [rawProject, navigate]);

    const handleClick = () => {
        if (project?.link) {
            window.open(project.link, "_blank", "noopener");
        } else {
            message.error("Can't address you on this site");
        }
    };

    const isLoading = !project;

    return (
        <div className="pb-12 px-4 sm:px-8 lg:px-16 min-h-screen text-gray-100">
            {isLoading ? (
                <div className="px-8 py-24 max-w-4xl mx-auto">
                    <Skeleton active paragraph={{ rows: 6 }} />
                </div>
            ) : (
                <div
                    className="
                    max-w-7xl
                    mx-auto
                    p-8
                    rounded-3xl
                    bg-white/10
                    backdrop-blur-3xl
                    border border-white/20
                    dark:border-gray-700/40
                    shadow-2xl
                    transition-colors duration-700
                    flex flex-col lg:flex-row
                    gap-12
                  "
                    style={{ minHeight: "70vh" }}
                >
                    {/* Left: Carousel */}
                    <section className="lg:w-1/2 rounded-xl overflow-hidden shadow-lg ring-1 ring-white/10">
                        <MyCarousel title={project.name} image={project.img} />
                    </section>

                    {/* Right: Info */}
                    <section className="lg:w-1/2 flex flex-col justify-between">
                        {/* Header as div with glass style */}
                        <div className="glass-header mb-8 animate-slide-in-left">
                            <FontAwesomeIcon
                                icon={faChevronLeft}
                                className="size-6 cursor-pointer transition-transform duration-200 hover:scale-110 hover:text-cyan-400 hover:-translate-x-1 cyan-text"
                                onClick={() => navigate(-1)}
                                aria-label="Go back"
                            />

                            <h1 className="flex-1 text-center sm:text-left text-3xl sm:text-4xl font-bold truncate mx-4 transition-transform duration-300 hover:scale-105 hover:text-cyan-300">
                                {project.name}
                            </h1>

                            <div className="flex items-center gap-4">
                                <FontAwesomeIcon
                                    icon={faUpRightFromSquare}
                                    className={`size-6 cursor-pointer transition-transform duration-200 hover:scale-110 hover:rotate-6 ${
                                        project.link ? "hover:text-cyan-400 cyan-text" : "cursor-no-drop text-gray-400"
                                    }`}
                                    onClick={handleClick}
                                    aria-label={project.link ? "Open project link" : "No link available"}
                                />
                                <Switch />
                            </div>
                        </div>

                        {/* Description */}
                        <article className="text-lg leading-relaxed text-gray-300 italic border-l-4 border-cyan-400 pl-6 mb-8 max-h-[350px] overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-600 scrollbar-track-transparent">
                            {project.textAbout}
                        </article>

                        {/* Optional: Tech stack or tags area */}
                        {project.tech && (
                            <section className="mb-6">
                                <h2 className="text-cyan-400 font-semibold mb-3 text-xl">Tech Stack</h2>
                                <ul className="flex flex-wrap gap-3 text-sm sm:text-base">
                                    {project.tech.map((tech) => (
                                        <li
                                            key={tech}
                                            className="px-3 py-1 rounded-md bg-cyan-700/20 backdrop-blur-sm border border-cyan-400 text-cyan-200"
                                        >
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}
                    </section>
                </div>
            )}
        </div>
    );
};

export default ProjectDetails;