interface ICanvasLib {
  init: (zoom: number) => void;
  setPixel: (x: number, y: number) => void;
  setColor: (color: string) => void;
  clear: (color?: string) => void;
}