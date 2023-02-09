import Collider from "../Collider";
import GameObject from "../GameObject";

export default class BoxObject extends GameObject {
  fill: string;
  stroke: string;
  collider: Collider;
  path: Path2D;

  constructor(path: Path2D) {
    super();
    this.path = path;
  }

  render(context: CanvasRenderingContext2D) {
    if (this.visible) {
      context.fillStyle = this.fill;
      context.strokeStyle = this.stroke;
      context.fill(this.path);
    }
  }
}
