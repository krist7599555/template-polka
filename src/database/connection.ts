import { Middleware } from 'polka'
import { r } from 'rethinkdb-ts'

export const pool = r.connectPool({
    user: 'dev',
    password: '',
    host: 'driver.rethinkdb.insidethesandbox.studio',
    port: 28015,
    db: 'test',
})

export function rethink_pool(): Middleware {
    return async (req, res, next) => {
        await pool;
        next();
    }
}