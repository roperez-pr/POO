"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getCenterX() {
        return this.x;
    }
    getCenterY() {
        return this.y;
    }
    draw() {
        console.log(`Shape center at (${this.x}, ${this.y})`);
        console.log(`Shape area (${this.getArea()})`);
        console.log(`Shape info:`);
        console.log(`----------------------------`);
        console.log(this.getInfo());
        console.log(`----------------------------`);
    }
}
exports.default = Shape;
//# sourceMappingURL=Shape.js.map