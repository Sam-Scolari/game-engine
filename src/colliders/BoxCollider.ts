import Collider from "../Collider";

export default class BoxCollider extends Collider {
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
