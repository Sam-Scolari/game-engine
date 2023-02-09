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
      context.translate(this.position.x, this.position.y);
      context.rotate(this.direction);
      context.drawImage(
        this.image,
        -this.size.width / 2,
        -this.size.height / 2
      );
    }
  }
}
