const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/product/:id", (req, res) => {
      const actualPage = "/product";
      const { params } = req;
      const queryParams = { name: params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/maker/:id", (req, res) => {
      const actualPage = "/maker";
      const { params } = req;
      const queryParams = { username: params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/maker/:id/:tab", (req, res) => {
      const actualPage = "/maker";
      const { params } = req;
      const queryParams = { username: params.id, tab: params.tab };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/products/:tab", (req, res) => {
      const actualPage = "/products";
      const { params } = req;
      const queryParams = { tab: params.tab };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/makers/:tab", (req, res) => {
      const actualPage = "/makers";
      const { params } = req;
      const queryParams = { tab: params.tab };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/todos/:tab", (req, res) => {
      const actualPage = "/todos";
      const { params } = req;
      const queryParams = { tab: params.tab };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/review/:slug", (req, res) => {
      const actualPage = "/review";
      const { params } = req;
      const queryParams = { slug: params.slug };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
