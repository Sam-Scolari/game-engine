import GameObject from "../GameObject";

export default function Blink(gameObject: GameObject, milliseconds: number) {
  if (Math.floor(Date.now() / milliseconds) % 2) {
    gameObject.visible = false;
  } else gameObject.visible = true;
}
