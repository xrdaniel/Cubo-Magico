import { whiteCross } from './CFOP/CROSS/whiteCross.js';
import { createCubePieces } from './createcubePieces.js';
import { assembleCube } from './cube.js';
import { mouseDown, touchDown } from './events.js';
import { shuffle } from './shuffle.js';

createCubePieces(26)

const shuffleElement =  document.querySelector("#shuffle")
const solverElement =  document.querySelector("#solver")

document.ondragstart = function() { return false; }
window.addEventListener('load', assembleCube);
scene.addEventListener('mousedown', mouseDown);
scene.addEventListener('touchstart', touchDown);

shuffleElement.addEventListener('click', function(){
  disabledElemet(shuffleElement)
  shuffle()
});

solverElement.addEventListener('click', () => {
  disabledElemet(solverElement)
  whiteCross()
});

function disabledElemet(element){
  element.disabled = true
  element.style.display = "none"
  setTimeout(() => {
    element.disabled = false
    element.style.display = "initial"
}, 9000);
}

shuffle()

