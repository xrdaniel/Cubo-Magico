import { calcularFaceValue, getAxis } from './utils.js';

const colors = ['orange','red', 'white','yellow','blue', 'green' ]
const pieces = document.getElementsByClassName('piece');

function getPieceById(face, index, corner) {
	return document.querySelector('#piece' +
		((1 << face) + (1 << calcularFaceValue(face, index)) + (1 << calcularFaceValue(face, index + 1)) * corner));
}

function assembleCube() {
	let id = 0;
  function moveTo(face) {
    id = id + (1 << face);
    pieces[i].children[face].appendChild(document.createElement('div'))
      .setAttribute('class', 'sticker ' + colors[face]);
    return 'translate' + getAxis(face) + '(' + (face % 2 * 4 - 2) + 'em)';
  }

  for (var x, i = 0; id = 0, i < 26; i++) {
    x = calcularFaceValue(i, i % 18),
    pieces[i].style.transform = 'rotateX(0deg)' + moveTo(i % 6) +
      (i > 5 ? moveTo(x) + (i > 17 ? moveTo(calcularFaceValue(x, x + 2)) : '') : ''),
    pieces[i].setAttribute('id', 'piece' + id);
  }
}

function swapPieces(face, times) {
	for (let i = 0; i < 6 * times; i++) {
		const piece1 = getPieceById(face, i / 2, i % 2);
		const piece2 = getPieceById(face, i / 2 + 1, i % 2);
		
		for (let j = 0; j < 5; j++) {
			const sticker1 = piece1.children[j < 4 ? calcularFaceValue(face, j) : face].firstChild;
			const	sticker2 = piece2.children[j < 4 ? calcularFaceValue(face, j + 1) : face].firstChild;
			const	className = sticker1 ? sticker1.className : '';

			if (className)
				sticker1.className = sticker2.className,
				sticker2.className = className;
		}
	}	
}

function animateRotation(face, isClockwiseDirection, currentTime) {
  const animationDuration = 300;
	const rotationSpeedFactor = .3 * (face % 2 * 2 - 1) * (2 * isClockwiseDirection - 1)
  const	cubes = Array(9).fill(pieces[face]).map(function (value, index) {
				return index ? getPieceById(face, index / 2, index % 2) : value;
			});
	(function rotatePieces() {
		const passed = Date.now() - currentTime;
    const	style = 'rotate' + getAxis(face) + '(' + rotationSpeedFactor * passed * (passed < animationDuration) + 'deg)';
		cubes.forEach(function (piece) {
			piece.style.transform = piece.style.transform.replace(/rotate.\(\S+\)/, style);
		});

		if (passed >= animationDuration)
			return swapPieces(face, 3 - 2 * isClockwiseDirection);
		requestAnimationFrame(rotatePieces);
	})();	
}

export { animateRotation, assembleCube, swapPieces };

