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
function generateLogo(text, width, height, fontSize, fontFamily, backgroundGradient, textColor, textAlign) {
    try {
        var canvas = canvas_1.createCanvas(width || 300, height || 300);
        var context_1 = canvas.getContext('2d');
        var colors = backgroundGradient || [color_1.default('rgb'), color_1.default('rgb')];
        var fontFamilyCanvas = fontFamily || 'Arial';
        var fontSizeCanvas = fontSize || 60;
        var gradient = context_1.createLinearGradient(0, canvas.width / 10, canvas.width, canvas.width - (canvas.width / 10));
        gradient.addColorStop(0, "rgb(" + others_1.convertColorTypes(colors[0], 'rgb') + ")");
        gradient.addColorStop(1, "rgb(" + others_1.convertColorTypes(colors[1], 'rgb') + ")");
        context_1.fillStyle = gradient;
        context_1.fillRect(0, 0, canvas.width, canvas.height);
        context_1.font = fontSizeCanvas + "px " + fontFamilyCanvas;
        context_1.textAlign = textAlign || 'center';
        context_1.fillStyle = textColor || others_1.detectContrastColor(colors[0]) === 'dark' ? '#000' : '#fff';
        context_1.fillText(text || randomGenerators_1.generateRandomArray(others_2.alphabet, 4).join('').toUpperCase(), canvas.width / 2, (canvas.height / 2) + fontSizeCanvas / 4);
        var fillCircle = function (x, y, r) {
            context_1.beginPath();
            context_1.arc(x, y, r, 0, Math.PI * 2);
            context_1.fill();
        };
        fillCircle((0 + canvas.width / 8), (0 + canvas.height / 8), fontSizeCanvas / 4);
        fillCircle((canvas.width - canvas.width / 8), (0 + canvas.height / 8), fontSizeCanvas / 4);
        fillCircle((0 + canvas.width / 8), (canvas.height - canvas.height / 8), fontSizeCanvas / 4);
        fillCircle((canvas.width - canvas.width / 8), (canvas.height - canvas.height / 8), fontSizeCanvas / 4);
        return canvas.toDataURL();
    }
    catch (err) {
        throw new Error('Error in generate logo');
    }
}
exports.default = generateLogo;
//# sourceMappingURL=logo.js.map