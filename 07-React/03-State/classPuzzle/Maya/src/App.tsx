import { FC } from 'react';
import './App.css'
import React, { useState } from 'react';
import Tile from './components/Tile';

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Tile />
    </div>
  );
};

export default App;



