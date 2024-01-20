import { solvePiecesSequentially } from '../solvePiecesSequentially.js';
import { positionFaceWhite } from './positionFaceWhite.js';
import { positionPiece20 } from './positionPiece20.js';
import { positionPiece36 } from './positionPiece36.js';
import { positionPiece5 } from './positionPiece5.js';
import { positionPiece6 } from './positionPiece6.js';

const piecesToSolve = [
    positionPiece5,
    positionPiece6,
    positionPiece20,
    positionPiece36,
  ];

function whiteCross(){      
  solvePiecesSequentially(piecesToSolve)
  .then(async (totalDelay) => {
    positionFaceWhite()
  })
  .catch((error) => {
    console.error("Ocorreu um erro na resolução da cruz Branca:", error);
  });
}

export { whiteCross };

