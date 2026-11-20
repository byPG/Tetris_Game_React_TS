import './App.css';
import { Board } from './components/Board/Board';
import { createEmptyBoard } from './utils/board';

function App() {
  const board = createEmptyBoard();

  return (
    <main className="app">
      <h1>React Tetris</h1>
      <Board board={board} />
    </main>
  );
}

export default App;