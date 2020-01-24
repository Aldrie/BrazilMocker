import generateCompanyName from '../generators/companyName';
import generateColor from '../generators/color';
import generateLogo from '../generators/logo';
declare const Company: {
    name: {
        generate: typeof generateCompanyName;
    };
    color: {
        generate: typeof generateColor;
    };
    logo: {
        generate: typeof generateLogo;
    };
};
export default Company;
//# sourceMappingURL=Company.d.ts.map