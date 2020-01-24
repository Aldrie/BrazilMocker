import { generateRandomNumber } from './randomGenerators';
import { captalizeFirstLetter } from '../utils/string';
import { names } from '../resources/names';

export default function generateLastName(captalize: boolean = true) {
	try {
		const randomIndex = generateRandomNumber(0, names.lastName.length -1);

		return captalize ? captalizeFirstLetter(names.lastName[randomIndex])
			: names.lastName[randomIndex];
	} catch(err) {
		throw new Error('Error in generate lastname');
	}
}
