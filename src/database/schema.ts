import { define, object, string } from "superstruct";

const Location = define('Location', value => {
  return true
})

export const SchoolsSchame = object({
  id: string(),
  title: string(),
  location: Location
})