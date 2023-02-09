import { v4 } from "uuid";
import GameObject from "./GameObject";

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

    this.gameObjects.forEach((gameObject) => {
      context.save();
      gameObject.render(context);
      context.restore();
    });
  }

  update(inputs: { [key: string]: boolean }) {
    this.gameObjects.forEach((gameObject) => gameObject.update(inputs));
  }

  add(gameObject: GameObject, onAdd?: (gameObject: GameObject) => void) {
    if (onAdd) onAdd(gameObject);
    this.gameObjects.push(gameObject);
  }

  remove(gameObject: GameObject, onRemove?: (gameObject: GameObject) => void) {
    if (onRemove) onRemove(gameObject);
    this.gameObjects.filter((item) => item.id !== gameObject.id);
  }
}
