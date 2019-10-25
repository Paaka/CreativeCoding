const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: 'A4',
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0,0, width, height)

    context.beginPath();
    context.arc(width /2, height /2, 500,  0, Math.PI * 2, false);
    context.fillStyle = 'orangered';
    context.fill();

    context.lineWidth = 10;
    context.strokeStyle = 'blue';
    context.stroke();
  };
};

canvasSketch(sketch, settings);
