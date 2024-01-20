function positionPiece10() {
  const piece10Sticker = document.querySelector("#piece10 .right .sticker");
  
  if(piece10Sticker.classList.contains("red")) return
  
  return "F D Fprime D F D D Fprime D"
}

export { positionPiece10 };

