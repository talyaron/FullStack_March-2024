import React, { FC } from "react";

interface Props {
  isDarkMode: boolean; // Determines whether dark mode is active
}

const DarkMode: FC<Props> = ({ isDarkMode }) => {
  return (
    <div className={`dark-mode-container ${isDarkMode ? "dark" : "light"}`}>
      <p>Dark Mode is {isDarkMode ? "On" : "Off"}</p>
    </div>
  );
};

export default DarkMode;
