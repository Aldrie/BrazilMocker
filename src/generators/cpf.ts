import { generateRandomArray } from './randomGenerators';
import { decimalNumbers } from '../resources/numbers';
import { scalarProduct } from '../utils/math';
import { cpfPatternArrayOne, cpfPatternArrayTwo } from '../resources/others';

export default function generateCpf(customNumber?: string): string {
	const randomArray = customNumber ? customNumber.substring(0, 9).split('') : generateRandomArray(decimalNumbers, 9);
	const scalarProductArray = scalarProduct(randomArray, cpfPatternArrayOne);
	const scalarResult = scalarProductArray.reduce((all, current) => all + current)% 11;
	const firstDigit = scalarResult < 2 ? 0 : 11 - scalarResult;

	const randomArrayTwo = [...randomArray, firstDigit];
	const scalarProductArrayTwo = scalarProduct(randomArrayTwo, cpfPatternArrayTwo);
	const scalarResultTwo = scalarProductArrayTwo.reduce((all, current) => all + current)% 11;
	const secondDigit = scalarResultTwo < 2 ? 0 : 11 - scalarResultTwo;

	return [...randomArray, firstDigit, secondDigit].join('');
}
