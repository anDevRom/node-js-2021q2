import { NextFunction, Request, Response } from 'express';
import { finished } from 'stream';
import { writeFile, writeFileSync } from 'fs';

const LOG_PATH = './logs.txt';
const ERROR_LOG_PATH = './error-logs.txt';

export const logger = (isError: boolean) => {
  const writePath = isError ? ERROR_LOG_PATH : LOG_PATH;

  return (req: Request, res: Response, next: NextFunction) => {
    const {url, method, params, body} = req;

    next();

    finished(res, () => {
      const { statusCode } = res;

      const log = `${method} ${url} ${JSON.stringify(params)} ${JSON.stringify(body)} ${statusCode}\n\n`

      writeFile(writePath, log, {flag: 'a'}, () => {
        console.log(log);
      })
    })
  };
}

export const uncaughtExceptionLogger = (err: Error, origin: string) => {
  const log = `Captured error ${err.message}\n${origin}`;

  writeFileSync(ERROR_LOG_PATH, log, {flag: 'a'});
}

export const unhandledRejectionLogger = (reason: Error) => {
  const log = `Unhandled rejection detected ${reason.message}\n`;

  writeFileSync(ERROR_LOG_PATH, log, {flag: 'a'});
}