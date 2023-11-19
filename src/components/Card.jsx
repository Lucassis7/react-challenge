import PropTypes from 'prop-types';

function Card({ data, onCardClick }) {
  return (
    <div className="card-container" onClick={() => onCardClick(data)}>
      <img src={data.icon} alt="" />
      <p>{data.name}</p>
    </div>
  )
}

Card.propTypes = {
  data: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default Card;
