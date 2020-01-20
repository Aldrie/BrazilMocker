import generateFirstName from './firstName';
import generateLastName from './lastName';
import { generateRandomNumber } from './randomGenerators';

export default function fullName(gender?: 'male' | 'female' | any,
	captalize: boolean = true,
	length: 2 | 3 | 4 = 3,
	abbreviation: boolean = true,
): string {
	try {
		let firstName = gender ? generateFirstName(gender, captalize)
			: generateRandomNumber(0, 1) === 0 ? generateFirstName('male', captalize)
				: generateFirstName('female', captalize);

		let lastNames: string[] = [];

		let fullName = '';

		while(lastNames.length !== length -1) {
			const generated = generateLastName(captalize);
			if (lastNames.every( name => name !== generated)) {
				lastNames.push(generated);
			}
			continue;
		}

		if (abbreviation) {
			lastNames = lastNames.map((name, index) => {
				if (index === lastNames.length -1) {
					return name;
				}
				return name.charAt(0).toUpperCase() + '.';
			});
		}

		fullName = `${firstName} ${lastNames.join(' ')}`;

		return fullName;
	} catch(err) {
		throw new Error('Error in generate fullname');
	}
}