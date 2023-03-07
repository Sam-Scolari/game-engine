import GameObject from "../GameObject";
import Sprite from "../Sprite";

export default class Image extends GameObject {
  sprites: Sprite[];

  constructor(sprites: Sprite | Sprite[]) {
    super();

    if (sprites instanceof Array) {
      this.sprites = sprites;
      for (const sprite of sprites) {
        this.size = {
          width: sprite.image.width,
          height: sprite.image.height,
        };
      }
    } else {
      this.sprites = [sprites];
      this.size = {
        width: sprites.image.width,
        height: sprites.image.height,
      };
    }
  }

  render(context: CanvasRenderingContext2D) {
    for (const sprite of this.sprites) {
      if (sprite.visible) {
        context.drawImage(
          sprite.image,
          -this.size.width / 2,
          -this.size.height / 2
        );
      }
    }
  }
}
