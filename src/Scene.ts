import { v4 } from "uuid";
import { GameObject } from "./GameObject";

export default class Scene {
  id = v4();
  gameObjects: GameObject[] = [];
  background?: string | CanvasGradient | CanvasPattern;

  render(context: CanvasRenderingContext2D) {
    context.save();
    if (this.background) {
      context.fillStyle = this.background;
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    }
    context.restore();

    this.gameObjects.forEach((gameObject) => gameObject.update());

    context.save();
    this.gameObjects.forEach((gameObject) => gameObject.render(context));
    context.restore();
  }

  update() {}

  add(gameObject: GameObject) {
    this.gameObjects.push(gameObject);
  }

  remove(gameObject: GameObject) {
    this.gameObjects.filter((item) => item.id !== gameObject.id);
  }
}
