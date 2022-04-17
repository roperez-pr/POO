import Rectangle from './Rectangle'

export default class Square extends Rectangle {
  private side: number

  constructor (x: number, y: number, side: number) {
    super(x, y, side, side)

    if (side <= 0) {
      throw new Error('Side must be bigger than zero')
    }

    this.side = side
  }

  public getSide (): number {
    return this.side
  }

  public getInfo (): string {
    return `Square with SIDE:${this.side}`
  }
}
