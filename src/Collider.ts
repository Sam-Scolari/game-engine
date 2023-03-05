import GameObject from "./GameObject";

export default class Collider {
  size = { width: 0, height: 0 };
  position = { x: 0, y: 0 };

  render(context: CanvasRenderingContext2D) {
    context.strokeStyle = "red";
    context.beginPath();

    context.strokeRect(
      this.position.x - this.size.width / 2,
      this.position.y - this.size.height / 2,
      this.size.width,
      this.size.height
    );

    context.stroke();
  }

  update(gameObject: GameObject) {
    this.size = gameObject.size;
    this.position = gameObject.position;
  }

  isColliding(gameObject: GameObject) {
    return !(
      this.position.x > gameObject.position.x + gameObject.size.width ||
      this.position.x + this.size.width < gameObject.position.x ||
      this.position.y > gameObject.position.y + gameObject.size.height ||
      this.position.y + this.size.height < gameObject.position.y
    );
  }
}
