import PropTypes from "prop-types";
import styled from "styled-components";
import {motion} from "framer-motion";

const CardWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  max-width: 720px;
  padding: 2rem 2.5rem;
  background: rgba(14, 35, 44, 0.55);
  border-radius: 20px;
  border: 1px solid rgba(0, 173, 255, 0.35);
  box-shadow:
    0 8px 32px 0 rgba(0, 173, 255, 0.25),
    inset 0 0 15px rgba(0, 173, 255, 0.15);
  backdrop-filter: blur(12px);
  color: #d6e8f7;
  font-size: 1.125rem;
  line-height: 1.6;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow:
      0 12px 40px 0 rgba(0, 173, 255, 0.4),
      inset 0 0 25px rgba(0, 173, 255, 0.25);
  }

  a {
    color: #00bfff;
    font-weight: 600;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      color: #1ec8ff;
    }
  }

  @media (max-width: 640px) {
    padding: 1.5rem 2rem;
    font-size: 1rem;
  }
`;

const Card = ({ children, className = "" }) => {
    return <CardWrapper as={motion.div} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ scale: 1.03, rotateX: 2, rotateY: 2 }} className={className}>{children}</CardWrapper>;
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Card;