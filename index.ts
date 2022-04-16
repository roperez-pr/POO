import Circle from './shapes/Circle'
import Rectangle from './shapes/Rectangle'
import Triangle from './shapes/Triangle'

const circle: Circle = new Circle(10, 5, 30)
circle.draw()

const rectangle: Rectangle = new Rectangle(20, 20, 5, 10)
rectangle.draw()

const tirangle: Triangle = new Triangle(20, 20, 5, 10)
tirangle.draw()
