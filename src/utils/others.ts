export type colorTypes = 'hex' | 'rgb';

export function convertColorTypes(color: string, toType: colorTypes): string {
	const colorType = detectColorType(color);

	if (colorType === toType) {
		return color;
	}

	if (colorType === 'hex' && toType === 'rgb') {
		if (color.length > 4) {
			const r = parseInt(color.substring(1, 3), 16);
			const g = parseInt(color.substring(3, 5), 16);
			const b = parseInt(color.substring(5, 7), 16);

			return `${r}, ${g}, ${b}`;
		}
		const regex = /([^*]+)/g;
		const r = parseInt(color.charAt(1).replace(regex, '$1$1'), 16);
		const g = parseInt(color.charAt(2).replace(regex, '$1$1'), 16);
		const b = parseInt(color.charAt(3).replace(regex, '$1$1'), 16);

		return `${r}, ${g}, ${b}`;
	}

	if (colorType === 'rgb' && toType === 'hex') {
		const splited = (color.replace(/\s/g, '').split(','));
		const r = parseInt(splited[0]).toString(16);
		const g = parseInt(splited[1]).toString(16);
		const b = parseInt(splited[2]).toString(16);

		return `#${r}${g}${b}`;
	}

	return color;
}

export function detectColorType(color: string): colorTypes {
	if (color.charAt(0) === '#') {
		return 'hex';
	}

	return 'rgb';
}

export function detectContrastColor(color: string): 'dark' | 'light' {
	const convertedColor = convertColorTypes(color, 'rgb').replace(/\s/g, '').split(',');
	const r = parseInt(convertedColor[0]);
	const g = parseInt(convertedColor[1]);
	const b = parseInt(convertedColor[2]);

	if ( (r *.299 + g*.587 + b*.114) > 186 ) {
		return 'dark'
	}

	return 'light';
}
