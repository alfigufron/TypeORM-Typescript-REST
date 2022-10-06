import { Request, Response, Router } from "express";
import UserController from "../controllers/user.controller";

const route = Router();

export default function apiRouter() {
  route.get("/ping", (req: Request, res: Response) => res.send("Service OK!"));

  /**
   * API Version 1
   */
  const apiv1Router = () => {
    route.get("/user", UserController.all);

    return route;
  };

  route.use("/api/v1", apiv1Router());

  return route;
}
