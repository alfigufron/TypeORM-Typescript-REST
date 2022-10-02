import { Request, Response, Router } from "express";
import UserController from "../../controllers/user.controller";

const route = Router();

export default function apiRouter() {
  route.get("/ping", (req: Request, res: Response) => {
    res.send("API Service OK!");
  });

  route.get("/user", UserController.all);

  return route;
}
