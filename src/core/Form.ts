import generateCnpj from '../generators/cnpj';
import validateCnpj from '../validators/cnpj';

import generateCpf from '../generators/cpf';
import validateCpf from '../validators/cpf';

import generateFirstName from '../generators/firstName';
import generateLastName from '../generators/lastName';
import generateFullName from '../generators/fullName';

import generatePhoneNumber from '../generators/phoneNumber';

const Form = {
	cnpj: {
		generate: generateCnpj,
		validate: validateCnpj,
	},

	cpf: {
		generate: generateCpf,
		validate: validateCpf,
	},
	
	names: {
		firstName: {
			generate: generateFirstName,
		},
		lastName: {
			generate: generateLastName,
		},
		fullName: {
			generate: generateFullName,
		}
	},

	contact: {
		phoneNumber: {
			generate: generatePhoneNumber,
		},
	}
};

export default Form;