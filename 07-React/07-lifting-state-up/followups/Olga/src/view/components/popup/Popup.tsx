import {FC} from 'react'
import './Popup.scss';

interface Props{
    setIsOpen: (isOpen: boolean) => void
}

export const Popup:FC<Props> = ({ setIsOpen}) => {
  return (
    <div className='popup'>
        <button onClick={()=>{setIsOpen(false)}}>Close</button>
    </div>
  )
}
