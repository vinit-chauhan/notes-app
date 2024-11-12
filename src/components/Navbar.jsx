import '../assets/css/navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-wrapper container">
        <span className="logo">NoteD</span>
        <div className="nav-options">
          <div className="nav-icon">
            <i class="fa-solid fa-sun"></i>
          </div>
          <div className="nav-icon">
            <i class="fa-solid fa-plus"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;