import { faceColors } from "../../faceColors.js";
import { moveCornersPiece } from "../../moveCornersPiece.js";

const stickerPieces = {
  piece21: ["", "B D D Bprime Lprime D D L", "Lprime D D L B D D Bprime"], // orange white blue
  piece22: ["Bprime Dprime B D D Lprime Dprime L", "R D D Rprime B Dprime Bprime", "Lprime R D L Rprime"], // red white blue
  piece25: ["B D Bprime", "Lprime D L B D D Bprime", "Lprime Dprime L"], // orange yellow blue
  piece26: ["D B Dprime Bprime Lprime D D L", "D D B Dprime Bprime", "Lprime D L"], // red yellow blue
  piece37: ["B Fprime Dprime Bprime F", "Fprime Dprime F Dprime Lprime D L", "L D D L L D L"], // orange white green
  piece38: ["Rprime Lprime D D L R", "F Lprime D D L Fprime", "Rprime D D R Lprime Dprime L"], // red white green
  piece41: ["Dprime Lprime D L B D D Bprime", "B Dprime Bprime", "D Lprime D D L"], // orange yellow green
  piece42: ["Lprime D D L", "D D Lprime D L B D D Bprime", "B D D Bprime"], // red yellow green
};

const expectedColors = [faceColors.left, faceColors.top, faceColors.back];

function positionPiece21(){
 return moveCornersPiece("piece21", expectedColors, stickerPieces)
}

export { positionPiece21 };

