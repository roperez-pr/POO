"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle_1 = require("./shapes/Rectangle");
var Square_1 = require("./shapes/Square");
var RectangleApp_1 = require("./RectangleApp");
var rectangle = new Rectangle_1.default(20, 20, 5, 10);
var anotherRectangle = new Square_1.default(100, 100, 20);
var app = new RectangleApp_1.default();
app.doTestRectangleArea(rectangle);
app.doTestRectangleArea(anotherRectangle);
//# sourceMappingURL=index.js.map