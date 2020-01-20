"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var randomGenerators_1 = require("./randomGenerators");
var numbers_1 = require("../resources/numbers");
var others_1 = require("../resources/others");
var math_1 = require("../utils/math");
function generateCnpj(customBaseNumber) {
    try {
        var randomArray = customBaseNumber ? customBaseNumber.substring(0, 12).split('')
            : randomGenerators_1.generateRandomArray(numbers_1.decimalNumbers, 12);
        var scalarProductArray = math_1.scalarProduct(others_1.cnpjPatternArrayOne, randomArray);
        var scalarResult = scalarProductArray.reduce(function (all, current) { return all + current; }) % 11;
        var firstDigit = scalarResult < 2 ? 0 : 11 - scalarResult;
        var randomArrayTwo = __spreadArrays(randomArray, [firstDigit]);
        var scalarProductArrayTwo = math_1.scalarProduct(others_1.cnpjPatternArrayTwo, randomArrayTwo);
        var scalarResultTwo = scalarProductArrayTwo.reduce(function (all, current) { return all + current; }) % 11;
        var secondDigit = scalarResultTwo < 2 ? 0 : 11 - scalarResultTwo;
        return __spreadArrays(randomArray, [firstDigit, secondDigit]).join('');
    }
    catch (err) {
        throw new Error('Error generating Cnpj');
    }
}
exports.default = generateCnpj;
//# sourceMappingURL=cnpj.js.map