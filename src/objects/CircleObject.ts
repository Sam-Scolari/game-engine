import GameObject from "../GameObject";

export default class CircleObject extends GameObject {
  constructor() {
    super((context) => {
      context.save();
      context.fillStyle = this.fill;
      context.arc(
        this.position.x,
        this.position.y,
        this.width / 2,
        0,
        Math.PI * 2
      );
      context.restore();
    });
  }
}
