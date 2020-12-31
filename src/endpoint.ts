import { create, object, pattern, string, Struct } from 'superstruct';
import { ObjectType } from 'superstruct/lib/utils';
import type { Request } from 'polka';
import type { ServerResponse } from 'http';
import qs from 'qs';
import { HTTPMethod } from 'trouter';
import polka from 'polka';
import { toPairs } from 'lodash';

/** 
 * Global polka instance api for register all handler 
 * @see endpoint
 * @see register_endpoint
 **/
const api = polka();

/** 
 * This will generate router handler wrapper for polka. 
 * use validator with [superstruct]{@link https://www.npmjs.com/package/superstruct}
 * this method do NOT regitry you handler yet. {@see register_endpoint}
 * you NEED to add to polka after that with custom pattern (/api/school) 
 **/
export function endpoint<
  Params extends Struct<any, any>,
  Query extends Struct<any, any>,
  Body extends Struct<any, any>
>(
  options: {
    method?: HTTPMethod,
    params?: Params,
    query?: Query,
    body?: Body,
    handler: (args: {
      params: Params["TYPE"],
      query: Query["TYPE"],
      body: Body["TYPE"]
    }) => any
  }
) {
  return async (req: Request & { body?: any }, res: ServerResponse) => {
    // validate parameter
    const params = options.params ? create(req.params, options.params) : req.params as never;
    const query = options.query && req.search ? create(qs.parse(req.search), options.query) : { ...req.query } as never;
    const body = options.body && req.body ? create(req.body, options.body) : (req.body ?? {} as never);
    // handle
    const result = await options.handler({ params, query, body });
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result))
  }
}

/** 
 * This will register polka handler to {@see api}
 * @param pattern eg: "/" "/api/schools" "/schools/:school_id"
 * @param methods key is uppercase HTTPMethod, value is polka router handler
 **/
export function register_endpoint(opt: {
  pattern: string,
  methods: Partial<{ [k in HTTPMethod]: Function }>
}) {
  for (const [meth, handler] of toPairs(opt.methods)) {
    console.log('>', meth.padEnd(5), opt.pattern)
    api.add(meth as HTTPMethod, opt.pattern, handler as any)
  }
}

import "./routes/index"
import "./routes/schools/index"
import "./routes/schools/:school_id"

export default api;