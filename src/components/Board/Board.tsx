import './Board.css';
import type { Board as BoardType } from '../../types/game';

interface BoardProps {
  board: BoardType;
}

export const Board = ({ board }: BoardProps) => {
  return (
    <div className="board">
      {board.map((row, rowIndex) =>
        row.map((cell, cellIndex) => (
          <div
            key={`${rowIndex}-${cellIndex}`}
            className={`cell ${cell ? `cell--${cell}` : ''}`}
          />
        ))
      )}
    </div>
  );
};