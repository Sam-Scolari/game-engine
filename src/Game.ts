import Scene from "./Scene";

export default class Game {
  private context: CanvasRenderingContext2D;
  private previousTime = performance.now();

  scene: Scene;
  fps = 0;

  constructor(canvas: HTMLCanvasElement) {
    const context = canvas.getContext("2d");

    if (context) this.context = context;
    else throw new Error("Error getting canvas Context2D");
  }

  private loop(time: DOMHighResTimeStamp) {
    this.context.setTransform(1, 0, 0, 1, 0, 0);
    this.context.clearRect(
      0,
      0,
      this.context.canvas.width,
      this.context.canvas.height
    );

    if (this.previousTime) {
      this.fps = Math.floor(1 / ((time - this.previousTime) / 1000));
    }

    if (this.scene) {
      this.scene.update();
      this.scene.render(this.context);
    }

    requestAnimationFrame(this.loop);
  }

  start() {
    this.loop(performance.now());
  }
}
