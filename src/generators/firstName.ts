import { generateRandomNumber } from './randomGenerators';
import { captalizeFirstLetter } from '../utils/string';
import { names } from '../resources/names';

export default function generateFirstName(gender?: 'male' | 'female' | any, captalize: boolean = true): string {
	try {
		let randomIndex = 0;
	
		if (gender === 'male') {
			randomIndex = generateRandomNumber(0, names.firstName.male.length -1, true);
			return captalize? captalizeFirstLetter(names.firstName.male[randomIndex])
				: names.firstName.male[randomIndex];
		}

		if (gender === 'female') {
			randomIndex = generateRandomNumber(0, names.firstName.female.length -1, true);
			return captalize? captalizeFirstLetter(names.firstName.female[randomIndex])
				: names.firstName.female[randomIndex];
		}

		const genderChoice = generateRandomNumber(0, 1, true);

		if (genderChoice === 0) {
			randomIndex = generateRandomNumber(0, names.firstName.male.length -1, true);
			return captalize? captalizeFirstLetter(names.firstName.male[randomIndex])
				: names.firstName.male[randomIndex];
		}

		randomIndex = generateRandomNumber(0, names.firstName.female.length -1, true);
		return captalize? captalizeFirstLetter(names.firstName.female[randomIndex])
			: names.firstName.female[randomIndex];

	} catch(err) {
		throw new Error('Error in generate firstname');
	}
}