"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.doTestRectangleArea = function (rectangle) {
        rectangle.setWidth(2);
        rectangle.setHeight(5);
        var area = rectangle.getArea();
        if (area !== 2 * 5) {
            throw new Error("Rectangle does't satisfy AREA calculation requiriment.");
        }
        console.log("AREA calculation is OK, current rectangle's area is: ".concat(area));
    };
    return App;
}());
exports.default = App;
//# sourceMappingURL=RectangleApp.js.map