import express, { Request, Response } from "express";
import {connect} from "../services/mongo";
connect("riglog");
import Session from "../services/session-svc";
import { sessions } from "../routes/sessions";
import auth, {authenticateUser} from "../routes/auth";
import fs from "node:fs/promises";
import path from "path";

const app = express();
app.use(express.static("server"));
app.use(express.json());
app.use("/api/sessions", authenticateUser, sessions);
app.use("/auth", auth);
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";

app.use(express.static(staticDir));

app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello, World");
});

app.get("/session/:date", (req: Request, res: Response) => {
  const {date} = req.params;
  
  Session.get(date).then((data) => {
	if (data) res
	  .set("Content-Type", "application/json")
	  .send(JSON.stringify(data));
	else res
	  .status(404).send();
  });	
});

app.use("/app", (req: Request, res: Response) => {
    const indexHtml = path.resolve(staticDir, "index.html");
    fs.readFile(indexHtml, { encoding: "utf8" }).then((html) =>
        res.send(html)
    );
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
