import Rectangle from './Rectangle'

export default class Square extends Rectangle {
  private side: number

  constructor (x: number, y: number, side: number) {
    super(x, y, side, side)
  }

  public setWidth (width: number): void {
    super.setWidth(width)
    super.setHeight(width)
  }

  public setHeight (height: number): void {
    super.setHeight(height)
    super.setWidth(height)
  }

  public getInfo (): string {
    return `Square with SIDE:${this.side}`
  }
}
