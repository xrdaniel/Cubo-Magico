import { faceColors } from "../../faceColors.js";
import { clockwiseFaceMovements, counterclockwiseFaceMovements } from "../../faceMovements.js";
import { moveEdgesPiece } from "../../moveEdgesPiece.js";
import { pivotTransition } from "../../utils.js";

const stickerPieces = {
  piece9: [`D D ${counterclockwiseFaceMovements("R")}`, `Dprime ${clockwiseFaceMovements("B")}`], // orange yellow
  piece10: [counterclockwiseFaceMovements("R"), `D ${clockwiseFaceMovements("B")}`], // red yellow
  piece18: [``,`${clockwiseFaceMovements("B")} D ${counterclockwiseFaceMovements("R")}`], // red blue
  piece24: [`${clockwiseFaceMovements("B")}`, `Dprime ${counterclockwiseFaceMovements("R")}`], // yellow blue
  piece33: [`${clockwiseFaceMovements("F")} ${clockwiseFaceMovements("B")}`, `${clockwiseFaceMovements("F")} Dprime ${counterclockwiseFaceMovements("R")}`], // orange green
  piece34: [`${clockwiseFaceMovements("R")} D D ${counterclockwiseFaceMovements("R")}`, `${counterclockwiseFaceMovements("F")} Dprime ${counterclockwiseFaceMovements("R")}`], // red green
  piece40: [`D D ${clockwiseFaceMovements("B")}`, `D ${counterclockwiseFaceMovements("R")}`], // yellow green
};

const expectedColors = [faceColors.right, faceColors.back];

function positionPiece18(){
  pivotTransition(145,45)
  return moveEdgesPiece("piece18", expectedColors, stickerPieces)
}

export { positionPiece18 };

