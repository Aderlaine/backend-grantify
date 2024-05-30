import express, { Express, Request, Response } from "express";
import notFound from "./handler/notFound";
import errorHandler from "./handler/errorHandler";
import router from "./routes";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', router);    

app.get("/", (req: Request, res: Response): Response => {
  return res.json("Hello World!!");
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});