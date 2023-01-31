import Scene from "./Scene";

export default class Game {
  private context: CanvasRenderingContext2D;
  private previousTime = performance.now();

  scene: Scene;
  fps = 0;

  constructor(_canvas: HTMLCanvasElement) {
    const context = _canvas.getContext("2d");

    if (context) this.context = context;
    else throw new Error("Error getting canvas Context2D");
  }

  private loop(time: DOMHighResTimeStamp) {
    if (this.previousTime) {
      this.fps = Math.floor(1 / ((time - this.previousTime) / 1000));
    }

    if (this.scene) this.scene.render(this.context);

    requestAnimationFrame(this.loop);
  }

  start() {
    this.loop(performance.now());
  }
}
