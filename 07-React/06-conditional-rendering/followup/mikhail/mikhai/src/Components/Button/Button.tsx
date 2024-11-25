import React, { FC, useState } from "react";
import "./Button.scss";

interface Props {
  isBigButton?: boolean; 
}

const Button: FC<Props> = ({ isBigButton = false }) => {
  const [isDark, setIsDark] = useState(false); 

  function handleClick() {
    setIsDark(!isDark); 
  }

  return (
    <div
      className={`button-container ${isDark ? "dark-background" : "light-background"}`}
    >
      <button
        className={`button ${isBigButton ? "big-button" : "small-button"} ${
          isDark ? "dark-button": "light-button" 
        }`}
        onClick={handleClick}
      >
        {isBigButton ? "Big Button" : "Button"}
      </button>
    </div>
  );
};

export default Button;
