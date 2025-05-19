import express, { Request, Response } from "express";
import { Session } from "../models/session";

import Sessions from "../services/session-svc";

const app = express();
const router = express.Router();

router.get("/", (_, res: Response) => {
  Sessions.index()
      .then((list: Session[]) => res.json(list))
      .catch((err) => res.status(500).send(err));
});

router.get("/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;

  Sessions.get(userid)
      .then((session: Session) => res.json(session))
      .catch((err) => res.status(404).send(err));
});

router.post("/", (req: Request, res: Response) => {
  const newSession = req.body;

  Sessions.create(newSession)
      .then((session: Session) =>
          res.status(201).json(session)
      )
      .catch((err) => res.status(500).send(err));
});

app.put("/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;
  const newTraveler = req.body;

 Sessions.update(userid, newTraveler)
      .then((traveler: Session) => res.json(traveler))
      .catch((err) => res.status(404).end());
});

router.delete("/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;

  Sessions.remove(userid)
      .then(() => res.status(204).end())
      .catch((err) => res.status(404).send(err));
});


export {router as sessions };

