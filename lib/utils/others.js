"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertColorTypes(color, toType) {
    var colorType = detectColorType(color);
    if (colorType === toType) {
        return color;
    }
    if (colorType === 'hex' && toType === 'rgb') {
        if (color.length > 4) {
            var r_1 = parseInt(color.substring(1, 3), 16);
            var g_1 = parseInt(color.substring(3, 5), 16);
            var b_1 = parseInt(color.substring(5, 7), 16);
            return r_1 + ", " + g_1 + ", " + b_1;
        }
        var regex = /([^*]+)/g;
        var r = parseInt(color.charAt(1).replace(regex, '$1$1'), 16);
        var g = parseInt(color.charAt(2).replace(regex, '$1$1'), 16);
        var b = parseInt(color.charAt(3).replace(regex, '$1$1'), 16);
        return r + ", " + g + ", " + b;
    }
    if (colorType === 'rgb' && toType === 'hex') {
        var splited = (color.replace(/\s/g, '').split(','));
        var r = parseInt(splited[0]).toString(16);
        var g = parseInt(splited[1]).toString(16);
        var b = parseInt(splited[2]).toString(16);
        return "#" + r + g + b;
    }
    return color;
}
exports.convertColorTypes = convertColorTypes;
function detectColorType(color) {
    if (color.charAt(0) === '#') {
        return 'hex';
    }
    return 'rgb';
}
exports.detectColorType = detectColorType;
function detectContrastColor(color) {
    var convertedColor = convertColorTypes(color, 'rgb').replace(/\s/g, '').split(',');
    var r = parseInt(convertedColor[0]);
    var g = parseInt(convertedColor[1]);
    var b = parseInt(convertedColor[2]);
    if ((r * .299 + g * .587 + b * .114) > 186) {
        return 'dark';
    }
    return 'light';
}
exports.detectContrastColor = detectContrastColor;
//# sourceMappingURL=others.js.map