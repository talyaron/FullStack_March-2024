import { FC, useState } from "react";
import "./Chip.scss";

export enum Title {
  Admin = "admin",
  User = "user",
  Guest = "guest",
  Moderator = "moderator",
  Superuser = "superuser",
}

enum Color {
  Purple = "#A78BFA",
  Green = "#34D399",
  Red = "#F87171",
  Orange = "#FB923C",
  Blue = "#60A5FA",
}

interface ChipProps {
  title: Title;
  onChange?: (newTitle: Title) => void;
}

const Chip: FC<ChipProps> = ({ title, onChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const getColor = (title: Title): string => {
    switch (title) {
      case Title.Admin:
        return Color.Purple;
      case Title.User:
        return Color.Green;
      case Title.Guest:
        return Color.Red;
      case Title.Moderator:
        return Color.Orange;
      case Title.Superuser:
        return Color.Blue;
      default:
        return "#D1D5DB";
    }
  };

  const handleTitleChange = (newTitle: Title) => {
    onChange?.(newTitle);
    setIsDropdownOpen(false);
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <div
        className="chip-button"
        style={{
          backgroundColor: getColor(title),
        }}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {title}
      </div>

      {isDropdownOpen && (
        <div
          className="dropdown"
        >
          {Object.values(Title).map((role) => (
            <div
              key={role}
              className="dropdown-item"
              style={{
                color: getColor(role as Title),
                fontWeight: title === role ? "bold" : "normal",
              }}
              onClick={() => handleTitleChange(role as Title)}
            >
              {role}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Chip;
