import React, { useState } from 'react';
import './CatComponent.scss';

interface Props {
    url: string | undefined;
    color: string;
  }

const CatComponent: React.FC<Props> = ({ url, color }) => {
  



  return (
    <div className="card" style={{ backgroundColor: color }}>
    <img className="img" src={url} />
  </div>
);
};

export default CatComponent;
