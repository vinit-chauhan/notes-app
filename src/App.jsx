import { useState } from "react";
import "./assets/css/app.css";
import Navbar from "./components/Navbar";
import NoteCard from "./components/NoteCard";
import { useEffect } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    var dark = localStorage.getItem("dark-mode") === "true";
    setIsDarkMode(dark);
    if (dark) {
      var body = document.querySelector("body");
      body.classList.add("dark");
    }
    console.log("Dark mode: ", dark);
  }, []);

  
  const changeTheme = () => {
    console.log("Turing on dark mode: ", !isDarkMode);

    localStorage.setItem("dark-mode", !isDarkMode);
    
    var body = document.querySelector("body");
    body.classList.toggle("dark");

    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="app">
      <Navbar toggleDarkMode={changeTheme} isDarkMode={isDarkMode} />
      <div className="wrapper container">
        <div className="search-wrapper">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            className={`search-input ${isDarkMode ? "dark" : ""}`}
          />
          <button className={`search-btn ${isDarkMode ? "dark" : ""}`}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="notes-wrapper">
          <NoteCard isDarkMode={isDarkMode} />
          <NoteCard isDarkMode={isDarkMode} />
          <NoteCard isDarkMode={isDarkMode} />
          <NoteCard isDarkMode={isDarkMode} />
          <NoteCard isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
}

export default App;
