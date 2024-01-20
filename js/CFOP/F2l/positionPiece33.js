import { faceColors } from "../../faceColors.js";
import { clockwiseFaceMovements, counterclockwiseFaceMovements } from "../../faceMovements.js";
import { moveEdgesPiece } from "../../moveEdgesPiece.js";
import { pivotTransition } from "../../utils.js";

const stickerPieces = {
  piece9: [counterclockwiseFaceMovements("L"), `D ${clockwiseFaceMovements("F")}`], // orange yellow
  piece10: [`D D ${counterclockwiseFaceMovements("L")}`, `Dprime ${clockwiseFaceMovements("F")}`], // red yellow
  piece24: [`D D ${clockwiseFaceMovements("F")}`, `D ${counterclockwiseFaceMovements("L")}`], // yellow blue
  piece33: ["", `${clockwiseFaceMovements("F")} D ${counterclockwiseFaceMovements("L")}`], // orange green
  piece34: [`${counterclockwiseFaceMovements("F")} D D ${clockwiseFaceMovements("F")}`, `${counterclockwiseFaceMovements("F")} D ${counterclockwiseFaceMovements("L")}`], // red green
  piece40: [clockwiseFaceMovements("F"), `Dprime ${counterclockwiseFaceMovements("L")}`], // yellow green
};

const expectedColors = [faceColors.left, faceColors.front];

function positionPiece33(){
  pivotTransition(145, -135)
  return moveEdgesPiece("piece33", expectedColors, stickerPieces)
}

export { positionPiece33 };

