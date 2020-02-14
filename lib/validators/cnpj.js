"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cnpj_1 = __importDefault(require("../generators/cnpj"));
function cnpjValidator(cnpj) {
    try {
        cnpj = cnpj.replace(/\D/g, '');
        if (cnpj.length !== 14) {
            return false;
        }
        var _loop_1 = function (i) {
            if (cnpj.split('').every(function (value) { return value === i.toString(); })) {
                return { value: false };
            }
        };
        for (var i = 0; i < 10; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        var digits = cnpj.substring(12, 14);
        var generated = cnpj_1.default(cnpj);
        var generatedDigits = generated.substring(12, 14);
        if (digits === generatedDigits) {
            return true;
        }
        return false;
    }
    catch (err) {
        return false;
    }
}
exports.default = cnpjValidator;
//# sourceMappingURL=cnpj.js.map