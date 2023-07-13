import morgan, { StreamOptions } from "morgan";
import logger from "@common/logger";

morgan.token("date", function getDate(): string {
    return new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" });
});

const combined = ":remote-addr - :remote-user [:date] \":method :url HTTP/:http-version\" :status :res[content-length] \":referrer\" \":user-agent\" :response-time ms";
const morganFormat = process.env.ENV != "production" ? "dev" : combined;

const stream: StreamOptions = {
    write: (message) => logger.info(message)
};

const morganMiddleware = morgan(morganFormat, { stream });

export default morganMiddleware;