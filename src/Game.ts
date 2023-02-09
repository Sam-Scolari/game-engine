import Inputs from "./Inputs";
import Scene from "./Scene";

export default class Game extends Inputs {
  private context: CanvasRenderingContext2D;
  private previousTime = performance.now();
  private lock = false;
  scene: Scene;
  fps = 0;
  viewport: {
    width: number;
    height: number;
  };
  clipPath?: () => Path2D;
  private shouldClipPath = true;

  constructor(
    canvas: HTMLCanvasElement,
    options?: {
      debug?: {
        fps?: boolean;
        forceVectors?: boolean;
        colliders?: boolean;
        time?: boolean;
        controls?: boolean;
      };
    }
  ) {
    super(canvas);

    const context = canvas.getContext("2d");

    if (context) this.context = context;
    else throw new Error("CanvasContext2D is undefined");

    this.viewport = {
      width: context.canvas.width,
      height: context.canvas.height,
    };

    context.canvas.width = context.canvas.clientWidth;
    context.canvas.height = context.canvas.clientHeight;

    window.addEventListener("resize", () => {
      context.canvas.width = context.canvas.clientWidth;
      context.canvas.height = context.canvas.clientHeight;
      this.viewport = {
        width: context.canvas.width,
        height: context.canvas.height,
      };
      this.shouldClipPath = true;
    });
  }

  private loop(time: DOMHighResTimeStamp) {
    if (!this.lock) {
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
      this.previousTime = time;

      if (this.scene) {
        if (this.shouldClipPath && this.clipPath) {
          this.context.clip(this.clipPath());
          this.shouldClipPath = false;
        }

        this.scene.update();
        this.scene.render(this.context);
      }
    }

    requestAnimationFrame(this.loop.bind(this));
  }

  start(onStart?: Function) {
    if (onStart) onStart();
    this.loop(performance.now());
  }

  pause(onPause?: Function) {
    if (onPause) onPause();
    this.lock = true;
  }

  resume(onResume?: Function) {
    if (onResume) onResume();
    this.lock = false;
  }

  load(scene: Scene, onLoad?: (scene: Scene) => void) {
    if (onLoad) onLoad(scene);
    this.scene = scene;
  }
}
