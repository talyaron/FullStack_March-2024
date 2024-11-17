import {fc}  from 'react';
import './tile.css';

const tile =({ color }) => {
    return (
        <div className={`tile ${color}`}></div>
    );
}