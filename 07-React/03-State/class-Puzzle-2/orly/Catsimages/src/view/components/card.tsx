import {FC} from "react";
import './cards.scss';

interface Props{
    url:string,
    color:string
}

export const Card:FC<Props> = ({url,color}) => {
    return (
        <div className="card" style={{backgroundColor:color}}>
            <img src={url} />
        </div>
    );
}

export default Card;