import { faceColors } from '../../faceColors.js';
import { moveEdgesPiece } from '../../moveEdgesPiece.js';

const stickerPieces = {
  piece5: ["", "Uprime Fprime U Lprime"], 
  piece6: ["U U", "Rprime Fprime U"], 
  piece9: ["L L", "Lprime Uprime F U"], 
  piece10: ["D D L L", "R Fprime U F"], 
  piece17: ["L", "U Bprime Uprime"], 
  piece18: ["Rprime U U", "B Uprime"], 
  piece20: ["B L", "Uprime"], 
  piece24: ["Bprime L", "D L L"], 
  piece33: ["Lprime", "F U"], 
  piece34: ["R U U", "Fprime U"], 
  piece36: ["Fprime Lprime", "U"], 
  piece40: ["F Lprime", "F F U"], 
};

const expectedColors = [faceColors.left, faceColors.top];

function positionPiece5(){    
 return moveEdgesPiece("piece5", expectedColors, stickerPieces)
}

export { positionPiece5 };

