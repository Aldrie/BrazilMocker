"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Names = __importStar(require("../resources/company/names"));
var randomGenerators_1 = require("../generators/randomGenerators");
var string_1 = require("../utils/string");
function generateCompanyName(type) {
    try {
        var typeKey = !type ? randomGenerators_1.generateRandomChoice(Object.keys(Names)) : type;
        var randomPrefixIndex = randomGenerators_1.generateRandomNumber(0, Names[typeKey].prefixes.length - 1);
        var randomSuffixIndex = randomGenerators_1.generateRandomNumber(0, Names[typeKey].suffixes.length - 1);
        var prefix = Names[typeKey].prefixes[randomPrefixIndex];
        var suffix = Names[typeKey].suffixes[randomSuffixIndex];
        return (prefix + " " + suffix).split(' ').map(function (item) { return string_1.captalizeFirstLetter(item); }).join(' ');
    }
    catch (err) {
        throw new Error('Error in generate companyname');
    }
}
exports.default = generateCompanyName;
//# sourceMappingURL=companyName.js.map