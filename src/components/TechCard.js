import PropTypes from 'prop-types';
import './TechCard.css';

const TechCard = ({ cardInfo }) => {
  const { name, description, imageUrl, bgColor } = cardInfo;

  

  return (
    <div className="tech-card">
      <div className={`tech-card-icon ${bgColor}`}>
        <img
          src={imageUrl}
          alt={`${name} logo`}
        
          className={name === "NextJS" ? "dark-invert" : ""}
        />
      </div>
      <div className="tech-card-content">
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

TechCard.propTypes = {
  cardInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
  }).isRequired,
};

export default TechCard;
