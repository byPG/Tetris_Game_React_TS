import {BOARD_HEIGHT, BOARD_WIDTH} from '../constants/game';
import type {Board} from '../types/game';

// Creates an empty game board with the specified dimensions, filled with null values representing empty cells. Array.from() is used to create arrays for the rows and columns, ensuring that each cell is initialized to null. The resulting board is a two-dimensional array of cells, ready for gameplay.
export const createEmptyBoard = (): Board => {
  return Array.from({ length: BOARD_HEIGHT }, () =>
    Array.from({ length: BOARD_WIDTH }, () => null)
  );
};