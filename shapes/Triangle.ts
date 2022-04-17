import Shape from './Shape'

export default class Triangle extends Shape {
  private base: number
  private height: number

  constructor (x: number, y: number, base: number, height: number) {
    super(x, y)
    if (base <= 0) {
      throw new Error('Base must be bigger than zero')
    }
    if (height <= 0) {
      throw new Error('Height must be bigger than zero')
    }

    this.base = base
    this.height = height
  }

  public getBase (): number {
    return this.base
  }
  public getHeight (): number {
    return this.height
  }

  public getArea (): number {
    return (this.base * this.height) / 2
  }

  public getInfo (): string {
    return `Triangle with BASE:${this.base} and HEIGHT:${this.height}`
  }
}
