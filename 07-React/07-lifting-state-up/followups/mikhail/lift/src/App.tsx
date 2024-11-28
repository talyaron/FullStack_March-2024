import { useState } from "react";
import "./App.scss";
import DarkMode from "./views/DarkMode/DarkMode";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle the dark mode state
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className={`app-container ${isDarkMode ? "dark" : "light"}`}>
      <h1>Dark Mode Button</h1>
      <DarkMode isDarkMode={isDarkMode} />
      <button onClick={toggleDarkMode}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}

export default App;
