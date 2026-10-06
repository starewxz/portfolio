import { Link, Navigate, useParams } from "react-router-dom";
import dataProjects from "../../data-projects.js";
import Gallery from "../components/gallery.jsx";
import Reveal from "../components/reveal.jsx";
import TechChip from "../components/tech-chip.jsx";
import { ArrowLeft, ArrowRight, ArrowUpRight, GitHub } from "../components/icons.jsx";
import useDocumentTitle from "../hooks/use-document-title.js";

const pad = (n) => String(n).padStart(2, "0");

const ProjectDetails = () => {
    const { id } = useParams();
    const index = dataProjects.findIndex((p) => p.id === id);
    useDocumentTitle(dataProjects[index]?.name ?? null);

    if (index === -1) return <Navigate to="/404" replace />;

    const project = dataProjects[index];
    const next = dataProjects[(index + 1) % dataProjects.length];
    const paragraphs = project.textAbout.split("\n").map((p) => p.trim()).filter(Boolean);

    return (
        <article className="container-x pt-28 sm:pt-36">
            <div className="mb-8 flex items-center justify-between gap-4">
                <Link to="/projects" className="btn !py-2">
                    <ArrowLeft /> Index
                </Link>
                <span className="label">
                    <b>{pad(index + 1)}</b> / {pad(dataProjects.length)}
                </span>
            </div>

            {project.kind && (
                <p className="label mb-3 mt-0">
                    {project.pin && <b>★ </b>}{project.kind}
                </p>
            )}

            <header className="mb-10 flex flex-wrap items-end justify-between gap-6">
                <h1 className="m-0 text-[clamp(2.8rem,9vw,7rem)] font-bold leading-[0.92]">
                    <span aria-hidden="true" className="mr-3 text-[0.75em]">{project.emoji}</span>
                    <span className="hl">{project.name}</span>
                </h1>
                <div className="flex flex-wrap items-center gap-3">
                    {project.link && (
                        <a className="btn btn-primary" href={project.link} target="_blank" rel="noopener noreferrer">
                            Live site <ArrowUpRight />
                        </a>
                    )}
                    {project.repos?.map(({ label, url }) => (
                        <a key={url} className="btn" href={url} target="_blank" rel="noopener noreferrer">
                            <GitHub /> {label}
                        </a>
                    ))}
                    {!project.link && !project.repos && (
                        <span className="chip" title="Runs locally and contains confidential data">
                            private project · no public link
                        </span>
                    )}
                </div>
            </header>

            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]">
                <Reveal>
                    <Gallery title={project.name} images={project.img} />
                </Reveal>

                <Reveal delay={100} className="prose-about" style={{ color: "var(--ink)" }}>
                    <p className="label !mb-4">overview</p>
                    {paragraphs.map((p, i) => (
                        <p key={i} className={i === 0 ? "text-lg font-medium" : ""} style={i === 0 ? undefined : { color: "var(--muted)" }}>
                            {p}
                        </p>
                    ))}
                </Reveal>
            </div>

            {project.highlights && (
                <Reveal className="mt-14">
                    <p className="label mb-4"><b>key features</b></p>
                    <ul className="m-0 grid list-none gap-3 p-0 sm:grid-cols-2">
                        {project.highlights.map((h) => (
                            <li key={h} className="card flex gap-3 p-4 text-[0.95rem] leading-snug">
                                <span aria-hidden="true" className="mono font-bold" style={{ color: "var(--pop)" }}>▸</span>
                                {h}
                            </li>
                        ))}
                    </ul>
                </Reveal>
            )}

            {project.tech && (
                <Reveal className="mt-14">
                    <p className="label mb-4"><b>stack</b> / {project.tech.length} tools</p>
                    <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
                        {project.tech.map((t) => (
                            <li key={t}>
                                <TechChip name={t} />
                            </li>
                        ))}
                    </ul>
                </Reveal>
            )}

            <Reveal className="mt-20">
                <p className="label mb-2">next project</p>
                <Link to={`/projects/projectDetails/${next.id}`} className="row !px-0 !grid-cols-[1fr_auto]">
                    <span className="row-title">
                        <span aria-hidden="true" className="mr-3 text-[0.7em]">{next.emoji}</span>
                        {next.name}
                    </span>
                    <span className="row-arrow" aria-hidden="true"><ArrowRight /></span>
                </Link>
            </Reveal>
        </article>
    );
};

export default ProjectDetails;
