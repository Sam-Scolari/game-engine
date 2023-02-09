import { v4 } from "uuid";
import { GameObject } from "../GameObject";

export default class ImageObject implements GameObject {
  id = v4();
  position = { x: 0, y: 0 };
  size = { width: 0, height: 0 };
  velocity = { x: 0, y: 0 };
  angle = 0;
  image = new Image();
  visible = true;

  constructor(image: string) {
    this.image.src = image;
    this.size = {
      width: this.image.width,
      height: this.image.height,
    };
  }

  render(context: CanvasRenderingContext2D) {
    if (this.visible) {
      context.drawImage(this.image, this.position.x, this.position.y);
    }
  }

  update() {}
}
