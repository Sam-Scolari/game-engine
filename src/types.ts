export type Position = {
  x: number;
  y: number;
};

export type Size = {
  width: number;
  height: number;
};

export type Velocity = {
  x: number;
  y: number;
};

export type GameOptions = {
  startPaused?: boolean;
  pauseWhenOffscreen?: boolean;
  hideCursor?: boolean;
  overrideObserverRatio?: number;
  debug?: {
    fps?: boolean;
    forceVectors?: boolean;
    colliders?: boolean;
    time?: boolean;
    controls?: boolean;
  };
};
