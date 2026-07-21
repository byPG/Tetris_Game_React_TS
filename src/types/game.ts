// Identifies one of the seven standard tetromino shapes used in Tetris. type - our own type, union types of string literals representing each tetromino shape.
export type TetrominoType = 'I' | 'O' | 'T' | 'S' | 'Z' | 'J' | 'L';

// Represents one cell on the game board: empty or occupied by a tetromino.
export type Cell = TetrominoType | null;

// Represents the entire game board as a two-dimensional array of cells.
export type Board = Cell[][];