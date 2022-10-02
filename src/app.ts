import * as express from "express";

import { Express } from "express";

import env from "./config/env";
import logger from "./config/logger";
import AppDataSource from "./config/data-source";

import ErrorHandlerMiddlerware from "./middleware/error-handler.middleware";
import RequestHandlerMiddleware from "./middleware/request-hendler.middleware";

import router from "./routes";

const app: Express = express();
const port = env.APP.PORT;

const startService = () => {
  app.use(express.json());

  app.use(RequestHandlerMiddleware);
  app.use(router());
  app.use(ErrorHandlerMiddlerware);

  AppDataSource.initialize()
    .then(() => {
      logger.info("Connection Database Successfully!");
    })
    .catch((err) => {
      logger.error("Connection Database Error");
      logger.error(err);
    });

  app.listen(port, () => {
    console.clear();
    logger.info(
      `Server Running at http://localhost:${port}/ or http://127.0.0.1:${port}/`
    );
  });
};

startService();
