"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const superstruct_1 = require("superstruct");
const endpoint_1 = require("../../endpoint");
const PARAMS = superstruct_1.object({
    school_id: superstruct_1.string(),
});
exports.get = endpoint_1.endpoint({
    params: PARAMS
}, async (o) => {
    console.log(o.params);
    return {
        mesage: 'ok'
    };
});
