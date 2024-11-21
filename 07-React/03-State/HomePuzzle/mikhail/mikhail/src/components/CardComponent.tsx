import React, { FC, useState } from 'react';
import './CardComponent.scss';

    interface Props {
        url: string | undefined;
        onChange:(url:string|undefined)=>void;
        onClose:()=>void;

      }

  const CardComponent: FC<Props> = ({ url, onChange,onClose }) => {


    return (
      <div className="card" >
        <button className='close' onClick={()=>{onClose()}}> &#x2715;</button>
        <img src={url} />
        <button className='change' onClick={()=>{onChange(url)}}>&#x267B;</button>
      </div>
    );
  };
  

export default CardComponent;
