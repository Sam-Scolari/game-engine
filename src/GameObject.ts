import { v4 } from "uuid";

export default class GameObject {
  id = v4();
  position = { x: 0, y: 0 };
  size = { width: 0, height: 0 };
  velocity = { x: 0, y: 0 };
  direction = 0;
  visible = true;

  render(context: CanvasRenderingContext2D) {}
  update(inputs: { [key: string]: boolean }) {}
}
