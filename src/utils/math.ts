export function scalarProduct(arr_1: number[], arr_2: number[]) {
	const result = [];

	for (let i = 0; i<(arr_1.length + arr_2.length)/2; i++) {
		result.push(arr_1[i] * arr_2[i]);
	}

	return result;
}