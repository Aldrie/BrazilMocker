import generateCompanyName from '../generators/companyName';
import generateColor from '../generators/color';
import generateLogo from '../generators/logo';

const Company = {
	name: {
		generate: generateCompanyName,
	},
	color: {
		generate: generateColor,
	},
	logo: {
		generate: generateLogo,
	},
};

export default Company;
