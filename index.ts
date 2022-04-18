import Rectangle from './shapes/Rectangle'
import Square from './shapes/Square'
import App from './RectangleApp'

const rectangle: Rectangle = new Rectangle(20, 20, 5, 10)
const anotherRectangle: Rectangle = new Square(100, 100, 20)

const app: App = new App()

app.doTestRectangleArea(rectangle)
app.doTestRectangleArea(anotherRectangle)
