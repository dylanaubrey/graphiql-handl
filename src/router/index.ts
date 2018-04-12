import { Request, Response, Router } from "express";
import htmlTemplate from "../template";
import { GraphiQLHandlArgs } from "../types";

export default function getRouter(args: GraphiQLHandlArgs): Router {
  const router = Router();

  router
    .get("/", (req: Request, res: Response): void => {
      try {
        res.status(200).send(htmlTemplate(args));
      } catch (error) {
        console.log(error); // tslint:disable-line
      }
    })
    .get("*", (req: Request, res: Response): void => {
      res.redirect("/");
    });

  return router;
}
