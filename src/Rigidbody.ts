import GameObject from "./GameObject";

export default class Rigidbody {
  gameObject: GameObject;
  gravity = 1;
  gravityDirection = Math.PI;
  terminalVelocity = 5;
  velocity = {
    x: 0,
    y: 0,
  };
  angularVelocity = 0;
  linearDrag = 0.2;
  anglularDrag = 0.5;
  deltaTime = 1;
  lock = false;

  constructor(gameObject: GameObject) {
    this.gameObject = gameObject;
  }

  addForce(amount: number, direction?: number) {
    console.log(this.deltaTime);
    this.velocity.x -=
      Math.sin(direction || this.gameObject.direction) *
      amount *
      this.deltaTime;
    this.velocity.y +=
      Math.cos(direction || this.gameObject.direction) *
      amount *
      this.deltaTime;
  }

  addTorque(radians: number) {
    this.angularVelocity += radians;
  }

  update(deltaTime: number) {
    this.deltaTime = deltaTime;

    if (!this.lock) {
      if (this.gravity > 0) {
        this.addForce(this.gravity, this.gravityDirection);
      }

      // Apply drag
      this.velocity.x -=
        this.velocity.x * (this.linearDrag * 5) * this.deltaTime;
      this.velocity.y -=
        this.velocity.y * (this.linearDrag * 5) * this.deltaTime;
      this.angularVelocity *= 1 - this.anglularDrag;

      // if (
      //   this.velocity.x >
      //   this.terminalVelocity * Math.sign(this.gameObject.direction)
      // ) {
      //   this.velocity.x =
      //     this.terminalVelocity * Math.sign(this.gameObject.direction);
      // }

      // if (
      //   this.velocity.y >
      //   this.terminalVelocity * Math.sign(this.gameObject.direction)
      // ) {
      //   this.velocity.y =
      //     this.terminalVelocity * Math.sign(this.gameObject.direction);
      // }

      // Update position and direction
      this.gameObject.position.x -= this.velocity.x;
      this.gameObject.position.y -= this.velocity.y;
      this.gameObject.direction += this.angularVelocity;
    }
  }
}
