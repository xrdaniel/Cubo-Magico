import { faceColors } from "../../faceColors.js";
import { moveCornersPiece } from "../../moveCornersPiece.js";

const stickerPieces = {
  piece22: ["", "Bprime D D B R D D Rprime", "R D D Rprime Bprime D D B"], // red white blue
  piece25: ["Dprime Bprime D B R D D Rprime", "D Bprime D D B", "R Dprime Rprime"], // orange yellow blue
  piece26: ["Bprime Dprime B", "Bprime D B R D D Rprime", "R D Rprime"], // red yellow blue
  piece37: ["Bprime Fprime D D B F", "Fprime D D F Bprime Dprime B", "L Bprime D D B Lprime"], // orange white green
  piece38: ["Bprime F D Fprime B", "F D D Fprime R Dprime Rprime", "R D D R R Dprime Rprime"], // red white green
  piece41: ["R D D Rprime", "D D R Dprime Rprime Bprime D D B", "Bprime D D B"], // orange yellow green
  piece42: ["D R Dprime Rprime Bprime D D B", "Bprime D B", "D D R Dprime Rprime"], // red yellow green
};

const expectedColors = [faceColors.right, faceColors.top, faceColors.back];

function positionPiece22(){  
 return moveCornersPiece("piece22", expectedColors, stickerPieces)
}

export { positionPiece22 };

