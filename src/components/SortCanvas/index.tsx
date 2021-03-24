import React, { useEffect, useRef } from 'react';

const SortCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    const context = canvas?.getContext('2d');
    if (context !== null && context !== undefined) {
      //Our first draw
      context.fillStyle = '#000000';
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    }
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default SortCanvas;
