import { NextFunction, Request, Response } from "express";
import { UserLogin } from "../../application/authUsecases/UserLogin";

export class AuthController {
  constructor(private userLogin: UserLogin) {}

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const token = await this.userLogin.execute(email, password);
      res.json(token);
    } catch (error) {
      next(error);
    }
  }
}
