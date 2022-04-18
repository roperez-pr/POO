import Rectangle from './shapes/Rectangle'

export default class App {
  doTestRectangleArea (rectangle: Rectangle) {
    rectangle.setWidth(2)
    rectangle.setHeight(5)

    const area: number = rectangle.getArea()

    if (area !== 2 * 5) {
      throw new Error(`Rectangle does't satisfy AREA calculation requiriment.`)
    }

    console.log(`AREA calculation is OK, current rectangle's area is: ${area}`)
  }
}
