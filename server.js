const express = require("express");
const next = require("next");
const compression = require("compression");
const path = require("path");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, quiet: false });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(compression());

    server.get("/service-worker.js", (req, res) => {
      const filePath = path.join(__dirname, ".next/service-worker.js");
      app.serveStatic(req, res, filePath);
    });

    server.get("/product/:slug", (req, res) => {
      const actualPage = "/product";
      const { params } = req;
      const queryParams = { slug: params.slug };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/maker/:username", (req, res) => {
      const actualPage = "/maker";
      const { params } = req;
      const queryParams = { username: params.username };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/maker/:username/:tab", (req, res) => {
      const actualPage = "/maker";
      const { params } = req;
      const queryParams = { username: params.username, tab: params.tab };
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

    server.get("/edit-product/:slug", (req, res) => {
      const actualPage = "/edit-product";
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
