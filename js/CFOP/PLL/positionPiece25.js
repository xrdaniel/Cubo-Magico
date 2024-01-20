import { faceColors } from "../../faceColors.js";
import { rotateFace, rotateFaceUpDown } from "../../faceMovements.js";
import { moveCornersPiece } from "../../moveCornersPiece.js";
import { isStickerPositionCorrect, pivotTransition } from "../../utils.js";

const stickerPieces = {
  piece25: ["", `${rotateFaceUpDown("B")} D ${rotateFaceUpDown("B")} D D ${rotateFaceUpDown("B")} D`, `${rotateFaceUpDown("B")} ${rotateFaceUpDown("B")} D ${rotateFaceUpDown("B")} ${rotateFaceUpDown("B")} D D ${rotateFaceUpDown("B")} ${rotateFaceUpDown("B")} D`], // orange yellow blue
  piece26: [`${rotateFace("F",true)}`, `${rotateFace("F",true)}`, `${rotateFace("F",true)}` ], // red yellow blue
  piece41: [`${rotateFace("F")}`, `${rotateFace("F")}`, `${rotateFace("F")}`], // orange yellow green
}  

const expectedColors = [faceColors.left, faceColors.bottom, faceColors.back];

function positionPiece25() {
  pivotTransition(145,-45)
  const piece26Stickers = document.querySelectorAll("#piece26 .sticker");
  const expectedColorsPiece26 = [faceColors.right, faceColors.bottom, faceColors.back];
  
  const piece41Stickers = document.querySelectorAll("#piece41 .sticker");
  const expectedColorsPiece41 = [faceColors.left, faceColors.bottom, faceColors.front];
  

  if(isStickerPositionCorrect(piece26Stickers,expectedColorsPiece26) && !isStickerPositionCorrect(piece41Stickers,expectedColorsPiece41)) {
    if(piece41Stickers[0].classList[1] === faceColors.bottom) return `${rotateFaceUpDown("B")} ${rotateFaceUpDown("B")} Dprime ${rotateFaceUpDown("B")} D`

    return `${rotateFaceUpDown("B")} Dprime ${rotateFaceUpDown("B")} ${rotateFaceUpDown("B")} D`
  }

  if(isStickerPositionCorrect(piece41Stickers,expectedColorsPiece41) && !isStickerPositionCorrect(piece26Stickers,expectedColorsPiece26) ) {
    if(piece26Stickers[0].classList[1] === faceColors.bottom) return `${rotateFaceUpDown("R")} Dprime ${rotateFaceUpDown("R")} ${rotateFaceUpDown("R")} D`

    return `${rotateFaceUpDown("R")} ${rotateFaceUpDown("R")} Dprime ${rotateFaceUpDown("R")} D`
  }

  return moveCornersPiece("piece25",expectedColors, stickerPieces)

}

export { positionPiece25 };

