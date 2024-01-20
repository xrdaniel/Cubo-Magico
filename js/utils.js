function calcularFaceValue(i, j) {
	return ([2, 4, 3, 5][j % 4 | 0] + i % 2 * ((j | 0) % 4 * 2 + 3) + 2 * (i / 2 |0)) % 6;
}

function getAxis(face) {
	return String.fromCharCode('X'.charCodeAt(0) + face / 2);
}

function isStickerPositionCorrect(stickers, expectedColors) {
  if(expectedColors.length == 3) {
    const primeiroElementoCorreto = stickers[0].classList[1] === expectedColors[0];
    const segundoElementoInvertido = stickers[1].classList[1] === expectedColors[2] && stickers[2].classList[1] === expectedColors[1];

    if(primeiroElementoCorreto && segundoElementoInvertido) return true
  }
  
  const stickerArray = Array.from(stickers);
  return stickerArray.every((sticker, index) => sticker.classList[1] === expectedColors[index]);
}

function pivotTransition(positionX,positionY){
  const pivot = document.querySelector("#pivot")
  pivot.style.transition = "1.5s"  
  pivot.style.transform = `rotateX(${positionX}deg) rotateY(${positionY}deg)` 
  setTimeout(() => {
    pivot.style.transition = "0s"
  }, 2000);
}

export { calcularFaceValue, getAxis, isStickerPositionCorrect, pivotTransition };

