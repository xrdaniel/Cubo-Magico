function createCubePieces(numPieces) {
  const cube = document.querySelector('#cube');
  const classes = ['left', 'right', 'top', 'bottom', 'back', 'front'];
  
  for (let i = 0; i < numPieces; i++) {
    const piece = document.createElement('div');
    piece.classList.add('piece');
    
    for (let j = 0; j < 6; j++) {
      const element = document.createElement('div');
      element.classList.add('element', classes[j]);
      piece.appendChild(element);
    }
    
    cube.appendChild(piece);
  }
}

export { createCubePieces };

