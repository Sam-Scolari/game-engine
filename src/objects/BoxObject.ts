import { v4 } from "uuid";
import BoxCollider from "../colliders/BoxCollider";
import { GameObject } from "../GameObject";

export default class BoxObject implements GameObject {
  id = v4();
  position = { x: 0, y: 0 };
  size = { width: 0, height: 0 };
  velocity = { x: 0, y: 0 };
  angle = 0;
  visible = true;
  fill: string;
  stroke: string;
  collider: BoxCollider;

  render(context: CanvasRenderingContext2D) {
    if (this.visible) {
      context.fillStyle = this.fill;
      context.strokeStyle = this.stroke;
      context.fillRect(
        this.position.x,
        this.position.y,
        this.size.width,
        this.size.height
      );
    }
  }

  update() {}
}
