import { Carousel } from 'antd';
import 'antd/dist/reset.css';
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {useRef} from "react";

const contentStyle = {
    height: '90vh',
    width: '100%',
    padding: '120px',
    color: '#fff',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: '1.5',
    background: 'linear-gradient(to bottom right, rgba(0,30,255,0.4), rgba(0,30,255,0.3), rgba(0,30,255,0.2))',
    backdropFilter: 'blur(12px)',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(0, 30, 255, 0.5)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    cursor: 'pointer',
};


const MyCarousel = ({title, image}) => {
    const carouselRef = useRef();

    const goNext = () => {
        carouselRef.current.next();
    };

    const goPrev = () => {
        carouselRef.current.prev();
    };
    return (
        <div className="relative w-full mx-auto">
            <Carousel effect="fade" ref={carouselRef} autoplay dots>
                {image.map((img, index) => (
                    <div key={index}>
                        <div style={contentStyle} className="relative h-[90vh] w-full flex items-center justify-center p-8">
                            <div
                                className="absolute inset-0 blur-xl opacity-20 rounded-xl"
                                style={{
                                    backgroundImage: `url(${img})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            ></div>
                            <img
                                src={img}
                                alt={`${title}-${index}`}
                                style={{
                                    objectFit: 'cover',
                                    borderRadius: '0.75rem',
                                }}
                            />
                        </div>
                    </div>
                ))}
            </Carousel>

            <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10 cursor-pointer text-white text-3xl">
                <FontAwesomeIcon icon={faChevronLeft} onClick={goPrev} />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10 cursor-pointer text-white text-3xl">
                <FontAwesomeIcon icon={faChevronRight} onClick={goNext} />
            </div>

       </div>

    )};

MyCarousel.propTypes = {
    title: PropTypes.string,
    image: PropTypes.arrayOf(PropTypes.string),
}

export default MyCarousel;
