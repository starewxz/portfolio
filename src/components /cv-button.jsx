import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const CvButton = () => {
    return (
        <section
            className="cv-button-wrapper flex flex-col sm:flex-row gap-4 justify-center max-w-7xl w-full mx-auto px-4 sm:px-0 mt-4 mb-8 animate-slide-in-left"
            aria-label="CV download"
        >
            <a
                href="../../public/Revasevych-Stanislav-CV.pdf"
                download="Stas_Revasevych_CV.pdf"
                className="cv-btn inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm sm:text-base font-semibold backdrop-blur-lg border border-white/20
                           shadow-md transition-all duration-300 hover:scale-[1.03] text-white bg-white/10
                           hover:bg-white/20 focus:outline-none"
                aria-label="Download CV"
            >
                <FontAwesomeIcon icon={faDownload} className="mr-2" />
                Download CV
            </a>
        </section>
    );
};

export default CvButton;