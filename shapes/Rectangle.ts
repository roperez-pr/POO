import Shape from './Shape'

export default class Rectangle extends Shape {
  private width: number
  private height: number

  constructor (x: number, y: number, width: number, height: number) {
    super(x, y)
    this.width = width
    this.height = height
  }

  public getWidth (): number {
    return this.width
  }
  public getHeight (): number {
    return this.height
  }

  public getArea (): number {
    return this.width * this.height
  }

  public getInfo (): string {
    return `Rectangle with WIDTH:${this.width} and HEIGHT:${this.height}`
  }
}
