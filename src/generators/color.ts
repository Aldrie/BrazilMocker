import { generateRandomNumber } from '../generators/randomGenerators';

export type colorTypes = 'hex' | 'rgb';

export default function generateColor(type: colorTypes = 'hex'): string {
	try {
		let rgb = [];

		while(rgb.length < 3) {
			const randomNumber = generateRandomNumber(0, 255);
			rgb.push(randomNumber);
		}
	
		if (type === 'hex') {
			let hex = rgb.map(number => number.toString(16));
	
			return '#' + hex.join('');
		}
	
		return rgb.join(', ');
	} catch(err) {
		throw new Error('Error in generate color');
	}
}