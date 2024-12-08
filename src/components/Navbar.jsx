import "../assets/css/navbar.css";
import PropTypes from "prop-types";

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <div className={`navbar ${isDarkMode ? "dark" : ""}`}>
      <div className="nav-wrapper container">
        <span className="logo">NoteD</span>
        <div className="nav-options">
          <div className="nav-icon" onClick={toggleDarkMode}>
            <i className="fa-solid fa-sun"></i>
          </div>
          <div className="nav-icon">
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
Navbar.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default Navbar;
