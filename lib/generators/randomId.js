"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numbers_1 = require("../resources/numbers");
var randomGenerators_1 = require("../generators/randomGenerators");
function generateRandomId() {
    try {
        var milliseconds = new Date().getTime().toString().split('');
        var processedMilliseconds = [];
        var randomCharacters = [];
        var result = [];
        while (randomCharacters.length < 8) {
            var randomIndex = randomGenerators_1.generateRandomNumber(0, numbers_1.hexadecimalNumbers.length - 1);
            randomCharacters.push(numbers_1.hexadecimalNumbers[randomIndex]);
        }
        while (processedMilliseconds.length < 8) {
            var randomNumber = randomGenerators_1.generateRandomNumber(3, 17);
            var randomIndex = randomGenerators_1.generateRandomNumber(0, milliseconds.length - 1);
            var number = Math.floor((parseInt(milliseconds[randomIndex]) * 99) % randomNumber);
            processedMilliseconds.push(number);
        }
        for (var i = 0; i < 8; i++) {
            var character = randomCharacters[i];
            var number = processedMilliseconds[i];
            result.push(number);
            if (randomGenerators_1.generateRandomNumber(0, 1) === 0) {
                result.push(character.toString().toLowerCase());
            }
            else {
                result.push(character);
            }
        }
        return result.join('');
    }
    catch (err) {
        throw new Error('Error in generate randomid' + '\n' + err);
    }
}
exports.default = generateRandomId;
//# sourceMappingURL=randomId.js.map