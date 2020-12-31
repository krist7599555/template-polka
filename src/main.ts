import { json } from 'body-parser';
import polka from 'polka';

import { rethink_pool } from './database/connection';
import api from "./endpoint";
import { wait_promise_to_resolve } from './middleware';

const BASE_URL = process.env.BASE_URL ?? '/';

polka({
  onError(err, req, res) {
    res.statusCode = 500;
    res.end(JSON.stringify({
      pattern: req.path,
      message: err.message,
      error:   err,
    }));
  },
  onNoMatch(req, res) {
    res.statusCode = 404;
    res.end(JSON.stringify({
      pattern: req.path,
      message: 'pattern is not match any route',
    }));
  },
})
  .use(wait_promise_to_resolve(rethink_pool()))
  .use(json())
  .use(BASE_URL, api)
  .listen(3000, err => {
    if (err) throw err;
    console.log(`> Running on http://0.0.0.0:3000${BASE_URL}`);
  });
