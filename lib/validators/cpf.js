"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cpf_1 = __importDefault(require("../generators/cpf"));
function validateCpf(cpf) {
    try {
        cpf = cpf.replace(/\D/g, '');
        if (cpf.length !== 11) {
            return false;
        }
        var _loop_1 = function (i) {
            if (cpf.split('').every(function (value) { return value === i.toString(); })) {
                return { value: false };
            }
        };
        for (var i = 0; i < 10; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        var digits = cpf.substring(9, 11);
        var generated = cpf_1.default(cpf);
        var generatedDigits = generated.substring(9, 11);
        if (digits === generatedDigits) {
            return true;
        }
        return false;
    }
    catch (err) {
        return false;
    }
}
exports.default = validateCpf;
//# sourceMappingURL=cpf.js.map