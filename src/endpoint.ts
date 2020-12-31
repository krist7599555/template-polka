import { create, object, pattern, string, Struct } from 'superstruct';
import { ObjectType } from 'superstruct/lib/utils';
import type { Request } from 'polka';
import type { ServerResponse } from 'http';
import qs from 'qs';
import { HTTPMethod } from 'trouter';
import polka from 'polka';
import { toPairs } from 'lodash';

const api = polka();

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

export function register_endpoint(opt: {
  pattern: string,
  methods: Partial<{ [k in HTTPMethod]: Function }>
}) {
  for (const [meth, handler] of toPairs(opt.methods)) {
    console.log('>', meth.padEnd(5), opt.pattern)
    api.add(meth as HTTPMethod, opt.pattern, handler as any)
  }
}

import "./routes/"
import "./routes/schools"
import "./routes/schools/:school_id"

export default api;