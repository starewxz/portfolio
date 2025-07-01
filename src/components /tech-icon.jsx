import PropTypes from "prop-types";

const TechIcon = ({ techName, icon, url, color }) => {
    const isSvg = typeof icon === "string" && icon.startsWith("<svg");

    let finalIcon = icon;

    if (isSvg && color) {
        // Inject style directly if fill isn't present
        if (!icon.includes('fill=')) {
            finalIcon = icon.replace(
                /<svg([^>]+)>/,
                `<svg$1 fill="${color}">`
            );
        } else {
            finalIcon = icon.replace(/fill=".*?"/g, `fill="${color}"`);
        }
    }

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md shadow-sm transition-all duration-300 group"
            title={techName}
            style={{ textDecoration: "none" }}
        >
            {isSvg ? (
                <span
                    className="w-8 h-8 sm:w-10 sm:h-10 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ color: color }}
                    dangerouslySetInnerHTML={{ __html: finalIcon }}
                    aria-label={techName}
                />
            ) : (
                <i
                    className={`${icon} colored text-3xl sm:text-4xl grayscale group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-300`}
                    aria-label={techName}
                />
            )}
            <span className="text-[11px] sm:text-sm text-gray-200 group-hover:text-white leading-tight text-center">
                {techName}
            </span>
        </a>
    );
};

TechIcon.propTypes = {
    techName: PropTypes.string,
    icon: PropTypes.string,
    url: PropTypes.string,
    color: PropTypes.string,
}

export default TechIcon;