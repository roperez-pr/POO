import Shape from './Shape'

export default class Rectangle extends Shape {
  private width: number
  private height: number

  constructor (x: number, y: number, width: number, height: number) {
    super(x, y)

    if (width <= 0) {
      throw new Error('Width must be bigger than zero')
    }
    if (height <= 0) {
      throw new Error('Height must be bigger than zero')
    }

    this.width = width
    this.height = height
  }

  public getWidth (): number {
    return this.width
  }
  public setWidth (width: number): void {
    this.width = width
  }
  public getHeight (): number {
    return this.height
  }
  public setHeight (height: number): void {
    this.height = height
  }
  public getArea (): number {
    return this.width * this.height
  }

  public getInfo (): string {
    return `Rectangle with WIDTH:${this.width} and HEIGHT:${this.height}`
  }
}
