import logger from "@common/logger";
import { Request, Response } from "express";

import { inject, injectable } from "tsyringe";
import { ExampleWorker } from "@request/workers/ExampleWorker";
import { ExampleApis } from "@request/apis/ExampleApis";

@injectable()
export class ExampleController {
  constructor(
    @inject("ExampleApis") private exampleApis: ExampleApis,
    @inject("ExampleWorker") private exampleWorker: ExampleWorker,
  ) {
    this.exampleApis = exampleApis;
    this.exampleWorker = exampleWorker;
  }

  get = async (req: Request, res: Response): Promise<void> => {
    try {
      const apiResponse = await this.exampleApis.get();

      res.status(200).json({ data : apiResponse.data });
    } catch (error) {
      console.log(error)
      logger.error(error);

      res.status(500).json({
        message: error,
      });
    }
  };
}
