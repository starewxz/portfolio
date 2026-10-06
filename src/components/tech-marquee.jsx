import techData, { marquee } from "../services/techData.js";

// Tilted ticker tape. List rendered twice and translated -50% (pure CSS, GPU only).
const items = marquee.filter((n) => techData[n]);

const TechMarquee = () => (
    <div className="band-wrap" aria-label="Technologies I work with">
        <div className="band">
            <div className="band-track">
                {[0, 1].map((copy) =>
                    items.map((name) => (
                        <span key={`${copy}-${name}`} className="band-item" aria-hidden={copy === 1}>
                            {name.replace(" (ES6+)", "")}
                            <span className="star" aria-hidden="true">✦</span>
                        </span>
                    ))
                )}
            </div>
        </div>
    </div>
);

export default TechMarquee;
