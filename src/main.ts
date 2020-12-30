import { routes } from "./routes_register"
console.log("🚀 ~ file: main.ts ~ line 2 ~ routes", routes)
import polka from 'polka';
import { json } from 'body-parser';
import * as glob from 'glob';
import * as path from 'path';
import api from "./endpoint";

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
  .use(json())
  .use("/", api)
  .listen(3000, err => {
    if (err) throw err;
    console.log(`> Running on http://0.0.0.0:3000`);
  });
