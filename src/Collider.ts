import { GameObject } from "./GameObject";
import BoxCollider from "./colliders/BoxCollider";
import CircleCollider from "./colliders/CircleCollider";

export type Collider = {
  gameObject: GameObject;
  draw: Function;
  isColliding: (collider: BoxCollider | CircleCollider) => boolean;
};
