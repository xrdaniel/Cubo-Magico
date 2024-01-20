import { faceColors } from "../../faceColors.js";
import { moveEdgesPiece } from "../../moveEdgesPiece.js";

const stickerPieces = {
  piece6: ["", "R Uprime B U"],  
  piece9: ["D D R R", "D Fprime R"], 
  piece10: ["R R", "Rprime Uprime B U"],  
  piece17: ["B B Rprime", "Uprime Bprime U"], 
  piece18: ["Rprime", "Uprime B U"], 
  piece20: ["Bprime Rprime", "Bprime Uprime B U"], 
  piece24: ["B Rprime", "Dprime R R"], 
  piece33: ["F F R", "U F Uprime"], 
  piece34: ["R", "U Fprime Uprime"], 
  piece36: ["F R", "Uprime Rprime U R"], 
  piece40: ["Fprime R", "Fprime U Fprime Uprime"], 
};

const expectedColors = [faceColors.right, faceColors.top];

function positionPiece6(){
  return moveEdgesPiece("piece6", expectedColors, stickerPieces)
}

export { positionPiece6 };

