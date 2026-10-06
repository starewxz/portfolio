import { Link } from "react-router-dom";
import { ArrowRight } from "./icons.jsx";

// Compact, static index of projects (used on the home page). No hover effects.
const ProjectList = ({ projects }) => (
    <div className="rows">
        {projects.map((p, i) => (
            <Link key={p.id} to={`/projects/projectDetails/${p.id}`} className="row">
                <span className="mono self-start pt-2 text-sm" style={{ color: "var(--muted)" }}>
                    {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                    <div className="row-title">
                        <span aria-hidden="true" className="mr-3 text-[0.7em]">{p.emoji}</span>
                        {p.name}
                    </div>
                    <div className="mono mt-2 text-xs" style={{ color: "var(--muted)" }}>
                        {p.pin && <b style={{ color: "var(--pop)" }}>★ commercial · </b>}
                        {p.tech.slice(0, 5).join(" / ")}
                    </div>
                </div>
                <span className="row-arrow" aria-hidden="true"><ArrowRight /></span>
            </Link>
        ))}
    </div>
);

export default ProjectList;
