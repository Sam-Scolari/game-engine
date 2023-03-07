export default class Span {
  font: string;
  fontSize: number;
  fontWeight: string;
  italic = false;
  fill: string;
  stroke: string;
  text: string;

  constructor(text: string) {
    this.text = text;
  }

  render(context: CanvasRenderingContext2D, x: number) {
    context.font = `${this.italic ? "italic " : ""}${
      this.fontWeight ? `${this.fontWeight} ` : ""
    }${this.fontSize}px ${this.font}`;

    if (this.fill) {
      context.fillStyle = this.fill;
      context.fillText(this.text, x, 0);
    }
    if (this.stroke) {
      context.strokeStyle = this.stroke;
      context.strokeText(this.text, x, 0);
    }
  }
}
