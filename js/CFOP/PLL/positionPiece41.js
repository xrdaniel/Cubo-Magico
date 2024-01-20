import { faceColors } from "../../faceColors.js";
import { rotateFaceUpDown } from '../../faceMovements.js';
import { isStickerPositionCorrect, pivotTransition } from "../../utils.js";

const stickerPieces = {
  piece41: [`D ${rotateFaceUpDown("B")} D D ${rotateFaceUpDown("B")} ${rotateFaceUpDown("B")} D D ${rotateFaceUpDown("B")} D D ${rotateFaceUpDown("B")} ${rotateFaceUpDown("B")} D`, `D ${rotateFaceUpDown("B")} D D ${rotateFaceUpDown("B")} ${rotateFaceUpDown("B")} D`
  ]
}

function positionPiece41() {
  pivotTransition(145,-135)
  const piece41Stickers = document.querySelectorAll("#piece41 .sticker");
  const expectedColors = [faceColors.left, faceColors.bottom, faceColors.front];

  if (isStickerPositionCorrect(piece41Stickers, expectedColors)) {
    return;
  }

  if (piece41Stickers[1].classList[1] === faceColors.front) return stickerPieces.piece41[0]

  return stickerPieces.piece41[1];
}

export { positionPiece41 };

