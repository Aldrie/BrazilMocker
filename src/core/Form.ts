import generateCnpj from '../generators/cnpj';
import validateCnpj from '../validators/cnpj';

import generateCpf from '../generators/cpf';
import validateCpf from '../validators/cpf';

const Form = {
	cnpj: {
		generate: generateCnpj,
		validate: validateCnpj,
	},

	cpf: {
		generate: generateCpf,
		validate: validateCpf,
	}
};

export default Form;