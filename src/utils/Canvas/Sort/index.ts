class Bar {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  public draw = (ctx: CanvasRenderingContext2D): void => {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
}

class BarGraph {
  bars: Array<Bar>;
  dataset: Array<number>;
  canvasWidth: number;
  canvasHeight: number;

  constructor(
    dataset: Array<number>,
    canvasWidth: number,
    canvasHeight: number
  ) {
    this.bars = [];
    this.dataset = dataset;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.init();
  }

  public reinit = (canvasHeight: number, canvasWidth: number): void => {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.init();
  }

  public init = (): void => {
    const barWidth = this.canvasWidth / this.dataset.length;
    const barHeightStep = (this.canvasHeight * 0.7) / this.dataset.length;
    let x = 0;

    this.dataset.forEach((value) => {
      const barHeight = barHeightStep * value;
      this.bars.push(
        new Bar(x, this.canvasHeight - barHeight, barWidth, barHeight, 'black')
      );
      x += barWidth;
    });
  };

  public draw = (ctx: CanvasRenderingContext2D): void => {
    this.bars.forEach((bar) => {
      bar.draw(ctx);
    });
  };
}

export { BarGraph };
