import { positionYellowCross } from '../OLL/positionYellowCross.js';
import { solvePiecesSequentially } from '../solvePiecesSequentially.js';
import { positionPiece17 } from './positionPiece17.js';
import { positionPiece18 } from './positionPiece18.js';
import { positionPiece33 } from './positionPiece33.js';
import { positionPiece34 } from './positionPiece34.js';

const piecesToSolve = [
  positionPiece17,
  positionPiece18,
  positionPiece33,
  positionPiece34,
  ];

function firstTwoLayers(){      
  solvePiecesSequentially(piecesToSolve)
  .then((totalDelay) => {
    positionYellowCross()
  })
  .catch((error) => {
    console.error("Ocorreu um erro na resolução da Segunda camada:", error);
  });
}

export { firstTwoLayers };

