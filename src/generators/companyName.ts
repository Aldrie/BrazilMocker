import * as Names from '../resources/company/names';

import { generateRandomNumber, generateRandomChoice } from '../generators/randomGenerators';
import { captalizeFirstLetter } from '../utils/string';

export type nameTypes =
| 'tech'
| 'food'
| 'store';

export default function generateCompanyName(type?: nameTypes): string {
	try {
		let typeKey:nameTypes = !type ? generateRandomChoice(Object.keys(Names)) : type;

		const randomPrefixIndex = generateRandomNumber(0, Names[typeKey].prefixes.length -1);
		const randomSuffixIndex = generateRandomNumber(0, Names[typeKey].suffixes.length -1);

		const prefix = Names[typeKey].prefixes[randomPrefixIndex];
		const suffix = Names[typeKey].suffixes[randomSuffixIndex];

		return (`${prefix} ${suffix}`).split(' ').map(item => captalizeFirstLetter(item)).join(' ');
	} catch(err) {
		throw new Error('Error in generate companyname');
	}
}
