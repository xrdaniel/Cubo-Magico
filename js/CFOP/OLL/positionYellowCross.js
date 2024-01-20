import { applyRotation } from "../../applyRotation.js";
import { yellowCrossGuidance } from "./yellowCrossGuidance.js";

const stickerPieces = [
  { id: "piece9"},
  { id: "piece10"},
  { id: "piece24"},
  { id: "piece40"},
];

const ROTATION_DELAY = 3000;

function UFR(face, right) {
  return `${face} ${right} D ${right}prime Dprime ${face}prime`;
}

function getStickerColor(pieceId, face = 'bottom') {
  const sticker = document.querySelector(`#${pieceId} .${face} .sticker`);
  return sticker ? sticker.classList[1] : null;
}

function applyRotationWithDelay(rotation) {
  applyRotation(rotation);
  setTimeout(() => {
    positionYellowCross();
  }, ROTATION_DELAY);
}

function positionYellowCross() {
  const isYellowCrossPositioned = stickerPieces.every(piece => getStickerColor(piece.id) === "yellow");

  if (isYellowCrossPositioned) {
   return yellowCrossGuidance()
  }

  const unmatchedStickers = stickerPieces.filter(piece => getStickerColor(piece.id) !== "yellow");

  if (unmatchedStickers.length === 4) {
    applyRotationWithDelay(UFR("F", "L"));
    return;
  }

  const yellowSticker = stickerPieces.find(piece => getStickerColor(piece.id) === "yellow");

  if (yellowSticker) {
    const nonYellowStickers = unmatchedStickers.filter(piece => getStickerColor(piece.id) !== "yellow");

    if(nonYellowStickers.length === 2) {
      if(nonYellowStickers[0].id === "piece9" && nonYellowStickers[1].id === "piece24" ) {
        applyRotationWithDelay(UFR("L","B"))
        return;
      }

      if(nonYellowStickers[0].id === "piece9" && nonYellowStickers[1].id === "piece40" ) {
        applyRotationWithDelay(UFR("F","L"))
        return;
      }

      if(nonYellowStickers[0].id === "piece10" && nonYellowStickers[1].id === "piece24" ) {
        applyRotationWithDelay(UFR("B","R"))
        return;
      }

      if(nonYellowStickers[0].id === "piece10" && nonYellowStickers[1].id === "piece40" ) {
        applyRotationWithDelay(UFR("R","F"))
        return;
      }

      if(nonYellowStickers[0].id === "piece9" && nonYellowStickers[1].id === "piece10" ) {
        applyRotationWithDelay(UFR("R","F"))
        return;
      }

      if(nonYellowStickers[0].id === "piece24" && nonYellowStickers[1].id === "piece40" ) {
        applyRotationWithDelay(UFR("F","L"))
        return;
      }
    }
  }
}


export { positionYellowCross };

