"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const superstruct_1 = require("superstruct");
const Location = superstruct_1.define('Location', value => {
    return true;
});
const SchoolsSchame = superstruct_1.object({
    id: superstruct_1.string(),
    title: superstruct_1.string(),
    location: Location
});
