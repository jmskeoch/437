import express, { Request, Response } from "express";
import {connect} from "./services/mongo";
connect("riglog");
import Session from "./services/session-svc";
import { sessions } from "./routes/sessions";
import auth, {authenticateUser} from "./routes/auth";

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


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
