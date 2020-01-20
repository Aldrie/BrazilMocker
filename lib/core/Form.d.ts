import generateCnpj from '../generators/cnpj';
import validateCnpj from '../validators/cnpj';
import generateCpf from '../generators/cpf';
import validateCpf from '../validators/cpf';
declare const Form: {
    cnpj: {
        generate: typeof generateCnpj;
        validate: typeof validateCnpj;
    };
    cpf: {
        generate: typeof generateCpf;
        validate: typeof validateCpf;
    };
};
export default Form;
//# sourceMappingURL=Form.d.ts.map