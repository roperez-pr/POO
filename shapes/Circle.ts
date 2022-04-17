import Shape from './Shape'

export default class Circle extends Shape {
  private radio: number

  constructor (x: number, y: number, radio: number) {
    super(x, y)
    if (radio <= 0) {
      throw new Error('Radio must be bigger than zero')
    }
    this.radio = radio
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
