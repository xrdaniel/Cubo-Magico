import { permutationLastLayer } from '../PLL/permutationLastLayer.js';
import { solvePiecesSequentially } from '../solvePiecesSequentially.js';
import { positionPiece10 } from './positionPiece10.js';
import { positionPiece40 } from './positionPiece40.js';
import { positionPiece9 } from './positionPiece9.js';

const piecesToSolve = [
  positionPiece9,
  positionPiece40,
  positionPiece10,
];

function yellowCrossGuidance() {
  solvePiecesSequentially(piecesToSolve)
.then((totalDelay) => {
  permutationLastLayer()})
.catch((error) => {
  console.error("Ocorreu um erro no posicionamento da cruz Amarela", error);
});
}

export { yellowCrossGuidance };

