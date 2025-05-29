import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";

export const ProjectLayout = ({ id,title, description, image, reversed }) => {
    const navigate = useNavigate();


    return (
        <div className={`flex flex-col md:flex-row animate-slide-in-left-delay ${reversed ? 'md:flex-row-reverse animate-slide-in-right-delay' : ''} items-start gap-10 px-6 md:px-16 py-16`}>

            <div className="w-full md:w-1/2">
                <div className="cursor-pointer p-6 bg-gradient-to-br from-[#001EFF]/40 via-[#001EFF]/30 to-[#001EFF]/20
                        backdrop-blur-md rounded-xl shadow-lg border border-[#001EFF]/50
                        transition-transform hover:scale-[1.02] hover:shadow-[#001EFF]/75">
                    <img
                        onClick={() => navigate(`/projects/projectDetails/${id}`)}
                        id={id}
                        src={image}
                        alt={title}
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>
            </div>

            <div className="md:w-1/2 text-left">
                <h2 className="cursor-pointer text-2xl font-bold mb-4 text-[#DBE4FF]" onClick={() => navigate(`/projects/projectDetails/${id}`)}>{title}</h2>
                <p className="text-[#DBE4FF] text-base leading-relaxed">{description}</p>
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