import { GameObject } from "./GameObject";

export type Collider = {
  gameObject: GameObject;
  draw: Function;
  isColliding: Function;
};
