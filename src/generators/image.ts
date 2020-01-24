import { createCanvas } from 'canvas';
import generateColor from './color';

import { detectContrastColor } from '../utils/others';
import { generateRandomArray } from './randomGenerators';
import { alphabet } from '../resources/others';

export default function generateImage(
	text?: string,
	width?: number,
	height?: number,
	fontSize?: number,
	fontFamily?: string,
	backgroundColor?: string,
	textColor?: string,
	textAlign?: 'start' | 'end' | 'left' | 'right' | 'center' | undefined
): string {
	try {
		const canvas = createCanvas(width || 300, height || 300);
		const context = canvas.getContext('2d');

		const color = backgroundColor || generateColor('hex');
		const fontFamilyCanvas = fontFamily || 'Arial';
		const fontSizeCanvas = fontSize || 60;

		context.fillStyle = color;
		context.fillRect(0, 0, canvas.width, canvas.height);

		context.font = `${fontSizeCanvas}px ${fontFamilyCanvas}`;
		context.textAlign = textAlign || 'center';
		context.fillStyle = textColor || detectContrastColor(color) === 'dark' ? '#000' : '#fff';
		context.fillText(
			text || generateRandomArray(alphabet, 4).join('').toUpperCase(),
			canvas.width /2,
			(canvas.height/2) + fontSizeCanvas/4);

		return canvas.toDataURL();
	} catch(err) {
		throw new Error('Error in generate image');
	}
}
