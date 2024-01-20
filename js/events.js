import { animateRotation } from './cube.js';
import { calcularFaceValue } from './utils.js';

function handleDown(downEvent, eventHandler) {
	const pivot = document.querySelector("#pivot");
	const downCurrentEvent = downEvent.type === "touchstart" ? downEvent.touches[0] : downEvent;

	let startTransformCoordsXY = pivot.style.transform.match(/-?\d+\.?\d*/g).map(Number);
	let clickedElement = downEvent.target.closest('.element');
	let face = [].indexOf.call((clickedElement || cube).parentNode.children, clickedElement);

	function handleMove(moveEvent) {
		const moveCurrentEvent = moveEvent.type === "touchmove" ? moveEvent.touches[0] : moveEvent;

		if (clickedElement) {
			var gid = /\d/.exec(document.elementFromPoint(moveCurrentEvent.pageX, moveCurrentEvent.pageY).id);
			if (gid && gid.input.includes('anchor')) {
					handleUp();
					var e = clickedElement.parentNode.children[calcularFaceValue(face, Number(gid) + 3)].hasChildNodes();
					animateRotation(calcularFaceValue(face, Number(gid) + 1 + 2 * e), e, Date.now());
			}
		} else {
			pivot.style.transform =
				'rotateX(' + (startTransformCoordsXY[0] - (moveCurrentEvent.pageY - downCurrentEvent.pageY) / 2) + 'deg)' +
				'rotateY(' + (startTransformCoordsXY[1] + (moveCurrentEvent.pageX - downCurrentEvent.pageX) / 2) + 'deg)';
		}
	}

	function handleUp() {
		document.body.appendChild(rotationGuide);
		scene.removeEventListener(eventHandler.moveEvent, handleMove);
		document.removeEventListener(eventHandler.upEvent, handleUp);
		scene.addEventListener(eventHandler.downEvent, handleDown);
	}

	(clickedElement || document.body).appendChild(rotationGuide);
	scene.addEventListener(eventHandler.moveEvent, handleMove);
	document.addEventListener(eventHandler.upEvent, handleUp);
	scene.removeEventListener(eventHandler.downEvent, handleDown);
}

function mouseDown(md_e) {
	handleDown(md_e, {
			downEvent: 'mousedown',
			moveEvent: 'mousemove',
			upEvent: 'mouseup'
	});
}

function touchDown(td_e) {
	handleDown(td_e, {
			downEvent: 'touchstart',
			moveEvent: 'touchmove',
			upEvent: 'touchend'
	});
}

export { mouseDown, touchDown };

