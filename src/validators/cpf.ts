import generateCpf from '../generators/cpf';

export default function validateCpf(cpf: string): boolean {
	try {

		if(cpf.length !== 11) {
			return false;
		}

		for(let i = 0; i< 10; i++) {
			if(cpf.split('').every(value => value === i.toString())) {
				return false;
			}
		}

		const digits = cpf.substring(9, 11);
		const generated = generateCpf(cpf);
		const generatedDigits = generated.substring(9, 11);

		if (digits === generatedDigits) {
			return true;
		}

		return false;

	}catch(err) {
		return false;
	}
}