import React, { useEffect, useRef } from 'react';

type Props = {
  draw: (ctx: CanvasRenderingContext2D) => void;
};

const Canvas: React.FC<Props> = ({ draw }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    let animationFrameId: number;

    if (ctx === null || ctx === undefined) {
      console.log(`Context is ${ctx}`);
      return;
    }

    const render = (): void => {
      draw(ctx);
      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return <canvas ref={canvasRef}></canvas>;
};

export default Canvas;
