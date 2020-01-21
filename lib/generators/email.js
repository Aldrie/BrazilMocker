"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var contacts_1 = require("../resources/contacts");
var others_1 = require("../resources/others");
var randomGenerators_1 = require("../generators/randomGenerators");
var fullName_1 = __importDefault(require("../generators/fullName"));
function generateEmail(customName, customDomain) {
    var name = '';
    var domain = customDomain;
    if (!customDomain) {
        if (randomGenerators_1.generateRandomNumber(0, 3) === 0) {
            domain = randomGenerators_1.generateRandomArray(others_1.alphabet, randomGenerators_1.generateRandomNumber(3, 10)).join('') + '.com';
        }
        else {
            domain = contacts_1.emailDomains[randomGenerators_1.generateRandomNumber(0, contacts_1.emailDomains.length - 1)];
        }
    }
    if (customName) {
        name = customName.toLowerCase().trim().replace(/\s/g, '_');
    }
    else {
        name = fullName_1.default('', false, 2, false).replace(/\s/g, '_')
            + randomGenerators_1.generateRandomNumber(1, 999).toString();
    }
    return name + "@" + domain;
}
exports.default = generateEmail;
//# sourceMappingURL=email.js.map