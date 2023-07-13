import "reflect-metadata";
import express, { Application } from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import morgan from "@config/morgan";
import { RouterFactory } from "./routes/RouterFactory";
import logger from "@common/logger";
import injectDependency from "@common/dependency-container";

export class App {
  app: Application;

  constructor() {
    this.app = express();
    this.setMiddleWare();
    this.initializeContainer();
    this.setExpress();
  }

  private setMiddleWare = (): void => {
    this.app.use(cookieParser());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(morgan);
  };

  private setExpress = (): void => {
    try {
      this.setRoute();
    } catch (error) {
      logger.error(error);
    }
  };

  private setRoute = (): void => {
    this.app.use(new RouterFactory().create());
  };

  private initializeContainer = (): void => {
    injectDependency();
  };
}
