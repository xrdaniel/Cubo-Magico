import { faceColors } from "../../faceColors.js";
import { clockwiseFaceMovements, counterclockwiseFaceMovements } from "../../faceMovements.js";
import { isStickerPositionCorrect, pivotTransition } from "../../utils.js";

const stickerPieces = {
  piece9: [`D D ${clockwiseFaceMovements("R")}`, `D ${counterclockwiseFaceMovements("F")}`], // orange yellow
  piece10: [clockwiseFaceMovements("R"), `Dprime ${counterclockwiseFaceMovements("F")}`], // red yellow
  piece24: [`D D ${counterclockwiseFaceMovements("F")}`, `Dprime ${clockwiseFaceMovements("R")}`], // yellow blue
  piece34: ["", `${clockwiseFaceMovements("R")} D ${counterclockwiseFaceMovements("F")}`], // red green
  piece40: [counterclockwiseFaceMovements("F"), `D ${clockwiseFaceMovements("R")}`], // yellow green
};

function positionPiece34(){
  const pivot = document.querySelector("#pivot")
  pivotTransition()
  pivot.style.transform = "rotateX(145deg) rotateY(135deg)"
  
  const piece34Stickers  = document.querySelectorAll("#piece34 .sticker")
  const expectedColors = [faceColors.right, faceColors.front];
  const isCorrectPosition = isStickerPositionCorrect(piece34Stickers, expectedColors);

  if (isCorrectPosition) return;
  
  for (const pieceId in stickerPieces) {
  const pieceStickers = document.querySelectorAll(`#${pieceId} .sticker`);
  const { correctRotation, wrongRotation } = {
    correctRotation: isStickerPositionCorrect(pieceStickers, [faceColors.right, faceColors.front]),
    wrongRotation: isStickerPositionCorrect(pieceStickers, [faceColors.front, faceColors.right]),
   };

    if (correctRotation) return stickerPieces[pieceId][0];
    if (wrongRotation) return stickerPieces[pieceId][1];
  }
}

export { positionPiece34 };

