import { Response } from "express";
import { HTTPCode } from "../constant/http.constant";
import logger from "./logger";

type MetaReponseType = {
  message?: string;
  code: HTTPCode;
  status: "success" | "error";
};

type JSONResponseType = {
  meta: MetaReponseType;
  data?: Object;
};

class HttpResponse {
  private static JSONResponse(
    code: HTTPCode,
    message?: string,
    data: Object = null
  ) {
    const payload: JSONResponseType = {
      meta: {
        code,
        status: String(code).charAt(0) !== "2" ? "error" : "success",
        message: message,
      },
      data: data,
    };

    return payload;
  }

  public static success(
    res: Response,
    message: string,
    data?: Object,
    code: HTTPCode = HTTPCode.Success
  ) {
    logger.info(message);

    return res.status(code).json(this.JSONResponse(code, message, data));
  }

  public static error(res: Response, message: string, code: HTTPCode) {
    return res.status(code).json(this.JSONResponse(code, message));
  }
}

class ErrorHandler extends Error {
  public message: string;
  public data: Object;
  public status: number;

  constructor(message: string, data: any = {}, status: number = 400) {
    super();
    this.message = message;
    this.status = status;
    this.data = data;
  }
}

export { HttpResponse, ErrorHandler };
