import React from "react";
import "./Card.scss";

interface CardProps {
  title: string;
  imageUrl: string;
  description?: string;
  onRefresh?: () => void;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, description, onRefresh }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {onRefresh && (
        <button className="refresh-button" onClick={onRefresh}>
          Refresh Image
        </button>
      )}
    </div>
  );
};

export default Card;
