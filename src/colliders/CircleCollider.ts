import { Collider } from "../Collider";
import { GameObject } from "../GameObject";
import { Position, Size } from "../types";

export default class CircleCollider implements Collider {
  gameObject: GameObject;

  constructor(gameObject: GameObject) {
    this.gameObject = gameObject;
  }

  draw() {
    // this.ctx.beginPath();
    // this.ctx.rect(this.x, this.y, this.w, this.h);
    // this.ctx.stroke();
  }

  isColliding(collider: CircleCollider) {
    return false;
  }
}
