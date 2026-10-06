import { Link } from "react-router-dom";
import { thumbOf } from "../../data-projects.js";
import techData from "../services/techData.js";
import { ArrowRight } from "./icons.jsx";
import Reveal from "./reveal.jsx";

const pad = (n) => String(n).padStart(2, "0");

// One project: screenshot on one side, text on the other; sides alternate down the page.
// Deliberately static — no hover animations.
const ProjectShowcase = ({ project, index, total, reversed, eager }) => {
    const { id, name, emoji, text, img, tech = [], pin, kind } = project;
    const to = `/projects/projectDetails/${id}`;
    const icons = tech.filter((t) => techData[t]).slice(0, 8);

    return (
        <Reveal
            as="article"
            className={`flex flex-col items-center gap-8 py-12 md:gap-14 ${reversed ? "md:flex-row-reverse" : "md:flex-row"}`}
            style={{ borderTop: "2px solid var(--line)" }}
        >
            <div className="w-full md:w-1/2">
                <Link to={to} aria-label={`${name} — view details`} className="block no-underline">
                    <div className="card no-hover p-3 sm:p-4">
                        {pin && <span className="sticker z-10 -left-3 -top-4 -rotate-3">★ Commercial</span>}
                        <div className="overflow-hidden" style={{ border: "2px solid var(--line)", borderRadius: "0.25rem", aspectRatio: "16 / 10", background: "var(--paper-2)" }}>
                            <img
                                src={thumbOf(img[0])}
                                alt={`${name} screenshot`}
                                width="640"
                                height="400"
                                loading={eager ? "eager" : "lazy"}
                                fetchPriority={eager ? "high" : "auto"}
                                decoding="async"
                                className="block h-full w-full object-cover object-top"
                            />
                        </div>
                    </div>
                </Link>
            </div>

            <div className="w-full text-left md:w-1/2">
                <p className="label m-0">
                    <b>{pad(index + 1)}</b> / {pad(total)}{kind && <> · {kind}</>}
                </p>
                <h2 className="m-0 mt-3 text-4xl font-bold leading-[1.02] sm:text-5xl lg:text-6xl">
                    <span aria-hidden="true" className="mr-3 text-[0.75em]">{emoji}</span>
                    {name}
                </h2>
                <p className="mt-5 text-base leading-relaxed sm:text-lg" style={{ color: "var(--muted)" }}>
                    {text.split("\n")[0]}
                </p>

                <ul className="m-0 mt-5 flex list-none flex-wrap gap-2 p-0" aria-label="Main technologies">
                    {icons.map((t) => (
                        <li key={t} className="chip no-hover">
                            <img
                                className={`tech-img ${techData[t].dark ? "tech-dark" : ""}`}
                                src={techData[t].icon}
                                alt=""
                                width="20"
                                height="20"
                                loading="lazy"
                                decoding="async"
                            />
                            {t.replace(" (ES6+)", "")}
                        </li>
                    ))}
                </ul>

                <Link to={to} className="btn btn-primary no-hover mt-7">
                    View details <ArrowRight />
                </Link>
            </div>
        </Reveal>
    );
};

export default ProjectShowcase;
