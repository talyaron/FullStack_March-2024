import { FC } from "react";
import './Card.scss';
interface Props {
  url: string | undefined;
}

const Card: FC<Props> = ({url}) => {
  return (
    <div className="card">
      <img src={url} />
    </div>
  );
};

export default Card;
