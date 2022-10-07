import { NextFunction, Request, Response } from "express";
import { ErrorHandler, HttpResponse } from "../config/http";
import { HTTPCode } from "../constant/http.constant";

class UserController {
  public static async all(req: Request, res: Response, next: NextFunction) {
    try {
      const error = true;

      if (error)
        throw new ErrorHandler("Data Not Found", null, HTTPCode.NotFound);

      return HttpResponse.success(res, "List User");
    } catch (err) {
      next(new ErrorHandler(err.message, err.data, err.status));
    }
  }
}

export default UserController;
