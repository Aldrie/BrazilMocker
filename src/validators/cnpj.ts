import cnpjGenerator from '../generators/cnpj';

export default function cnpjValidator(cnpj: string): boolean {
	try {

		cnpj = cnpj.replace(/\D/g, '');

		if (cnpj.length !== 14) {
			return false;
		}

		for(let i = 0; i< 10; i++) {
			if(cnpj.split('').every(value => value === i.toString())) {
				return false;
			}
		}

		const digits = cnpj.substring(12, 14);
		const generated = cnpjGenerator(cnpj);
		const generatedDigits = generated.substring(12, 14);

		if (digits === generatedDigits) {
			return true;
		}

		return false;

	} catch(err) {
		return false;
	}
}
