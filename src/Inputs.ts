export default class Inputs {
  canvas: HTMLCanvasElement;
  eventCanFire: boolean;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const ratio = 0.5;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].intersectionRatio > ratio) {
          this.eventCanFire = true;
        } else this.eventCanFire = false;
      },
      { threshold: ratio }
    );

    observer.observe(canvas);
  }

  onKeyDown(callback: (e: KeyboardEvent) => void) {
    document.addEventListener("keydown", (e) => {
      if (this.eventCanFire) callback(e);
    });
  }

  onKeyPress(callback: (e: KeyboardEvent) => void) {}

  onKeyUp(callback: (e: KeyboardEvent) => void) {}

  onClick(callback: (e: MouseEvent) => void) {}

  onDoubleClick(callback: (e: MouseEvent) => void) {}

  onMouseDown(callback: (e: MouseEvent) => void) {}

  onMouseEnter(callback: (e: MouseEvent) => void) {}

  onMouseLeave(callback: (e: MouseEvent) => void) {}

  onMouseMove(callback: (e: MouseEvent) => void) {}

  onMouseOut(callback: (e: MouseEvent) => void) {}

  onMouseOver(callback: (e: MouseEvent) => void) {}

  onMouseUp(callback: (e: MouseEvent) => void) {}
}
