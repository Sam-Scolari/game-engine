import GameObject from "../GameObject";

export default class Text extends GameObject {
  font: string;
  fontSize: number;
  fontWeight: string;
  italic = false;
  fill: string;
  stroke: string;
  text: string;
  width: TextMetrics;

  constructor(text: string) {
    super();
    this.text = text;
  }

  render(context: CanvasRenderingContext2D) {
    context.font = `${this.italic ? "italic " : ""}${
      this.fontWeight ? `${this.fontWeight} ` : ""
    }${this.fontSize}px ${this.font}`;

    this.width = context.measureText(this.text);

    if (this.fill) {
      context.fillStyle = this.fill;
      context.fillText(this.text, this.position.x, this.position.y);
    }
    if (this.stroke) {
      context.strokeStyle = this.stroke;
      context.strokeText(this.text, this.position.x, this.position.y);
    }

    // (function recur(node: string | Text[], x: number) {
    //   if (typeof node === "string") {
    //     if (this.fill) {
    //       context.fillStyle = this.fill;
    //       context.fillText(node, x, this.position.y);
    //     }
    //     if (this.stroke) {
    //       context.strokeStyle = this.stroke;
    //       context.strokeText(node, x, this.position.y);
    //     }
    //   } else {
    //     for (const child of node) {
    //       return recur(child, node.position.x + context.measureText(this.text));
    //     }

    //   }
    // })(this.text, this.position.x);
  }

}
