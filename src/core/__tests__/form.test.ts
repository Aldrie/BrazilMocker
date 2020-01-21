import { Form } from '../../';

describe('Form features', () => {
	describe('Cnpj', () => {
		let validCnpj = '';

		it('Should to generate a Cnpj', () => {
			validCnpj = Form.cnpj.generate();

			expect(typeof validCnpj).toBe('string');
			expect(validCnpj.length).toBe(14);
		});

		it('Should to validate a true Cnpj', () => {
			expect(Form.cnpj.validate(validCnpj)).toBe(true);
		});

		it('Should to validate a false Cnpj', () => {
			expect(Form.cnpj.validate('11111')).toBe(false);
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

		it('Should to generate a last name', () => {
			expect(Form.names.lastName.generate()).toBeDefined();
		});

		it('Should to generate a random fullname', () => {
			expect(Form.names.fullName.generate('', true, 4, true)).toBeDefined();
		});
	});

	describe('Contact', () => {
		it('Should to generate a phone number', () => {
			expect(Form.contact.phoneNumber.generate(true, true)).toBeDefined();
		});

		it('Should to validate a phone number as true', () => {
			expect(Form.contact.phoneNumber.validate('+55 11 96381-3469')).toBe(true);
		});

		it('Should to validate a phone number as false', () => {
			expect(Form.contact.phoneNumber.validate('123123')).toBe(false);
		});

		it('Should to generate a random uuid', () => {
			expect(Form.uuid.generate()).toBeDefined();
		});

		it('Should to generate a random id', () => {
			expect(Form.id.generate()).toBeDefined();
		});
	});
});