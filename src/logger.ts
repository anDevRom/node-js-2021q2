import { NextFunction, Request, Response } from 'express';
import { finished } from 'stream';
import { writeFile } from 'fs';

export const logger = (req: Request, res: Response, next: NextFunction) => {
  const {url, method, params, body} = req;

  next();

  finished(res, () => {
    const { statusCode } = res;

    const log = `${method} ${url} ${JSON.stringify(params)} ${JSON.stringify(body)} ${statusCode}`

    writeFile('./logs.txt', `${log}\n`, {flag: 'a'}, () => {
      console.log(log);
    })
  })
};