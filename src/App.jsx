import "./assets/css/app.css";
import Navbar from "./components/Navbar";
import NoteCard from "./components/NoteCard";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="wrapper container">
        <div className="search-wrapper">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            className="search-input"
          />
          <button className="search-btn">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="notes-wrapper">
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
        </div>
      </div>
    </div>
  );
}

export default App;
