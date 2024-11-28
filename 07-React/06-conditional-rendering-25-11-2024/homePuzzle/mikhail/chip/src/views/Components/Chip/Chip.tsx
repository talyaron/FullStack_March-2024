import React, { FC, useState } from "react";
import "./Chip.scss";

interface ChipProps {
  user: string; 
  onTitleChange: (user: string, newTitle: string) => void; 
}

const Chip: FC<ChipProps> = ({ user, onTitleChange }) => {
  const [selectedTitle, setSelectedTitle] = useState<string>("guest");

  const titleColors: Record<string, string> = {
    admin: "purple",
    user: "green",
    guest: "red",
    moderator: "blue",
    superuser: "orange",
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newTitle = event.target.value;
    setSelectedTitle(newTitle);
    onTitleChange(user, newTitle); 
  };

  return (
    <div className="chip" style={{ backgroundColor: titleColors[selectedTitle] }}>
      <span className="chip-user">{user}</span>
      <select
        className="chip-select"
        value={selectedTitle}
        onChange={handleChange}
      >
        {Object.keys(titleColors).map((title) => (
          <option key={title} value={title}>
            {title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Chip;
