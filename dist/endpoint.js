"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.endpoint = void 0;
const superstruct_1 = require("superstruct");
const qs_1 = __importDefault(require("qs"));
function endpoint(options, func) {
    return async (req, res) => {
        var _a;
        const params = options.params ? superstruct_1.create(req.params, options.params) : req.params;
        const query = options.query && req.search ? superstruct_1.create(qs_1.default.parse(req.search), options.query) : Object.assign({}, req.query);
        const body = options.body && req.body ? superstruct_1.create(req.body, options.body) : ((_a = req.body) !== null && _a !== void 0 ? _a : {});
        const result = await func({ params, query: query, body });
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
    };
}
exports.endpoint = endpoint;
