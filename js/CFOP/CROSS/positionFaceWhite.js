import { firstTwoLayers } from '../F2l/firstTwoLayers.js';
import { solvePiecesSequentially } from '../solvePiecesSequentially.js';
import { positionPiece21 } from './positionPiece21.js';
import { positionPiece22 } from './positionPiece22.js';
import { positionPiece37 } from './positionPiece37.js';
import { positionPiece38 } from './positionPiece38.js';

const piecesToSolve = [
    positionPiece21,
    positionPiece22,
    positionPiece37,
    positionPiece38,
  ];

function positionFaceWhite(){      
  solvePiecesSequentially(piecesToSolve)
  .then(async (totalDelay) => {
    firstTwoLayers()
  })
  .catch((error) => {
    console.error("Ocorreu um erro na resolução da Face Branca:", error);
  });
}

export { positionFaceWhite };

