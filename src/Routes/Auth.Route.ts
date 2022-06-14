import express, { Request, Response, NextFunction } from "express";
const router = express.Router();

router.get("/login", (req: Request, res: Response, next: NextFunction) => {
  res.send("Get Login Done");
});

router.post("/login", (req: Request, res: Response, next: NextFunction) => {
  res.send("login");
});

export default router;
