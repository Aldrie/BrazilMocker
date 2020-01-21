"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateUuid() {
    try {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    catch (err) {
        throw new Error('Error in generate uuid');
    }
}
exports.default = generateUuid;
//https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript/105074#105074?newreg=9c20b6db1b72469a9b22ba038972130e
//thanks 
//# sourceMappingURL=uuid.js.map