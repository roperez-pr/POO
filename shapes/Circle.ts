import Shape from './Shape'

export default class Circle extends Shape {
  private radio: number

  constructor (x: number, y: number, r: number) {
    super(x, y)
    this.radio = r
  }

  public getRadio (): number {
    return this.radio
  }

  public getArea (): number {
    return Math.PI * Math.pow(this.radio, 2)
  }

  public getInfo (): string {
    return `Circle with RADIO:${this.radio}`
  }
}
