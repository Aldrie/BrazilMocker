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

const Form = {
	uuid: {
		generate: generateUuid,
	},
	id: {
		generate: generateRandomId,
	},

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
			validate: validatePhoneNumber,
		},
		email: {
			generate: generateEmail,
			validate: validateEmail,
		},
	}
};

export default Form;