"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_register_1 = require("./routes_register");
console.log("🚀 ~ file: main.ts ~ line 2 ~ routes", routes_register_1.routes);
// import polka from 'polka';
// import { json } from 'body-parser';
// import * as glob from 'glob';
// import * as path from 'path';
// const app = polka({
//   onError(err, req, res, next) {
//   },
//   onNoMatch(req, res) {
//     res.end(JSON.stringify({
//       'message': 'notmatch'
//     }))
//   }
// })
// app
//   .use(json())
// console.log("1")
// async function main() {
//   const __dirname = path.resolve();
//   const files = glob.sync('**/*.*', { cwd: path.resolve(__dirname, './routes'), absolute: true });
//   console.log("🚀 ~ file: main.ts ~ line 24 ~ main ~ files", files)
//   // for await (const file of files) {
//   //   const mods = await import(file);
//   //   const pattern = file.replace(/^.*routes\//, '/').replace(/.(ts|js)$/, '').replace(/index$/, '');
//   //   for (const [method, handler] of toPairs(mods)) {
//   //     const met = method.toUpperCase() as HTTPMethod;
//   //     if (includes(<HTTPMethod[]>["GET", "POST", "PUT", "PATCH", "DELETE"], met)) {
//   //       console.log([met, pattern])
//   //       app.add(met, pattern, handler as any)
//   //     }
//   //   }
//   // }
//   app
//   .listen(3000, err => {
//     if (err) throw err;
//     console.log(`> Running on localhost:3000`);
//   });
// }
// main()
