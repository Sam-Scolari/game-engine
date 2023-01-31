import GameObject from "../GameObject";

export default class ImageObject extends GameObject {
  constructor(image: string) {
    super((context) => {
      context.drawImage(this.image, this.position.x, this.position.y);
    });
    this.image.src = image;
    this.width = this.image.width;
    this.height = this.image.height;
  }
}
