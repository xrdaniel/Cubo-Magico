import { solvePiecesSequentially } from '../solvePiecesSequentially.js';
import { positionPiece25 } from './positionPiece25.js';
import { positionPiece41 } from './positionPiece41.js';
import { positionPiece42 } from './positionPiece42.js';

const piecesToSolve = [
    positionPiece42,
    positionPiece25,
    positionPiece41,
    positionPiece25,
  ];

function permutationLastLayer() {
   solvePiecesSequentially(piecesToSolve)
  .then((totalDelay) => {})
  .catch((error) => {
    console.error("Ocorreu um erro na etapa final", error);
  });
}

export { permutationLastLayer };

