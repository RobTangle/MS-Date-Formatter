import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { limiter } from "./config/rateLimiter";
import dateRoutes from "./routes/date-routes";

const app = express();

app.use(helmet());
app.use(limiter);
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.use("/api", dateRoutes);

app.get("/ping", (req: Request, res: Response) => {
  return res.send("PONG!");
});

export default app;
