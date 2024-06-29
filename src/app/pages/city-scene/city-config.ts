export class CityConfig {
  readonly size: Size;

  constructor(input: any) {
    this.size = new Size(input.size);
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
