import GameObject from "./GameObject";
import BoxCollider from "./colliders/BoxCollider";
import CircleCollider from "./colliders/CircleCollider";

// export type Collider = {
//   gameObject: GameObject;
//   render: (context: CanvasRenderingContext2D) => void;
//   update: Function;
//   isColliding: (collider: BoxCollider | CircleCollider) => boolean;
// };

export default class Collider {
  gameObject: GameObject;

  constructor(gameObject: GameObject) {
    this.gameObject = gameObject;
  }

  render(context: CanvasRenderingContext2D) {
    context.fillStyle = "red";
    context.beginPath();
    context.rect(
      this.gameObject.position.x,
      this.gameObject.position.y,
      this.gameObject.size.width,
      this.gameObject.size.height
    );
    context.stroke();
  }
}
