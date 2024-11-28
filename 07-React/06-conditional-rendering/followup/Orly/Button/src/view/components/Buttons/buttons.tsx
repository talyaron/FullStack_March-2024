import { FC, useState } from "react";
import "./buttons.scss";

interface Props {
    isBigButton?: boolean;
}

const Buttons: FC<Props> = ({ isBigButton }) => {
    const [isBlue, setIsBlue] = useState(true);
    const [isHover, setIsHover] = useState(false);

    function handleClick() {
        setIsBlue(!isBlue);
    }

    function handleMouseEnter() {
        setIsHover(true);
    }

    function handleMouseLeave() {
        setIsHover(false);
    }

    if (isBigButton) {
        return (
        <button
            className={isBlue ? "blue big transition" : "white big transition"}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ boxShadow: !isHover ? '1px 1px 3px black' : '3px 3px 9px black' }}
        >
            Big Button
        </button>
        );    
    }    else {
        return (
        <button
            className={isBlue ? "blue small transition" : "white small transition"}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ boxShadow: !isHover ? '1px 1px 3px black' : '3px 3px 9px black' }}
        >
            Small Button
        </button>
        );  
    }
    };

    export default Buttons;
    
