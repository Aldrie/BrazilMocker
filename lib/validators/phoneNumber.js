"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validatePhoneNumber(number) {
    try {
        var string = number.replace(/\D/g, '');
        return string.length >= 11 && string.length <= 16;
    }
    catch (err) {
        throw new Error('Error in validate phonenumber');
    }
}
exports.default = validatePhoneNumber;
//# sourceMappingURL=phoneNumber.js.map