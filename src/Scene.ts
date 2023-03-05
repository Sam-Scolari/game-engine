import { v4 } from "uuid";
import GameObject from "./GameObject";
import { GameOptions } from "./types";

export default class Scene {
  id = v4();
  gameObjects: GameObject[] = [];
  background?: string | CanvasGradient | CanvasPattern;

  render(context: CanvasRenderingContext2D, debug: GameOptions["debug"]) {
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

      if (debug?.colliders) {
        context.save();
        gameObject.collider.render(context);
        context.restore();
      }
    });
  }

  update(inputs: { [key: string]: boolean }) {
    if (this.onUpdate) this.onUpdate(inputs);
    this.gameObjects.forEach((gameObject) => {
      gameObject.update(inputs);
      gameObject.collider.update(gameObject);
    });
  }
  onUpdate: (inputs: { [key: string]: boolean }) => void;

  add(gameObject: GameObject, onAdd?: (gameObject: GameObject) => void) {
    if (onAdd) onAdd(gameObject);
    this.gameObjects.push(gameObject);
  }

  remove(gameObject: GameObject, onRemove?: (gameObject: GameObject) => void) {
    if (onRemove) onRemove(gameObject);
    this.gameObjects.filter((item) => item.id !== gameObject.id);
  }
}
