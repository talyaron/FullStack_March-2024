import Tile from './../Tile/Tile'
import './Chessboard.css';

function Chessboard() {
    const board = [];
  
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const isBlack = (row + col) % 2 === 1;
        board.push(<Tile key={`${row}-${col}`} color={isBlack ? 'black' : 'white'} />);
      }
    }
  
    return <div className="chessboard">{board}</div>;
  }
  
  export default Chessboard;