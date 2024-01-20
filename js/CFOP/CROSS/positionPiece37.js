import { faceColors } from "../../faceColors.js";
import { moveCornersPiece } from "../../moveCornersPiece.js";

const stickerPieces = {
  piece25: ["D Fprime D F L D D Lprime", "Fprime D F", "D Fprime Dprime F"], // orange yellow blue
  piece26: ["L D D Lprime", "D D Fprime D F L D D Lprime", "Fprime D D F"], // red yellow blue
  piece37: ["","Fprime D D F L D D Lprime","L D D Lprime Fprime D D F"], // orange white green
  piece38: ["F D D F F D F","Rprime Dprime R L D Lprime","L Rprime Dprime Lprime R"], // red white green
  piece41: ["Fprime Dprime F","Fprime D F L D D Lprime","L D Lprime"], // orange yellow green
  piece42: ["Dprime Fprime D F L D D Lprime","D Fprime D D F","L Dprime Lprime"] // red yellow green
};

const expectedColors = [faceColors.left, faceColors.top, faceColors.front];

function positionPiece37(){
  return moveCornersPiece("piece37", expectedColors, stickerPieces)
}

export { positionPiece37 };

