import { Collider } from "../Collider";
import { GameObject } from "../GameObject";
import { Position, Size } from "../types";

export default class BoxCollider implements Collider {
  gameObject: GameObject;

  constructor(gameObject: GameObject) {
    this.gameObject = gameObject;
  }

  draw() {
    // this.ctx.beginPath();
    // this.ctx.rect(this.x, this.y, this.w, this.h);
    // this.ctx.stroke();
  }

  isColliding(collider: BoxCollider) {
    return !(
      this.gameObject.position.x >
        collider.gameObject.position.x + collider.gameObject.size.width ||
      this.gameObject.position.x + this.gameObject.size.width <
        collider.gameObject.position.x ||
      this.gameObject.position.y >
        collider.gameObject.position.y + collider.gameObject.size.height ||
      this.gameObject.position.y + this.gameObject.size.height <
        collider.gameObject.position.y
    );
  }
}
