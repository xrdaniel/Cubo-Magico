import { isStickerPositionCorrect } from "./utils.js";

function moveEdgesPiece(pieceIdCurrent, expectedColors, stickerPieces) {
  const pieceStickersCurrent  = document.querySelectorAll(`#${pieceIdCurrent} .sticker`)
  const isCorrectPosition = isStickerPositionCorrect(pieceStickersCurrent, expectedColors);
  
  if (isCorrectPosition) return;

  for (const pieceId in stickerPieces) {
  const pieceStickers = document.querySelectorAll(`#${pieceId} .sticker`);
  const { correctRotation, wrongRotation } = {
    correctRotation: isStickerPositionCorrect(pieceStickers, expectedColors),
    wrongRotation: isStickerPositionCorrect(pieceStickers, expectedColors.slice().reverse()),
   };

    if (correctRotation) return stickerPieces[pieceId][0];
    if (wrongRotation) return stickerPieces[pieceId][1];
  }
}

export { moveEdgesPiece };

