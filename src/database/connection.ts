import { r } from 'rethinkdb-ts';

const pool = r.connectPool({
  user:     'dev',
  password: '',
  host:     'driver.rethinkdb.insidethesandbox.studio',
  port:     28015,
  db:       'test',
});

/** get rethinkDB global connection pool {@see pool} */
export function rethink_pool(): typeof pool {
  return pool;
}
