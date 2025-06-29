import PropTypes from "prop-types";

const Card = ({ children, className = "" }) => {
    return (
        <div
            className={`mt-8 w-full max-w-xs sm:w-9/12 max-w-3xl mx-auto p-4 sm:p-8 bg-gradient-to-br from-cyan-800/40 via-cyan-900/40 to-cyan-800/30
                backdrop-blur-md rounded-xl shadow-lg border border-cyan-400/50 text-[#DBE4FF] transition-transform hover:scale-[1.02] hover:shadow-cyan-500/75
                ${className}`}
        >
            {children}
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

Card.defaultProps = {
    className: "",
};

export default Card;
