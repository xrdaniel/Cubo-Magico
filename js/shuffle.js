import { animateRotation } from './cube.js';

function shuffle() {
  for(let i = 0; i < 25; i++){
    const time = i * 500; ;
    var isEven = i % 2 === 0;
    setTimeout(()=>{
      animateRotation(Math.floor(Math.random() * 5), isEven, Date.now()) 
    },time)
  }  
}

export { shuffle };

