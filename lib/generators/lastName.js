"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomGenerators_1 = require("./randomGenerators");
var string_1 = require("../utils/string");
var names_1 = require("../resources/names");
function generateLastName(captalize) {
    if (captalize === void 0) { captalize = true; }
    var randomIndex = randomGenerators_1.generateRandomNumber(0, names_1.names.lastName.length - 1);
    return captalize ? string_1.captalizeFirstLetter(names_1.names.lastName[randomIndex])
        : names_1.names.lastName[randomIndex];
}
exports.default = generateLastName;
//# sourceMappingURL=lastName.js.map