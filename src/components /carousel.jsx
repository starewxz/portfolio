import { Carousel } from 'antd';
import 'antd/dist/reset.css';
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {useRef} from "react";



const MyCarousel = ({ title, image }) => {
    const carouselRef = useRef();

    const goNext = () => carouselRef.current.next();
    const goPrev = () => carouselRef.current.prev();

    return (
        <div className="relative w-full mx-auto">
            <Carousel effect="fade" ref={carouselRef} autoplay dots>
                {image.map((img, index) => (
                    <div key={index}>
                        <div
                            className="relative w-full flex items-center justify-center p-4 sm:p-8"
                            style={{
                                height: '60vh', // smaller height on mobile
                            }}
                        >
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
                                className="object-cover rounded-xl max-h-full max-w-full"
                                style={{
                                    maxHeight: '100%',
                                    maxWidth: '100%',
                                }}
                            />
                        </div>
                    </div>
                ))}
            </Carousel>

            <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 z-10 cursor-pointer text-white text-2xl sm:text-3xl">
                <FontAwesomeIcon icon={faChevronLeft} onClick={goPrev} />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 z-10 cursor-pointer text-white text-2xl sm:text-3xl">
                <FontAwesomeIcon icon={faChevronRight} onClick={goNext} />
            </div>
        </div>
    );
};


MyCarousel.propTypes = {
    title: PropTypes.string,
    image: PropTypes.arrayOf(PropTypes.string),
}

export default MyCarousel;
