export default class Rigidbody {
  gravity = 1;
  mass = 1;
  velocity: {
    x: 0;
    y: 0;
  };
  acceleration = 1;
  terminalVelocity = Infinity;
  linearDrag = 1;
  anglularDrag = 1;
  freezePosition = false;
  freezeRotation = false;
  forces: {} = [];

  addForce(amount: number, direciton?: number) {}
}
