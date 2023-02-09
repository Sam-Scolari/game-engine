import Game from "./src/Game";
import Scene from "./src/Scene";

// Colliders
import Collider from "./src/Collider";
import BoxCollider from "./src/colliders/BoxCollider";
import CircleCollider from "./src/colliders/CircleCollider";

// GameObjects
import GameObject from "./src/GameObject";
import BoxObject from "./src/gameobjects/BoxObject";
import CircleObject from "./src/gameobjects/CircleObject";
import ImageObject from "./src/gameobjects/ImageObject";
import PathObject from "./src/gameobjects/PathObject";

export default Game;

export {
  Scene,

  // Colliders
  Collider,
  BoxCollider,
  CircleCollider,

  // GameObjects
  GameObject,
  BoxObject,
  CircleObject,
  ImageObject,
  PathObject,
};
