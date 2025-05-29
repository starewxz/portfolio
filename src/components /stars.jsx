import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar, faStarHalfStroke as halfStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';

const Stars = ({ rating }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars.push(
            <FontAwesomeIcon
                icon={fullStar}
                key={`full-${i}`}
                className="text-yellow-400"
            />
        );
    }

    if (hasHalfStar) {
        stars.push(
            <FontAwesomeIcon
                icon={halfStar}
                key="half"
                className="text-yellow-400"
            />
        );
    }

    while (stars.length < 5) {
        stars.push(
            <FontAwesomeIcon
                icon={emptyStar}
                key={`empty-${stars.length}`}
                className="text-yellow-400"
            />
        );
    }

    return <div className="flex justify-center gap-1 mt-4">{stars}</div>;
};

Stars.propTypes = {
    rating: PropTypes.number.isRequired, // Example: 4.5, 3, etc.
};

export default Stars;
