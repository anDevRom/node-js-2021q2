import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { StatusCodes, getReasonPhrase } from 'http-status-codes'
import { logger } from './logger';

export const errorHandler = (err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  const statusCode = StatusCodes.INTERNAL_SERVER_ERROR;

  res
    .status(statusCode)
    .send(getReasonPhrase(statusCode));

  logger(Boolean(err))(req, res, next);
}