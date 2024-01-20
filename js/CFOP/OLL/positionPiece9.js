const stickerPieces = {
  piece10: "D D",
  piece24: "D",
  piece40: "Dprime",
};

function hasClass(element) {
  return element.classList.contains("orange");
}

function positionPiece9() {
  const piece9Sticker = document.querySelector("#piece9 .left .sticker");

  if (hasClass(piece9Sticker)) return;

  for (const pieceId in stickerPieces) {
    const pieceStickers = document.querySelectorAll(`#${pieceId} .sticker`);

    if (hasClass(pieceStickers[0]) || hasClass(pieceStickers[1])) return stickerPieces[pieceId]
  }
}

export { positionPiece9 };

