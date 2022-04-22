"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.default {
    constructor(x, y, width, height) {
        super(x, y);
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    getArea() {
        return this.width * this.height;
    }
    getInfo() {
        return `Rectangle with WIDTH:${this.width} and HEIGHT:${this.height}`;
    }
}
exports.default = Rectangle;
//# sourceMappingURL=Rectangle.js.map