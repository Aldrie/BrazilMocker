"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var companyName_1 = __importDefault(require("../generators/companyName"));
var color_1 = __importDefault(require("../generators/color"));
var logo_1 = __importDefault(require("../generators/logo"));
var Company = {
    name: {
        generate: companyName_1.default,
    },
    color: {
        generate: color_1.default,
    },
    logo: {
        generate: logo_1.default,
    },
};
exports.default = Company;
//# sourceMappingURL=Company.js.map