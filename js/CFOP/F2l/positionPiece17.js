import { faceColors } from "../../faceColors.js";
import { clockwiseFaceMovements, counterclockwiseFaceMovements } from '../../faceMovements.js';
import { moveEdgesPiece } from "../../moveEdgesPiece.js";
import { pivotTransition } from "../../utils.js";

const stickerPieces = {
  piece9: [`${clockwiseFaceMovements("L")}`, `Dprime ${counterclockwiseFaceMovements("B")}`], // orange yellow
  piece10: [`D D ${clockwiseFaceMovements("L")}`, `D ${counterclockwiseFaceMovements("B")}`],  // red yellow 
  piece17: ["", `${clockwiseFaceMovements("L")} D ${counterclockwiseFaceMovements("B")}`], // orange blue
  piece18: [`${clockwiseFaceMovements("B")} D D ${counterclockwiseFaceMovements("B")}`, `${clockwiseFaceMovements("B")} Dprime ${clockwiseFaceMovements("L")}`], // red blue
  piece24: [`${counterclockwiseFaceMovements("B")}`, `D ${clockwiseFaceMovements("L")}`], // yellow blue
  piece33: [`${clockwiseFaceMovements("F")} ${counterclockwiseFaceMovements("B")}`, `${counterclockwiseFaceMovements("L")} D ${counterclockwiseFaceMovements("B")}`], // orange green
  piece34: [`${clockwiseFaceMovements("R")} ${clockwiseFaceMovements("L")}`, `${clockwiseFaceMovements("R")} Dprime ${counterclockwiseFaceMovements("B")}`], // red green
  piece40: [`D D ${counterclockwiseFaceMovements("B")}`, `Dprime ${clockwiseFaceMovements("L")}`], // yellow green
};

const expectedColors = [faceColors.left, faceColors.back];

function positionPiece17(){
  pivotTransition(145,45)
  return moveEdgesPiece("piece17", expectedColors, stickerPieces)
}

export { positionPiece17 };

