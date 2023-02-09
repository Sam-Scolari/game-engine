import { v4 } from "uuid";
import { GameObject } from "../GameObject";

export default class CircleObject implements GameObject {
  id = v4();
  position = { x: 0, y: 0 };
  size = { width: 0, height: 0 };
  velocity = { x: 0, y: 0 };
  angle = 0;
  visible = true;
  fill: string;
  stroke: string;

  render(context: CanvasRenderingContext2D) {
    if (this.visible) {
      context.fillStyle = this.fill;
      context.strokeStyle = this.stroke;
      context.arc(
        this.position.x,
        this.position.y,
        this.size.width / 2,
        0,
        Math.PI * 2
      );
    }
  }

  update() {}
}
