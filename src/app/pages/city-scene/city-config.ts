export class CityConfig {
  readonly size: Size;
  readonly background: string;

  constructor(input: any) {
    this.size = new Size(input.size);
    this.background = input.background;
  }
}

export class Size {
  readonly width: number;
  readonly height: number;

  constructor(input: any) {
    this.width = input.width;
    this.height = input.height;
  }
}
