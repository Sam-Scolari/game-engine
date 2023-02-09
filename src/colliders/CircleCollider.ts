import Collider from "../Collider";

export default class CircleCollider extends Collider {
  isColliding(collider: CircleCollider) {
    return false;
  }
}
