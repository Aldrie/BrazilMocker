"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomGenerators_1 = require("./randomGenerators");
var string_1 = require("../utils/string");
var names_1 = require("../resources/names");
function generateFirstName(gender, captalize) {
    if (captalize === void 0) { captalize = true; }
    try {
        var randomIndex = 0;
        if (gender === 'male') {
            randomIndex = randomGenerators_1.generateRandomNumber(0, names_1.names.firstName.male.length - 1, true);
            return captalize ? string_1.captalizeFirstLetter(names_1.names.firstName.male[randomIndex])
                : names_1.names.firstName.male[randomIndex];
        }
        if (gender === 'female') {
            randomIndex = randomGenerators_1.generateRandomNumber(0, names_1.names.firstName.female.length - 1, true);
            return captalize ? string_1.captalizeFirstLetter(names_1.names.firstName.female[randomIndex])
                : names_1.names.firstName.female[randomIndex];
        }
        var genderChoice = randomGenerators_1.generateRandomNumber(0, 1, true);
        if (genderChoice === 0) {
            randomIndex = randomGenerators_1.generateRandomNumber(0, names_1.names.firstName.male.length - 1, true);
            return captalize ? string_1.captalizeFirstLetter(names_1.names.firstName.male[randomIndex])
                : names_1.names.firstName.male[randomIndex];
        }
        randomIndex = randomGenerators_1.generateRandomNumber(0, names_1.names.firstName.female.length - 1, true);
        return captalize ? string_1.captalizeFirstLetter(names_1.names.firstName.female[randomIndex])
            : names_1.names.firstName.female[randomIndex];
    }
    catch (err) {
        throw new Error('Error in generate firstname');
    }
}
exports.default = generateFirstName;
//# sourceMappingURL=firstName.js.map