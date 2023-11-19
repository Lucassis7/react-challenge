import PropTypes from 'prop-types';

function Popup({ data, onClose, lastSeenTools }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <div className="popup-first-frame">
          <img src={data.icon} alt="" />
          <div className="popup-infos-container">
            <h2 className="popup-title-text">{data.name}</h2>
            <a className="popup-title-link" href={data.link} target="_blank" rel="noreferrer">ACESSAR</a>
          </div>
        </div>
        <div className="popup-last-tools">
          <h3>ÚLTIMAS FERRAMENTAS VISUALIZADAS</h3>
          <div className="last-tools-container">
            {lastSeenTools.map((tool, index) => (
              <div key={index}>
                <img src={tool.icon} alt="" width="50px" height="50px"/>
                <p>{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}

Popup.propTypes = {
  data: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  lastSeenTools: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Popup;
