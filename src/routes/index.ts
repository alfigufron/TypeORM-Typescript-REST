import { Router, Response, Request } from "express";
import apiRouter from "./api";

const route = Router();

export default function router() {
  route.get("/ping", (req: Request, res: Response) => {
    res.send("Service OK!");
  });

  route.use("/api", apiRouter());

  return route;
}
