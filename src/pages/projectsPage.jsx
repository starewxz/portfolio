import Header from "../components /header.jsx";
import {ProjectLayout} from "../components /project-layout.jsx";
import dataProjects from "../../data-projects.js";

const ProjectsPage = () => {
    return (
        <div className={"pb-5"}>
        <Header />
            {dataProjects.map((project, i) => (
                <ProjectLayout
                    key={i}
                    id={project.id}
                    title={project.name}
                    description={project.text}
                    image={project.img[0]}
                    reversed={i % 2 === 1}
                />
            ))}
        </div>
    )
}

export default ProjectsPage;