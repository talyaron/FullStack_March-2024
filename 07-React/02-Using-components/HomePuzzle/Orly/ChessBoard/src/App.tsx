import React from 'react'
import Chessboard from './components/ChessBoard'
import './App.scss'

const App: React.FC = () => {
  return (
    <div className="App">
      <h1> Interactive Chessboard</h1>
       <Chessboard />
    </div>
  )
};

export default App
