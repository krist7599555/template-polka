"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const endpoint_1 = require("../../endpoint");
exports.get = endpoint_1.endpoint({}, async () => {
    return {
        message: 'ok'
    };
});
