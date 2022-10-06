import { Response } from "express";
import { HTTPCode } from "../constant/http.constant";
import logger from "./logger";

type MetaReponseType = {
  success: Boolean;
  code: HTTPCode;
  status: "success" | "error";
  message?: string;
};

type JSONResponseType = {
  meta: MetaReponseType;
  data?: Object;
};

class HttpResponse {
  private static getStatus(code: String) {
    code = code.charAt(0);

    let message;

    switch (code) {
      case "1":
        message = "Informational";
        break;
      case "2":
        message = "Success";
        break;
      case "3":
        message = "Redirection";
        break;
      case "4":
        message = "Client Error";
        break;
      default:
        message = "Server Error";
        break;
    }

    return message;
  }

  private static JSONResponse(
    code: HTTPCode,
    message?: string,
    data: Object = null
  ) {
    const payload: JSONResponseType = {
      meta: {
        success: String(code).charAt(0) !== "2" ? false : true,
        code,
        status: this.getStatus(String(code)),
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
