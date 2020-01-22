import { Company } from '../../';

describe('Company features', () => {
	it('Should to generate a company name', () => {
		expect(Company.name.generate()).toBeDefined();
	});

	describe('Color', () => {
		it('Should to generate a hex color', () => {
			expect(Company.color.generate('hex')).toBeDefined();
		});

		it('Should to generate a rgb color', () => {
			expect(Company.color.generate('rgb')).toBeDefined();
		});
	});
	
});