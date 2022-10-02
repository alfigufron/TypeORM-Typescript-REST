import * as moment from "moment";

import { createLogger, transports, format } from "winston";

const logger = createLogger({
  transports: [new transports.Console()],
  format: format.combine(
    format.colorize({ all: true }),

    format.printf((log) => {
      const timestamp = moment().format("DD MMM YYYY HH:mm:ss");
      const { level } = log;
      let { message } = log;

      const resLog = `${timestamp} [${level}] : `;

      if (log.meta) {
        const { url, ip } = log.meta;

        if (url) message = `[${message}] ${url}`;
        if (ip) message = `${ip} | ${message}`;
      }

      return resLog + message;
    })
  ),
});

export default logger;
