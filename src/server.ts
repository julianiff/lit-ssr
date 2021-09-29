// @ts-ignore
import Koa from "koa";
import staticFiles from "koa-static";
// import koaNodeResolve from "koa-node-resolve";
import { Readable } from "stream";
// const {nodeResolve} = koaNodeResolve;

import { render } from "@lit-labs/ssr/lib/render-with-global-dom-shim.js";
import { myTemplate } from "./template.js";

const app = new Koa();
app.use(async (ctx: Koa.Context, next: Function) => {
  if (ctx.URL.pathname !== "/") {
    await next();
    return;
  }
  const result = render(myTemplate("This is server rendered"));
  ctx.body = Readable.from(result);
  ctx.type = "text/html";
});

// app.use(nodeResolve())
app.use(staticFiles(process.cwd()));
app.listen("8080");
