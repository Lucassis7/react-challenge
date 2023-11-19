function Card({ data, onCardClick }) {
  return (
    <div className="card-container" onClick={() => onCardClick(data)}>
      <img src={data.icon} alt="" />
      <p>{data.name}</p>
    </div>
  )
}

export default Card;
