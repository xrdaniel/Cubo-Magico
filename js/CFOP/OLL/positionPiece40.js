const stickerPieces = {
  piece10: "L D Lprime D L D D Lprime D",
  piece24: "F D Fprime D F D D Fprime D L D Lprime D L D D Lprime D",
};

function hasClass(element) {
  return element.classList.contains("green");
}

function positionPiece40() {  
  const piece40Sticker = document.querySelector("#piece40 .front .sticker");
  if(hasClass(piece40Sticker)) return

  for (const pieceId in stickerPieces) {
    const pieceStickers = document.querySelectorAll(`#${pieceId} .sticker`);

    if (hasClass(pieceStickers[0]) || hasClass(pieceStickers[1])) return (stickerPieces[pieceId]);
  }
}

export { positionPiece40 };

