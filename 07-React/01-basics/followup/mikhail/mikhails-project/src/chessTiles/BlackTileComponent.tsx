import {FC} from 'react';

import "./TileComponent.scss"

interface Props{
    color: string;
}

const BlackTileComponent:FC<Props> = ({color}) => {
    return <div className={color}></div>;
  };

export default BlackTileComponent