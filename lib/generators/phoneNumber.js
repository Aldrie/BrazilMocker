"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contacts_1 = require("../resources/contacts");
var numbers_1 = require("../resources/numbers");
var randomGenerators_1 = require("../generators/randomGenerators");
function generatePhoneNumber(withPrefix, format) {
    if (withPrefix === void 0) { withPrefix = false; }
    if (format === void 0) { format = false; }
    try {
        var phoneNumber = '';
        var randomPhoneNumber = randomGenerators_1.generateRandomArray(numbers_1.decimalNumbers, 8);
        var randomDDDIndex = randomGenerators_1.generateRandomNumber(0, contacts_1.BrazilDDDs.length - 1);
        var randomDDD = contacts_1.BrazilDDDs[randomDDDIndex];
        if (format) {
            phoneNumber = (withPrefix ? '+55' : '') + " (" + randomDDD + ") 9" + randomPhoneNumber.slice(0, 4).join('') + "-" + randomPhoneNumber.slice(4, 8).join('');
        }
        else {
            phoneNumber = "" + (withPrefix ? '+55' : '') + randomDDD + "9" + randomPhoneNumber.join('');
        }
        return phoneNumber;
    }
    catch (err) {
        throw new Error('Error in generate phonenumber');
    }
}
exports.default = generatePhoneNumber;
//# sourceMappingURL=phoneNumber.js.map