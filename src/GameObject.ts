import { Position, Size, Velocity } from "./types";

export type GameObject = {
  id: string;
  position: Position;
  size: Size;
  angle: number;
  velocity: Velocity;

  render: (context: CanvasRenderingContext2D) => void;
  update: Function;
};
