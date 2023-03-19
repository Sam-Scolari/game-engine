import Scene from "./Scene";
import { GameOptions } from "./types";

export default class Game {
  private context: CanvasRenderingContext2D;
  private previousTime = performance.now();
  private lock = false;
  private eventCanFire: boolean;

  options: GameOptions = {};
  scene: Scene;
  fps = 0;
  timeStamp = performance.now();
  viewport: {
    width: number;
    height: number;
  };
  clipPath?: Path2D;
  inputs = {};

  constructor(canvas: HTMLCanvasElement, options?: GameOptions) {
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
    });

    // Do not accept inputs when more than {canvas * ratio} is on screen
    const ratio = 0.5;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].intersectionRatio > ratio) {
          if (options?.pauseWhenOffscreen) {
            this.pause();
          }
          this.eventCanFire = true;
        } else {
          this.resume();
          this.eventCanFire = false;
        }
      },
      { threshold: ratio }
    );
    observer.observe(canvas);

    // Handle input
    document.addEventListener("keydown", (e) => {
      if (e.key == " " && e.target == document.body) {
        e.preventDefault();
      }

      if (this.eventCanFire) {
        this.inputs[e.key] = true;
      }
    });
    document.addEventListener("keyup", (e) => {
      if (this.eventCanFire) {
        this.inputs[e.key] = false;
      }
    });

    if (options) this.options = options;

    if (options?.hideCursor) {
      context.canvas.style.cursor = "none";
    }
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

      this.viewport = {
        width: this.context.canvas.width,
        height: this.context.canvas.height,
      };

      this.timeStamp = time;

      if (this.scene) {
        this.context.save();
        if (this.clipPath) {
          this.context.clip(this.clipPath);
        }
        this.scene.update(this.inputs, (time - this.previousTime) / 1000);
        this.scene.render(this.context, this.options?.debug);
        this.context.restore();
      }
    }

    this.fps = Math.floor(1 / ((time - this.previousTime) / 1000));
    this.previousTime = time;
    requestAnimationFrame(this.loop.bind(this));
  }

  start(onStart?: Function) {
    if (onStart) onStart();
    this.loop(performance.now());
  }

  pause(onPause?: Function) {
    if (onPause) onPause();
    this.lock = true;

    for (const key of Object.keys(this.inputs)) {
      this.inputs[key] = false;
    }
  }

  resume(onResume?: Function) {
    if (onResume) onResume();
    this.lock = false;
  }

  load(scene: Scene, onLoad?: (scene: Scene) => void) {
    if (onLoad) onLoad(scene);
    this.scene = scene;
  }

  onKeyDown(callback: (e: KeyboardEvent) => void) {
    document.addEventListener("keydown", callback);
  }

  onClick(callback: (e: MouseEvent) => void) {
    this.context.canvas.addEventListener("click", callback);
  }
}
