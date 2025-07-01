import PropTypes from "prop-types";

const TechIcon = ({ techName, icon, url, color, isDarkIcon = false }) => {
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
            className="no-underline flex items-center gap-2 px-3 py-2 rounded-lg bg-transparent border border-transparent hover:border-cyan-400 transition-all duration-300 group"
            title={techName}
            style={{ textDecoration: "none" }}
        >
            {isSvg ? (
                <span
                    className={`
                      w-8 h-8 sm:w-10 sm:h-10 
                      transition-transform duration-300 group-hover:scale-110 
                      ${isDarkIcon ? "filter brightness-[85%] group-hover:brightness-100" : "grayscale group-hover:grayscale-0"}
                    `}
                    style={{ color }}
                    dangerouslySetInnerHTML={{ __html: finalIcon }}
                    aria-label={techName}
                />
            ) : (
                <i
                    className={`
                      ${icon} colored text-3xl sm:text-4xl 
                      transition-transform duration-300 group-hover:scale-110 
                      ${isDarkIcon ? "filter brightness-[85%] group-hover:brightness-100" : "grayscale group-hover:grayscale-0"}
                    `}
                    aria-label={techName}
                />
            )}
            <span className="text-[11px] sm:text-sm text-inherit group-hover:text-cyan-400 leading-tight text-center">
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
    isDarkIcon: PropTypes.bool
}

export default TechIcon;