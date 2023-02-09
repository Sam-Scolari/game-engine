import Collider from "../Collider";
import GameObject from "../GameObject";

export default class ImageObject extends GameObject {
  image = new Image();
  collider: Collider;

  constructor(image: string) {
    super();
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
}
