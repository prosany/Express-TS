import { Request, Response, NextFunction } from "express";

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    res.status(200).send({ status: 1, message: "Login Successful" });
  } catch (error) {
    next(error);
  }
};

export { login };
