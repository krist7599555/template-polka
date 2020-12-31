import polka from 'polka';
import { json } from 'body-parser';
import api from "./endpoint";
import { rethink_pool } from './database/connection';

const app = polka({
  onError(err, req, res, next) {

  },
  onNoMatch(req, res) {
    res.end(JSON.stringify({
      'message': 'notmatch'
    }))
  }
})

app
  .use(rethink_pool())
  .use(json())
  .use("/", api)

app
  .listen(3000, err => {
    if (err) throw err;
    console.log(`> Running on http://0.0.0.0:3000`);
  });
