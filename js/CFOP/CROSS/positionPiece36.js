import { faceColors } from "../../faceColors.js";
import { moveEdgesPiece } from "../../moveEdgesPiece.js";

const stickerPieces = {
  piece9: ["U Lprime Uprime F", "D F F"], // orange yellow
  piece10: ["Uprime R U Fprime", "Dprime F F"], // red yellow 
  piece17: ["U U Bprime U U", "U L Uprime"], // orange blue
  piece18: ["U U B U U", "Uprime Rprime U"], // red blue
  piece24: ["D D F F", "Dprime R Fprime Rprime"], // yellow blue
  piece33: ["F", "U Lprime Uprime"], // orange green
  piece34: ["Fprime", "Uprime R U"], // red green
  piece36: ["", "Uprime Rprime U Fprime"], // white green
  piece40: ["F F","Fprime Uprime R U"], // yellow green
};

const expectedColors = [faceColors.top, faceColors.front];

function positionPiece36(){
  return moveEdgesPiece("piece36", expectedColors, stickerPieces)
}

export { positionPiece36 };

