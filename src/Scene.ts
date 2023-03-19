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
      if (gameObject.visible) {
        context.translate(gameObject.position.x, gameObject.position.y);
        context.scale(gameObject.scale.x, gameObject.scale.y);
        if (!gameObject.freezeRotation) context.rotate(gameObject.direction);
        gameObject.render(context);
      }
      context.restore();

      if (debug?.colliders) {
        context.save();
        gameObject.collider.render(context);
        context.restore();
      }
    });
  }

  update(inputs: { [key: string]: boolean }, deltaTime: number) {
    if (this.onUpdate) this.onUpdate(inputs, deltaTime);
    this.gameObjects.forEach((gameObject) => {
      gameObject.update(inputs, deltaTime);
      gameObject.collider.update(gameObject);
    });
  }
  onUpdate: (inputs: { [key: string]: boolean }, deltaTime: number) => void;

  add(gameObject: GameObject, onAdd?: (gameObject: GameObject) => void) {
    if (onAdd) onAdd(gameObject);
    this.gameObjects.push(gameObject);
  }

  remove(gameObject: GameObject, onRemove?: (gameObject: GameObject) => void) {
    if (onRemove) onRemove(gameObject);

    this.gameObjects = this.gameObjects.filter(
      (item) => item.id !== gameObject.id
    );
  }

  getGameObjectsByTag(tag: string) {
    return this.gameObjects.filter((gameObject) => gameObject.tag === tag);
  }
}
