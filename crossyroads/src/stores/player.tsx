import type { MoveDirection } from "../types";
import { endsUpInValidPosition } from "../utilities/endsUpInValidPosition";

// The store will keep track of the player’s position and movement queue.

// export a state object with the player’s current position and the moves queue. 


export const state: {
  currentRow: number;
  currentTile: number;
  movesQueue: MoveDirection[];
} = {
  currentRow: 0,
  currentTile: 0,
  movesQueue: [],
};

// adds a movement command to the end of the moves queu
export function queueMove(direction: MoveDirection) {
  const isValidMove = endsUpInValidPosition(
    { rowIndex: state.currentRow, tileIndex: state.currentTile },
    [...state.movesQueue, direction]
  );

  if (!isValidMove) return;
  state.movesQueue.push(direction);
}

// function removes the first movement command from the queue and updates the player’s position accordingly.
export function stepCompleted() {
  const direction = state.movesQueue.shift();

  if (direction === "forward") state.currentRow += 1;
  if (direction === "backward") state.currentRow -= 1;
  if (direction === "left") state.currentTile -= 1;
  if (direction === "right") state.currentTile += 1;
}