import GameObject from "../GameObject";
import { Position } from "../types";
import Span from "../Span";

export default class Text extends GameObject {
  font: string;
  fontSize: number;
  fontWeight: string;
  italic = false;
  fill: string;
  stroke: string;
  textNodes: (Span | string)[];

  constructor(textNodes: (Span | string)[]) {
    super();
    this.textNodes = textNodes;
  }

  render(context: CanvasRenderingContext2D) {
    let currentX = 0;

    for (const text of this.textNodes) {
      if (typeof text === "string") {
        context.font = `${this.italic ? "italic " : ""}${
          this.fontWeight ? `${this.fontWeight} ` : ""
        }${this.fontSize}px ${this.font}`;

        if (this.fill) {
          context.fillStyle = this.fill;
          context.fillText(text, currentX, 0);
        }
        if (this.stroke) {
          context.strokeStyle = this.stroke;
          context.strokeText(text, currentX, 0);
        }

        currentX += context.measureText(text).width;
      } else {
        text.render(context, currentX);
        currentX += context.measureText(text.text).width;
      }
    }
  }
}
