"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomGenerators_1 = require("../generators/randomGenerators");
function generateColor(type) {
    if (type === void 0) { type = 'hex'; }
    try {
        var rgb = [];
        while (rgb.length < 3) {
            var randomNumber = randomGenerators_1.generateRandomNumber(0, 255);
            rgb.push(randomNumber);
        }
        if (type === 'hex') {
            var hex = rgb.map(function (number) { return number.toString(16); });
            return '#' + hex.join('');
        }
        return rgb.join(', ');
    }
    catch (err) {
        throw new Error('Error in generate color');
    }
}
exports.default = generateColor;
//# sourceMappingURL=color.js.map