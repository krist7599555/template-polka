"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const r_ = __importStar(require("./routes/index"));
const r_s = __importStar(require("./routes/schools/index"));
const lodash_1 = require("lodash");
const allowed_methods = ["GET", "POST", "PUT", "PATCH", "DELETE"];
// const mods = await import(file);
// const pattern = file.replace(/^.*routes\//, '/').replace(/.(ts|js)$/, '').replace(/index$/, '');
// for (const [method, handler] of toPairs(mods)) {
//   const met = method.toUpperCase() as HTTPMethod;
//   if (includes(<HTTPMethod[]>["GET", "POST", "PUT", "PATCH", "DELETE"], met)) {
//     console.log([met, pattern])
//     app.add(met, pattern, handler as any)
//   }
// }
function to_path(mod, pattern) {
    return lodash_1.toPairs(mod)
        .filter(([meth, hand]) => allowed_methods.includes(meth))
        .map(([meth, hand]) => [meth, pattern, hand]);
}
console.log('!!!');
exports.routes = [
    ["GET", '/', r_.get],
    ["GET", '/school', r_s.get],
];
console.log(exports.routes);
console.log(r_);
