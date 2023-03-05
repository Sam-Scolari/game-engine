import { v4 } from "uuid";
import Rigidbody from "./Rigidbody";
import Collider from "./Collider";

export default class GameObject {
  id = v4();
  position = { x: 0, y: 0 };
  size = { width: 0, height: 0 };
  velocity = { x: 0, y: 0 };
  direction = 0;
  renderDirection = true;
  visible = true;
  physics: Rigidbody;
  collider = new Collider();

  render(context: CanvasRenderingContext2D) {}
  update(inputs: { [key: string]: boolean }) {
    if (this.onUpdate) this.onUpdate(inputs);
  }
  onUpdate: (inputs: { [key: string]: boolean }) => void;

  isColliding(gameObject: GameObject) {
    return this.collider.isColliding(gameObject);
  }
}
