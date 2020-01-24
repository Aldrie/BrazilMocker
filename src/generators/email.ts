import { emailDomains } from '../resources/contacts';
import { alphabet } from '../resources/others';
import { generateRandomNumber, generateRandomArray } from '../generators/randomGenerators';
import generateFullName from '../generators/fullName';

export default function generateEmail(customName?: string, customDomain?: string): string {

	let name = '';
	let domain = customDomain;

	if (!customDomain) {
		if (generateRandomNumber(0, 3) === 0) {
			domain = generateRandomArray(alphabet, generateRandomNumber(3, 10)).join('')+'.com';
		} else {
			domain = emailDomains[generateRandomNumber(0, emailDomains.length -1)];
		}
	}

	if (customName) {
		name = customName.toLowerCase().trim().replace(/\s/g, '_');
	}else {
		name = generateFullName('', false, 2, false).replace(/\s/g, '_')
		+ generateRandomNumber(1, 999).toString();
	}

	return `${name.normalize('NFD').replace(/[\u0300-\u036f]/g, '')}@${domain}`;

}
