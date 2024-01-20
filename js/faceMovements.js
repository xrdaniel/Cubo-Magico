function clockwiseFaceMovements(face){
  return `${face} D ${face} D ${face} Dprime ${face}prime Dprime ${face}prime`
}

function counterclockwiseFaceMovements(face){
  return `${face}prime Dprime ${face}prime Dprime ${face}prime D ${face} D ${face}`
}

function rotateFaceUpDown(face) {
  return `${face}prime Uprime ${face} U ${face}prime Uprime ${face} U`
}

function rotateFace(face, isCounterClockwise = false) {
  const faceMapping = {
    F: "B",
    R: "L",
    L: "R",
    B: "F"
  };

  const back = faceMapping[face] || "B";

  if (isCounterClockwise) {
    return `${back}prime D ${face} Dprime ${back} D ${face}prime Dprime`;
  } 

  return `D ${face} Dprime ${back}prime D ${face}prime Dprime ${back}`;
}
export { clockwiseFaceMovements, counterclockwiseFaceMovements, rotateFace, rotateFaceUpDown };

