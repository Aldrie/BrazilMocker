import { Company } from '../../';

describe('Company features', () => {
	it('Should to generate a company name', () => {
		expect(Company.name.generate()).toBeDefined();
	});
	
});