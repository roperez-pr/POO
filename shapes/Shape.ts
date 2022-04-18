export default abstract class Shape {
  private x: number
  private y: number

  constructor (x: number, y: number) {
    this.x = x
    this.y = y
  }

  public getCenterX (): number {
    return this.x
  }
  public getCenterY (): number {
    return this.y
  }

  public draw (): void {
    console.log(`Shape center at (${this.x}, ${this.y})`)
    console.log(`Shape area (${this.getArea()})`)
    console.log(`----------------------------`)
    console.log(`Shape info`)
    console.log(`============================`)
    console.log(this.getInfo())
    console.log(`----------------------------`)
  }

  public abstract getArea (): number
  public abstract getInfo (): string
}
