"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cnpj_1 = __importDefault(require("../generators/cnpj"));
var cnpj_2 = __importDefault(require("../validators/cnpj"));
var cpf_1 = __importDefault(require("../generators/cpf"));
var cpf_2 = __importDefault(require("../validators/cpf"));
var Form = {
    cnpj: {
        generate: cnpj_1.default,
        validate: cnpj_2.default,
    },
    cpf: {
        generate: cpf_1.default,
        validate: cpf_2.default,
    }
};
exports.default = Form;
//# sourceMappingURL=Form.js.map