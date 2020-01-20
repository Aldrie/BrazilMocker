import { Form } from '../../';

describe('Form features', () => {
	describe('Cnpj', () => {
		let validCnpj = '';

		it('Should to generate a Cnpj', () => {
			validCnpj = Form.cnpj.generate();

			expect(typeof validCnpj).toBe('string');
			expect(validCnpj.length).toBe(14);
		});

		it('Should to validate a Cnpj', () => {
			expect(Form.cnpj.validate(validCnpj)).toBe(true);

			expect(Form.cnpj.validate('11122233344455')).toBe(false);
		});
	});

	describe('Cpf', () => {
		let validCpf = '';

		it('Should to generate a Cpf', () => {
			validCpf = Form.cpf.generate();

			expect(typeof validCpf).toBe('string');
			expect(validCpf.length).toBe(11);
		});

		it('Should to validate a Cpf', () => {
			expect(Form.cpf.validate(validCpf)).toBe(true);

			expect(Form.cpf.validate('11122233344')).toBe(false);
		});
	});

	describe('Names', () => {
		it('Should to generate a male first name', () => {
			expect(Form.names.firstName.generate('male')).toBeDefined();
		});

		it('Should to generate a female first name', () => {
			expect(Form.names.firstName.generate('female')).toBeDefined();
		});

		it('Should to generate a random first name', () => {
			expect(Form.names.firstName.generate()).toBeDefined();
		});
	});
});