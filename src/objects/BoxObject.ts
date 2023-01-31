import GameObject from "../GameObject";

export default class BoxObject extends GameObject {
  constructor() {
    super((context) => {
      context.save();
      context.fillStyle = this.fill;
      context.fillRect(
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
      context.restore();
    });
  }
}
