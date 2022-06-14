import express, {
  Request,
  Response,
  NextFunction,
  Application,
  ErrorRequestHandler,
} from "express";
import cors from "cors";
import { Server } from "http";
import createError from "http-errors";
import morgan from "morgan";
import Config from "./Config/index";

// Initialize the app
const app: Application = express();

// Enable CORS for all requests
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("Public"));

// Common Route
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send({
    status: 1,
    message: "🎉 Congratulations! SurVideo Server is Up and Running 🎉",
  });
});

// Import Routes
app.use("/api", require("./Routes/Auth.Route").default);

// Error Handler
const errorHandler: ErrorRequestHandler = (
  err: { status: number; message: string },
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(err.status || 500);
  res.send({
    status: 0,
    message: err.message,
  });
};

app.use(async (req, res, next) => {
  next(new createError.NotFound());
});

app.use(errorHandler);

const server: Server = app.listen(Config.PORT, () =>
  console.log(`🎉 Server running at http://localhost:${Config.PORT}`)
);
