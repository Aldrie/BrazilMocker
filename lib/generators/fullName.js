"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var firstName_1 = __importDefault(require("./firstName"));
var lastName_1 = __importDefault(require("./lastName"));
var randomGenerators_1 = require("./randomGenerators");
function fullName(gender, captalize, length, abbreviation) {
    if (captalize === void 0) { captalize = true; }
    if (length === void 0) { length = 3; }
    if (abbreviation === void 0) { abbreviation = true; }
    try {
        var firstName = gender ? firstName_1.default(gender, captalize)
            : randomGenerators_1.generateRandomNumber(0, 1) === 0 ? firstName_1.default('male', captalize)
                : firstName_1.default('female', captalize);
        var lastNames_1 = [];
        var fullName_1 = '';
        var _loop_1 = function () {
            var generated = lastName_1.default(captalize);
            if (lastNames_1.every(function (name) { return name !== generated; })) {
                lastNames_1.push(generated);
            }
            return "continue";
        };
        while (lastNames_1.length !== length - 1) {
            _loop_1();
        }
        if (abbreviation) {
            lastNames_1 = lastNames_1.map(function (name, index) {
                if (index === lastNames_1.length - 1) {
                    return name;
                }
                return name.charAt(0).toUpperCase() + '.';
            });
        }
        fullName_1 = firstName + " " + lastNames_1.join(' ');
        return fullName_1;
    }
    catch (err) {
        throw new Error('Error in generate fullname');
    }
}
exports.default = fullName;
//# sourceMappingURL=fullName.js.map