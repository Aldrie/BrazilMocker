"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var canvas_1 = require("canvas");
var color_1 = __importDefault(require("./color"));
var others_1 = require("../utils/others");
var randomGenerators_1 = require("./randomGenerators");
var others_2 = require("../resources/others");
function generateImage(text, width, height, fontSize, fontFamily, backgroundColor, textColor, textAlign) {
    try {
        var canvas = canvas_1.createCanvas(width || 300, height || 300);
        var context = canvas.getContext('2d');
        var color = backgroundColor || color_1.default('hex');
        var fontFamilyCanvas = fontFamily || 'Arial';
        var fontSizeCanvas = fontSize || 60;
        context.fillStyle = color;
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.font = fontSizeCanvas + "px " + fontFamilyCanvas;
        context.textAlign = textAlign || 'center';
        context.fillStyle = textColor || others_1.detectContrastColor(color) === 'dark' ? '#000' : '#fff';
        context.fillText(text || randomGenerators_1.generateRandomArray(others_2.alphabet, 4).join('').toUpperCase(), canvas.width / 2, (canvas.height / 2) + fontSizeCanvas / 4);
        return canvas.toDataURL();
    }
    catch (err) {
        throw new Error('Error in generate image');
    }
}
exports.default = generateImage;
//# sourceMappingURL=image.js.map