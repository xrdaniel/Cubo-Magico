import { isStickerPositionCorrect } from "./utils.js";

function moveCornersPiece(pieceIdCurrent, expectedColors, stickerPieces){
  const pieceStickersCurrent  = document.querySelectorAll(`#${pieceIdCurrent} .sticker`)
  const isCorrectPosition = isStickerPositionCorrect(pieceStickersCurrent, expectedColors);
  
  if (isCorrectPosition) return;

  for (const pieceId in stickerPieces) {
  const pieceStickers = document.querySelectorAll(`#${pieceId} .sticker`);

    const { correctRotation, wrongRotation, extraRotation } = {
      correctRotation: isStickerPositionCorrect(pieceStickers, expectedColors),
      wrongRotation: isStickerPositionCorrect(pieceStickers, [expectedColors[2],expectedColors[1],expectedColors[0]]),
      extraRotation: isStickerPositionCorrect(pieceStickers, [expectedColors[1], expectedColors[0], expectedColors[2]]),
    };

    if (correctRotation) return stickerPieces[pieceId][0];
    if (wrongRotation) return stickerPieces[pieceId][1];
    if (extraRotation) return stickerPieces[pieceId][2];
  }
}

export { moveCornersPiece };

