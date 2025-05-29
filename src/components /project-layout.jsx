import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";

export const ProjectLayout = ({ id,title, description, image, reversed }) => {
    const navigate = useNavigate();


    return (
        <div className={`flex flex-col md:flex-row animate-slide-in-left-delay ${reversed ? 'md:flex-row-reverse animate-slide-in-right-delay' : ''} items-start gap-10 px-6 md:px-16 py-16`}>

            <div className="w-full md:w-1/2">
                <div className="relative cursor-pointer p-6 bg-gradient-to-br from-[#001EFF]/40 via-[#001EFF]/30 to-[#001EFF]/20
                    backdrop-blur-lg bg-white/5 border border-white/10 shadow-md rounded-2xl
                    hover:scale-105 hover:shadow-cyan-400/40 hover:border-cyan-300 transition-all group" onClick={() => navigate(`/projects/projectDetails/${id}`)}>
                <img
                        src={image}
                        alt={title}
                        className="w-full h-auto object-cover rounded-lg transition duration-300 group-hover:brightness-75"
                    />

                    <div
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                        <span className="bg-[#001EFF] bg-opacity-90 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
                          View Details
                        </span>
                    </div>
                </div>
            </div>

            <div className="md:w-1/2 text-left">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight cursor-pointer mb-4 text-[#DBE4FF]" onClick={() => navigate(`/projects/projectDetails/${id}`)}>{title}</h2>
                <p className="md:text-lg text-[#DBE4FF] text-base leading-relaxed">{description}</p>
            </div>

        </div>
    );
};

ProjectLayout.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    reversed: PropTypes.bool,
}