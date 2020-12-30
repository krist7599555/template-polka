import * as r_ from './routes/index'
import * as r_s from './routes/schools/index'
import * as r_s_i from './routes/schools/:school_id'

import type { HTTPMethod } from 'trouter';
import { toPairs } from 'lodash';
import { pattern } from 'superstruct';
const allowed_methods: HTTPMethod[] = ["GET", "POST", "PUT", "PATCH", "DELETE"];

type RouteHandle = [HTTPMethod, string, Function];
function to_path(mod: any, pattern: string) {
    return toPairs(mod).map(([meth, hand]) => [meth.toUpperCase(), pattern, hand])
}

console.log('!!!')
export const routes: RouteHandle[] = [
    ...to_path(r_, '/') as any,
    ...to_path(r_s, '/school') as any,
    ...to_path(r_s_i, '/school/:school_id') as any,
]

// console.log(routes)
console.log([
    ['/', require('./routes/index')],
    ['/schools', require('./routes/schools/index')],
    ['/schools/:school_id', require('./routes/schools/:school_id')],
].map(([pattern, meths]) => meths))