import GameObject from "../GameObject";

export default class Box extends GameObject {
  fill: string;
  stroke: string;

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
}
