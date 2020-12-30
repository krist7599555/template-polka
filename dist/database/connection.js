"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const rethinkdb_ts_1 = require("rethinkdb-ts");
exports.pool = rethinkdb_ts_1.r.connectPool({
    user: 'dev',
    password: '',
    host: 'driver.rethinkdb.insidethesandbox.studio',
    port: 28015,
});
