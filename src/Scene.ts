import { v4 } from "uuid";
import { GameObject } from "./GameObject";

export default class Scene {
  id = v4();
  gameObjects: GameObject[] = [];
  backgroundColor: string;

  render(context: CanvasRenderingContext2D) {
    if (this.backgroundColor) {
      context.save();
      context.fillStyle = this.backgroundColor;
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
      context.restore();
    }

    this.gameObjects.forEach((gameObject) => gameObject.update());
    this.gameObjects.forEach((gameObject) => gameObject.render(context));
  }

  update() {}

  add(gameObject: GameObject) {
    this.gameObjects.push(gameObject);
  }

  remove(gameObject: GameObject) {
    this.gameObjects.filter((item) => item.id !== gameObject.id);
  }
}
