import { hexadecimalNumbers } from '../resources/numbers';
import { generateRandomNumber } from '../generators/randomGenerators';

export default function generateRandomId(): string {
	try {
		const milliseconds = new Date().getTime().toString().split('');

		let processedMilliseconds = [];
		let randomCharacters: (string | number)[] = [];
		let result = [];

		while(randomCharacters.length < 8) {
			const randomIndex = generateRandomNumber(0, hexadecimalNumbers.length -1);
			randomCharacters.push(hexadecimalNumbers[randomIndex]);
		}

		while(processedMilliseconds.length < 8) {
			const randomNumber = generateRandomNumber(3, 17);
			const randomIndex = generateRandomNumber(0, milliseconds.length -1);
		
			const number = Math.floor((parseInt(milliseconds[randomIndex]) * 99)% randomNumber);
			processedMilliseconds.push(number);
		}

		for(let i = 0; i<8; i++) {
			const character = randomCharacters[i];
			const number = processedMilliseconds[i];

			result.push(number);
		
			if(generateRandomNumber(0, 1) === 0) {
				result.push(character.toString().toLowerCase());
			}else {
				result.push(character);
			}
		}

	
		return result.join('');
	} catch(err) {
		throw new Error('Error in generate randomid' + '\n' + err);
	}
}