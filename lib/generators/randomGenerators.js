"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateRandomNumber(min, max, integer) {
    if (integer === void 0) { integer = true; }
    if (integer) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return Math.random() * (max - min) + min;
}
exports.generateRandomNumber = generateRandomNumber;
function generateRandomArray(characters, length) {
    var array = [];
    for (var i = 0; i < length; i++) {
        array.push(characters[generateRandomNumber(0, characters.length - 1, true)]);
    }
    return array;
}
exports.generateRandomArray = generateRandomArray;
//# sourceMappingURL=randomGenerators.js.map