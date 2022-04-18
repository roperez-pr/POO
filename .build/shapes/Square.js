"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle_1 = require("./Rectangle");
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(x, y, side) {
        return _super.call(this, x, y, side, side) || this;
    }
    Square.prototype.setWidth = function (width) {
        _super.prototype.setWidth.call(this, width);
        _super.prototype.setHeight.call(this, width);
    };
    Square.prototype.setHeight = function (height) {
        _super.prototype.setHeight.call(this, height);
        _super.prototype.setWidth.call(this, height);
    };
    Square.prototype.getInfo = function () {
        return "Square with SIDE:".concat(this.side);
    };
    return Square;
}(Rectangle_1.default));
exports.default = Square;
//# sourceMappingURL=Square.js.map