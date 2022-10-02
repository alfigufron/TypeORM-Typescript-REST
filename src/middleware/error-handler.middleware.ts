import { NextFunction, Request, Response } from "express";

import logger from "../config/logger";

import { ErrorHandler, HttpResponse } from "../config/http";
import { HTTPMessage } from "../constant/http.constant";

export default function ErrorHandlerMiddlerware(
  err: ErrorHandler,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const httpCode = err.status || 500;
  const messageError = err.message || HTTPMessage.ServerError;

  if (["3", "4"].includes(String(httpCode).charAt(0)))
    logger.warn(messageError);
  else logger.error(messageError);

  return HttpResponse.error(res, messageError, httpCode);
}
