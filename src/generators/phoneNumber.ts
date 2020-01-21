import { BrazilDDDs } from '../resources/contacts';
import { decimalNumbers } from '../resources/numbers';
import { generateRandomNumber, generateRandomArray } from '../generators/randomGenerators';

export default function generatePhoneNumber(withPrefix: boolean = false, format: boolean = false): string {
	try {
		let phoneNumber = '';

		const randomPhoneNumber = generateRandomArray(decimalNumbers, 8);
		const randomDDDIndex = generateRandomNumber(0, BrazilDDDs.length);
		const randomDDD = BrazilDDDs[randomDDDIndex];

		if (format) {
			phoneNumber = `${withPrefix ? '+55' : ''} (${randomDDD}) 9${randomPhoneNumber.slice(0, 4).join('')}-${randomPhoneNumber.slice(4, 8).join('')}`;
		} else {
			phoneNumber = `${withPrefix ? '+55' : ''}${randomDDD}9${randomPhoneNumber.join('')}`;
		}

		return phoneNumber;
	} catch(err) {
		throw new Error('Error in generate phonenumber');
	}
}