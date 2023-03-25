import GameObject from "../GameObject";

export default class Circle extends GameObject {
  fill: string;
  stroke: string;

  render(context: CanvasRenderingContext2D) {
    if (this.visible) {
      context.fillStyle = this.fill;
      context.strokeStyle = this.stroke;
      context.beginPath();
      context.arc(0, 0, this.size.width / 2, 0, Math.PI * 2);
      context.closePath();
      if (this.fill) context.fill();
      if (this.stroke) context.stroke();
    }
  }
}
