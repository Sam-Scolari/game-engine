import GameObject from "./GameObject";

export default class Rigidbody {
  gameObject: GameObject;
  velocity = {
    x: 0,
    y: 0,
  };
  angularVelocity = 0;
  linearDrag = 0.01;
  anglularDrag = 0.5;

  constructor(gameObject: GameObject) {
    this.gameObject = gameObject;
    setInterval(() => this.update(), 10);
  }

  addForce(amount: number, direction?: number) {
    this.velocity.x -=
      Math.sin(direction || this.gameObject.direction) * amount;
    this.velocity.y +=
      Math.cos(direction || this.gameObject.direction) * amount;
  }

  addTorque(radians: number) {
    this.angularVelocity += radians;
  }

  update() {
    // Apply gravity and drag
    this.velocity.x *= 1 - this.linearDrag;
    this.velocity.y *= 1 - this.linearDrag;
    this.angularVelocity *= 1 - this.anglularDrag;

    // Update position and direction
    this.gameObject.position.x -= this.velocity.x;
    this.gameObject.position.y -= this.velocity.y;
    this.gameObject.direction += this.angularVelocity;
  }
}
