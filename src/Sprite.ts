import { v4 } from "uuid";

export default class Sprite {
  id = v4();
  image = new Image();
  visible = true;

  constructor(image: string, width?: number, height?: number) {
    if (width || height) {
      this.image = new Image(width, height);
    }

    this.image.src = image;
  }
}
