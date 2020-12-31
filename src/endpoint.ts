import { toPairs } from 'lodash';
import type { Polka } from 'polka';
import polka from 'polka';
import qs from 'qs';
import { create,Struct } from 'superstruct';
import { HTTPMethod } from 'trouter';

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
    }) => void
  }
): Polka["handler"] {
  return async (req, res): Promise<void> => {
    // validate parameter
    const params = options.params ? create(req.params, options.params) : req.params as never;
    const query = options.query && req.search ? create(qs.parse(req.search), options.query) : { ...req.query, } as never;
    // @ts-ignore
    const body = options.body && req.body ? create(req.body, options.body) : (req.body ?? {} as never);
    // handle
    const result = await options.handler({ params, query, body, });
    res.writeHead(200, { 'Content-Type': 'application/json', });
    res.end(JSON.stringify(result));
  };
}

/**
 * This will register polka handler to {@see api}
 * @param pattern eg: "/" "/api/schools" "/schools/:school_id"
 * @param methods key is uppercase HTTPMethod, value is polka router handler
 **/
export function register_endpoint(opt: {
  pattern: string,
  methods: Partial<{ [k in HTTPMethod]: ReturnType<typeof endpoint> }>
}): void {
  for (const [meth, handler] of toPairs(opt.methods)) {
    console.log('>', meth.padEnd(5), opt.pattern);
    api.add(meth as HTTPMethod, opt.pattern, handler as any);
  }
}

import "./routes/schools/:school_id";
import "./routes/schools/index";
import "./routes/index";

export default api;
