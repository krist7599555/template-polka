import { define, object, string } from "superstruct";

/** Rethinkdb Pointype conpet with supersturct {@link https://rethinkdb.com/api/javascript/point} */
const Location = define('Location', value => {
  return true
})

export const SchoolsSchame = object({
  id: string(),
  title: string(),
  location: Location
})