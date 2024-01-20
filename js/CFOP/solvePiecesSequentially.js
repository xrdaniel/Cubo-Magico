import { applyRotation } from "../applyRotation.js";

function solvePieceWithDelay(positionFunction) {
  return new Promise((resolve, reject) => {
    const movesPiece = positionFunction();
    if (!movesPiece) {
      resolve(0);
      return;
    }

    const movesArrayPiece = movesPiece.split(" ");
    const delayMovesPiece = movesArrayPiece.length * 500;

    applyRotation(movesPiece);

    setTimeout(() => {
      resolve(delayMovesPiece);
    }, delayMovesPiece);
  });
}

async function solvePiecesSequentially(pieces) {
  let totalDelay = 0;
  for (const piece of pieces) {
    const delay = await solvePieceWithDelay(piece);
    totalDelay += delay;
  }
  return totalDelay;
}
  
export { solvePiecesSequentially };

