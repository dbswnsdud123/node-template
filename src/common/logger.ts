import winston from "winston";
import winstonDaily from "winston-daily-rotate-file";

const logDirectory = "logs";
const { combine, timestamp, printf, colorize } = winston.format;

const logFormat = printf(info => {
    return `[ ${info.level} ] ${info.timestamp} : ${info.message}`;
});

const logger = winston.createLogger({
    format: combine(
        timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        logFormat
    ),
    transports: [
        new winstonDaily({
            level: "info",
            datePattern: "YYYY-MM-DD",
            dirname: logDirectory,
            filename: "%DATE%.log",
            maxFiles: 30,
            zippedArchive: true
        }),
        new winstonDaily({
            level: "error",
            datePattern: "YYYY-MM-DD",
            dirname: logDirectory + "/error",
            filename: "%DATE%.error.log",
            maxFiles: 30,
            zippedArchive: true
        })
    ]
});

if (process.env.ENV != "production") {
    logger.add(new winston.transports.Console({
        format: combine(
            colorize({ all: true }),
            logFormat
        )
    }));
}

export default logger;