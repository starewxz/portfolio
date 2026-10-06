import techData from "../services/techData.js";

// A single technology: local SVG logo + label, linking to the official docs.
const TechChip = ({ name, className = "" }) => {
    const tech = techData[name];

    if (!tech) {
        return <span className={`chip ${className}`}>{name}</span>;
    }

    return (
        <a className={`chip ${className}`} href={tech.url} target="_blank" rel="noopener noreferrer" title={name}>
            <img
                className={`tech-img ${tech.dark ? "tech-dark" : ""}`}
                src={tech.icon}
                alt=""
                width="20"
                height="20"
                loading="lazy"
                decoding="async"
            />
            {name}
        </a>
    );
};

export default TechChip;
