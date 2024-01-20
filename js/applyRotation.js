import { animateRotation } from "./cube.js";

const face = {
  L: 0,
  R: 1,
  U: 2,
  D: 3,
  B: 4,
  F: 5,
};

function applyRotation(moves){
  moves = moves.split(" ")
  for(let i = 0; i < moves.length; i++){
    const time = i * 500; 
    const counterClockwise = moves[i].includes("prime");

    if(counterClockwise){      
      const repeticoes = moves[i].replace(/[a-zA-Z]/g, '') || 1;

     for(let j = 0; j < repeticoes; j++){
        setTimeout(()=>{
            animateRotation(face[moves[i][0]], false, Date.now()) 
          },time + (j * 300))
      }

    } else {
      const repeticoes = moves[i].replace(/[a-zA-Z]/g, '') || 1;
      
      for(let j = 0; j < repeticoes; j++){
        setTimeout(()=>{
            animateRotation(face[moves[i][0]], true, Date.now()) 
          },time + (j * 300))
      }
    }    
  }  
}

export { applyRotation };

