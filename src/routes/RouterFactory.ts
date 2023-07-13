import { Request, Response, Router } from "express";
import { ExampleRouter } from "./ExampleRouter";

export class RouterFactory {
  private readonly version = "v1";
  private readonly baseUrl = `/api/${this.version}`;

  create = () => {
    const baseRouter = Router();
    const searchRouter = new ExampleRouter().create();

    baseRouter.get("/", (req: Request, res: Response) => {
      res.status(200).send({
        env: process.env.ENV,
      });
    });

    baseRouter.use(this.baseUrl, searchRouter);

    return baseRouter;
  };
}
