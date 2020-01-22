import generateCompanyName from '../generators/companyName';
import generateColor from '../generators/color';

const Company = {
	name: {
		generate: generateCompanyName,
	},
	color: {
		generate: generateColor,
	}
};

export default Company;