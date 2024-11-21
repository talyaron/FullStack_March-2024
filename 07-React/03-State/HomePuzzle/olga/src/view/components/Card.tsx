import {FC} from "react";
import "./Card.scss";

type CardProps = {
  title: string;
  image: string;
  fact: string;
  onUpdate: () => void;
};

const Card: FC<CardProps> = ({ title, image, fact, onUpdate }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <img src={image} alt={title} className="card-image" />
      <p className="card-fact">{fact}</p>
      <button onClick={onUpdate} className="update-button">Update</button>
    </div>
  );
};

export default Card;
