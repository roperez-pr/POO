"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape = /** @class */ (function () {
    function Shape(x, y) {
        this.x = x;
        this.y = y;
    }
    Shape.prototype.getCenterX = function () {
        return this.x;
    };
    Shape.prototype.getCenterY = function () {
        return this.y;
    };
    Shape.prototype.draw = function () {
        console.log("Shape center at (".concat(this.x, ", ").concat(this.y, ")"));
        console.log("Shape area (".concat(this.getArea(), ")"));
        console.log("----------------------------");
        console.log("Shape info");
        console.log("============================");
        console.log(this.getInfo());
        console.log("----------------------------");
    };
    return Shape;
}());
exports.default = Shape;
//# sourceMappingURL=Shape.js.map