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
    var firstName = gender ? firstName_1.default(gender, captalize)
        : randomGenerators_1.generateRandomNumber(0, 1) === 0 ? firstName_1.default('male', captalize)
            : firstName_1.default('female', captalize);
    var lastNames = [];
    var fullName = '';
    var _loop_1 = function () {
        var generated = lastName_1.default(captalize);
        if (lastNames.every(function (name) { return name !== generated; })) {
            lastNames.push(generated);
        }
        return "continue";
    };
    while (lastNames.length !== length - 1) {
        _loop_1();
    }
    if (abbreviation) {
        lastNames = lastNames.map(function (name, index) {
            if (index === lastNames.length - 1) {
                return name;
            }
            return name.charAt(0).toUpperCase() + '.';
        });
    }
    fullName = firstName + " " + lastNames.join(' ');
    return fullName;
}
exports.default = fullName;
//# sourceMappingURL=fullName.js.map