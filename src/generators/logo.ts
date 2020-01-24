import { createCanvas } from 'canvas';
import generateColor from './color';

import { detectContrastColor, convertColorTypes } from '../utils/others';
import { generateRandomArray } from './randomGenerators';
import { alphabet } from '../resources/others';

export default function generateLogo(
	text?: string,
	width?: number,
	height?: number,
	fontSize?: number,
	fontFamily?: string,
	backgroundGradient?: [string, string] | undefined,
	textColor?: string,
	textAlign?: 'start' | 'end' | 'left' | 'right' | 'center' | undefined
): string {
	try {
		const canvas = createCanvas(width || 300, height || 300);
		const context = canvas.getContext('2d');

		const colors = backgroundGradient || [generateColor('rgb'), generateColor('rgb')];
		const fontFamilyCanvas = fontFamily || 'Arial';
		const fontSizeCanvas = fontSize || 60;

		const gradient = context.createLinearGradient(0, canvas.width/10, canvas.width, canvas.width - (canvas.width/10));
		gradient.addColorStop(0, `rgb(${convertColorTypes(colors[0], 'rgb')})`);
		gradient.addColorStop(1, `rgb(${convertColorTypes(colors[1], 'rgb')})`);

		context.fillStyle = gradient;
		context.fillRect(0, 0, canvas.width, canvas.height);

		context.font = `${fontSizeCanvas}px ${fontFamilyCanvas}`;
		context.textAlign = textAlign || 'center';
		context.fillStyle = textColor || detectContrastColor(colors[0]) === 'dark' ? '#000' : '#fff';
		context.fillText(
			text || generateRandomArray(alphabet, 4).join('').toUpperCase(),
			canvas.width /2,
			(canvas.height/2) + fontSizeCanvas/4);

		const fillCircle = (x:number, y:number , r:number ) => {
			context.beginPath();
			context.arc(x, y, r, 0, Math.PI*2);
			context.fill();
		};

		fillCircle((0 + canvas.width/8), (0 + canvas.height/8), fontSizeCanvas/4);
		fillCircle((canvas.width - canvas.width/8), (0 + canvas.height/8), fontSizeCanvas/4);
		fillCircle((0 + canvas.width/8), (canvas.height - canvas.height/8), fontSizeCanvas/4);
		fillCircle((canvas.width - canvas.width/8), (canvas.height - canvas.height/8), fontSizeCanvas/4);

		return canvas.toDataURL();
	} catch(err) {
		throw new Error('Error in generate logo');
	}
}
