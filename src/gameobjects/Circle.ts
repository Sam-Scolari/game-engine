import GameObject from "../GameObject";

export default class Circle extends GameObject {
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
}
