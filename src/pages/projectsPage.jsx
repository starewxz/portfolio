import dataProjects from "../../data-projects.js";
import ProjectShowcase from "../components/project-showcase.jsx";

const ProjectsPage = () => (
    <section className="container-x pt-32 sm:pt-40">
        <header className="mb-8 max-w-4xl">
            <p className="label m-0"><b>~/projects</b> — {String(dataProjects.length).padStart(2, "0")} entries</p>
            <h1 className="m-0 mt-3 text-[clamp(3rem,10vw,7.5rem)] font-bold leading-[0.92]">
                Projects that taught me <span className="hl">the most</span>
            </h1>
            <p className="mt-6 max-w-xl text-xl" style={{ color: "var(--muted)" }}>
                From a vanilla-JS timer to a production CRM — each one is a step in my journey as a developer.
            </p>
        </header>

        <div style={{ borderBottom: "2px solid var(--line)" }}>
            {dataProjects.map((project, i) => (
                <ProjectShowcase
                    key={project.id}
                    project={project}
                    index={i}
                    total={dataProjects.length}
                    reversed={i % 2 === 1}
                    eager={i < 2}
                />
            ))}
        </div>
    </section>
);

export default ProjectsPage;
