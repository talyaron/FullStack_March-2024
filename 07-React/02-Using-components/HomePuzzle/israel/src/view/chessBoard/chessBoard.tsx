import { FC, useState } from 'react';

import './chessBoard.scss';

interface Props {
    color: string;
}

const square: FC<Props> = ({ color }) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected(!isSelected);
    };



    return <div className={color}
        style={{ border: `2px solid ${isSelected ? 'red' : 'black'}` }}
        onClick={handleClick}>
    </div>;

}

export default square;