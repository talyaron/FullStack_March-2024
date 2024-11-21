import { FC } from "react";
import "./Card.scss";

interface Props {
  url: string;
}

const Card: FC<Props> = ({ url }) => {
  return (
    <div className="card">
      <img src={url} alt="Random Food" />
    </div>
  );
};

export default Card;
