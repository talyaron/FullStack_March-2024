import {FC} from 'react';

import "./TileComponent.scss"

interface Props{
    color: string;
}

const TileComponent:FC<Props> = ({color}) => {
    return <div className={color}></div>;
  };

export default TileComponent