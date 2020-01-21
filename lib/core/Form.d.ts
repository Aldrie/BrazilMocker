import generateCnpj from '../generators/cnpj';
import validateCnpj from '../validators/cnpj';
import generateCpf from '../generators/cpf';
import validateCpf from '../validators/cpf';
import generateFirstName from '../generators/firstName';
import generateLastName from '../generators/lastName';
import generateFullName from '../generators/fullName';
import generatePhoneNumber from '../generators/phoneNumber';
import validatePhoneNumber from '../validators/phoneNumber';
import generateUuid from '../generators/uuid';
import generateRandomId from '../generators/randomId';
import generateEmail from '../generators/email';
import validateEmail from '../validators/email';
declare const Form: {
    uuid: {
        generate: typeof generateUuid;
    };
    id: {
        generate: typeof generateRandomId;
    };
    cnpj: {
        generate: typeof generateCnpj;
        validate: typeof validateCnpj;
    };
    cpf: {
        generate: typeof generateCpf;
        validate: typeof validateCpf;
    };
    names: {
        firstName: {
            generate: typeof generateFirstName;
        };
        lastName: {
            generate: typeof generateLastName;
        };
        fullName: {
            generate: typeof generateFullName;
        };
    };
    contact: {
        phoneNumber: {
            generate: typeof generatePhoneNumber;
            validate: typeof validatePhoneNumber;
        };
        email: {
            generate: typeof generateEmail;
            validate: typeof validateEmail;
        };
    };
};
export default Form;
//# sourceMappingURL=Form.d.ts.map