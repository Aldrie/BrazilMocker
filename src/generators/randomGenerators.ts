export function generateRandomNumber(min: number, max: number, integer?: boolean): number {
	if (integer) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	return Math.random() * (max - min) + min;
}

export function generateRandomArray(characters: any[], length: number): any[] {
	const array = [];

	for (let i = 0; i < length; i++) {
		array.push(characters[generateRandomNumber(0, characters.length -1, true)]);
	}

	return array;
}
