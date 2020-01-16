import { generateRandomArray } from './randomGenerators';
import { decimalNumbers } from '../resources/numbers';
import { cnpjPatternArrayOne, cnpjPatternArrayTwo } from '../resources/others';
import { scalarProduct } from '../utils/math';

export default function generateCnpj(customBaseNumber?: string): string {
	const randomArray = customBaseNumber? customBaseNumber.substring(0, 12).split('')
		: generateRandomArray(decimalNumbers, 12);
		
	const scalarProductArray = scalarProduct(cnpjPatternArrayOne, randomArray as number[]);
	const scalarResult = scalarProductArray.reduce((all, current) => all + current)%11;
	const firstDigit = scalarResult < 2 ? 0 : 11 - scalarResult;

	const randomArrayTwo = [...randomArray,firstDigit];
	const scalarProductArrayTwo = scalarProduct(cnpjPatternArrayTwo, randomArrayTwo as number[]);
	const scalarResultTwo = scalarProductArrayTwo.reduce((all, current) => all + current)%11;
	const secondDigit = scalarResultTwo < 2 ? 0 : 11 - scalarResultTwo;

	return [...randomArray, firstDigit, secondDigit].join('');
}
