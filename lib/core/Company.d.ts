import generateCompanyName from '../generators/companyName';
import generateColor from '../generators/color';
declare const Company: {
    name: {
        generate: typeof generateCompanyName;
    };
    color: {
        generate: typeof generateColor;
    };
};
export default Company;
//# sourceMappingURL=Company.d.ts.map