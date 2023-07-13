import moduleAlias from "module-alias";
moduleAlias.addAliases({
  "@config": `${__dirname}/config`,
  "@common": `${__dirname}/common`,
  "@controllers": `${__dirname}/controllers`,
  "@middlewares": `${__dirname}/middlewares`,
  "@request": `${__dirname}/request`,
});

import "dotenv/config";
import { createServer } from "http";
import { App } from "./app";
import logger from "@common/logger";

try {
  const PORT = process.env.PORT;
  const app = new App().app;
  const server = createServer(app);

  server.listen(PORT, () => {
    logger.info(`Env : ${process.env.ENV}`);
    logger.info(`Server is running on port: ${PORT}`);
  });
} catch (error) {
  logger.error(error);
}
