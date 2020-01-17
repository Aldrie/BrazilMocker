"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function scalarProduct(arr_1, arr_2) {
    var result = [];
    for (var i = 0; i < (arr_1.length + arr_2.length) / 2; i++) {
        result.push(arr_1[i] * arr_2[i]);
    }
    return result;
}
exports.scalarProduct = scalarProduct;
//# sourceMappingURL=math.js.map