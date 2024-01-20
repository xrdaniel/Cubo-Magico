import { faceColors } from "../../faceColors.js";
import { rotateFace } from '../../faceMovements.js';
import { moveCornersPiece } from "../../moveCornersPiece.js";
import { pivotTransition } from "../../utils.js";

const stickerPieces = {
  piece25: [
    `${rotateFace("L",true)} ${rotateFace("R",true)} ${rotateFace("L",true)}`,
    `${rotateFace("L",true)}`,
    `${rotateFace("R")}`
  ], // orange yellow blue
  piece26: [
    `${rotateFace("L")}`,
    `${rotateFace("F")} ${rotateFace("R", true)}`,
    `${rotateFace("F")} ${rotateFace("F")} ${rotateFace("R")} ${rotateFace("L")} ${rotateFace("R")}`
  ], // red yellow blue
  piece41: [`${rotateFace("F")} ${rotateFace("R")} ${rotateFace("L")} ${rotateFace("R")}`, `${rotateFace("F")} ${rotateFace("L",true)}`, `${rotateFace("R",true)}`], // orange yellow green
  piece42: ["", `${rotateFace("L")} ${rotateFace("R")}`, `${rotateFace("R")} ${rotateFace("R")} ${rotateFace("L")} ${rotateFace("L")}`] // red yellow green
};

const expectedColors = [faceColors.right, faceColors.bottom, faceColors.front];

function positionPiece42() {
  pivotTransition(145,-45)
  return moveCornersPiece("piece42", expectedColors, stickerPieces)
}

export { positionPiece42 };

