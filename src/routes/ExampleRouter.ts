import { Router } from "express";
import { container } from "tsyringe";
import { ExampleController } from "@controllers/ExampleController";

export class ExampleRouter {
  create = () => {
    const exampleController = container.resolve(ExampleController);
    const exampleRouter = Router();

    exampleRouter
      .route("/example")
      .get(exampleController.get);

    return exampleRouter;
  };
}
