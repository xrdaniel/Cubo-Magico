import { faceColors } from "../../faceColors.js";
import { moveEdgesPiece } from "../../moveEdgesPiece.js";

const stickerPieces = {
  piece9: ["L Bprime Lprime" ,"Dprime B B"], // orange yellow
  piece10: ["Rprime B R", "D B B"], // red yellow 
  piece17: ["Bprime", "Uprime L U"], // orange blue
  piece18: ["B", "U Rprime Uprime"], // red blue
  piece20: ["", "U R Uprime B"], // white blue
  piece24: ["B B", "Bprime Uprime L U"], // yellow blue
  piece33: ["Uprime L L U Bprime", "Uprime Lprime U"], // orange green
  piece34: ["U U Fprime U U", "U R Uprime"], // red green
  piece36: ["F F D D B B", "F U R Uprime"], // white green
  piece40: ["D D B B", "D U Rprime Uprime B"], // yellow green
};

const expectedColors = [faceColors.top, faceColors.back];

function positionPiece20(){  
  return moveEdgesPiece("piece20", expectedColors, stickerPieces)
}

export { positionPiece20 };

