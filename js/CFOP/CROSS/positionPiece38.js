import { faceColors } from "../../faceColors.js";
import { moveCornersPiece } from "../../moveCornersPiece.js";

const stickerPieces = {
  piece25: ["Rprime D D R", "D D F Dprime Fprime Rprime D D R", "F D D Fprime"], // orange yellow blue
  piece26: ["Dprime F Dprime Fprime Rprime D D R", "F Dprime Fprime", "Dprime F D Fprime"], // red yellow blue
  piece38: ["","F D D Fprime Rprime D D R","Rprime D D R F D D Fprime"], // red white green
  piece41: ["D F Dprime Fprime Rprime D D R","D D F Dprime Fprime","Rprime D R"], // orange yellow green
  piece42: ["F D Fprime","Rprime D R F D D Fprime","Rprime Dprime R"] // red yellow green
};

const expectedColors = [faceColors.right, faceColors.top, faceColors.front];

function positionPiece38(){  
 return moveCornersPiece("piece38", expectedColors, stickerPieces)
}

export { positionPiece38 };

