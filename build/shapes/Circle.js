"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
class Circle extends Shape_1.default {
    constructor(x, y, r) {
        super(x, y);
        this.radio = r;
    }
    getRadio() {
        return this.radio;
    }
    getArea() {
        return Math.PI * Math.pow(this.radio, 2);
    }
    getInfo() {
        return `Circle with RADIO:${this.radio}`;
    }
}
exports.default = Circle;
//# sourceMappingURL=Circle.js.map