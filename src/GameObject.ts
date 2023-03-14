import { v4 } from "uuid";
import Rigidbody from "./Rigidbody";
import Collider from "./Collider";

export default class GameObject {
  id = v4();
  tag: string;
  position = { x: 0, y: 0 };
  size = { width: 0, height: 0 };
  direction = 0;
  freezeRotation = false;
  visible = true;
  physics: Rigidbody;
  collider = new Collider();

  render(context: CanvasRenderingContext2D) {}
  update(inputs: { [key: string]: boolean }) {
    if (this.direction > Math.PI * 2) {
      this.direction %= Math.PI * 2;
    }

    if (this.direction < -(Math.PI * 2)) {
      this.direction %= -(Math.PI * 2);
    }

    if (this.physics) {
      this.physics.update();
    }
    if (this.onUpdate) this.onUpdate(inputs);
  }
  onUpdate: (inputs: { [key: string]: boolean }) => void;

  collidesWith(gameObject: GameObject) {
    return this.collider.isColliding(gameObject);
  }
}
