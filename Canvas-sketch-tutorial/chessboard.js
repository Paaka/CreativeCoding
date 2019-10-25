const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'orangered';
    var isEven = 1;
    
    for(let i=0;i<=1792;i +=256){
      
      if(isEven % 2 == 0){
       let x = 256;
       let isEvenInThisScope = 2;
       for(x; x<2048; x +=256){
         if(isEvenInThisScope % 2 === 0){
          context.fillRect(x,i, width/8, height/8)
         }
         isEvenInThisScope++;
       }  
      }else {
        let x = 0;
        let isUneven = 1;
        for(x; x<=1792;x +=256){
          
          if(isUneven % 2 === 1){
            context.fillRect(i,x, width/8, height/8);
          }
          isUneven++
        }

      };
      isEven++;
    } 
  };
};

canvasSketch(sketch, settings);
