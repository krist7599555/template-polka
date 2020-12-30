import { r } from 'rethinkdb-ts'

export const pool = r.connectPool({
    user: 'dev',
    password: '',
    host: 'driver.rethinkdb.insidethesandbox.studio',
    port: 28015,
})