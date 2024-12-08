import "../assets/css/card.css";
import PropTypes from "prop-types";

const NoteCard = ({ isDarkMode }) => {
  return (
    <div className="note-card">
      <div className="note-card-wrapper">
        <div className={`card-title ${isDarkMode ? "dark" : ""}`}>CARD</div>
        <div className={`card-content ${isDarkMode ? "dark" : ""}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        </div>
        <span className="card-details">read more...</span>
        <div className="card-footer">
          <span className="card-timeline">
            <i className="far fa-clock"></i> {new Date().toDateString()}
          </span>
          <div className="card-actions">
            <div className="action-item">
              <i className="far fa-edit" />
            </div>
            <div className="action-item">
              <i
                className="far fa-trash-alt"
                style={{
                  color: `${
                    !isDarkMode ? "red" : "#F009"
                  }`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

NoteCard.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default NoteCard;
