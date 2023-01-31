import { v4 } from "uuid";

export default class GameObject {
  id = v4();
  position = { x: 0, y: 0 };
  angle = 0;
  width = 50;
  height = 50;
  fill: "black";
  stroke: "black";
  image = new Image();

  render: (context: CanvasRenderingContext2D) => void;

  constructor(render: (context: CanvasRenderingContext2D) => void) {
    this.render = render;
  }
}
