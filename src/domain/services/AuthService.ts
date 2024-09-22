import mongoose from "mongoose";
import { IAuthRepository } from "../repositories/IAuthRepository";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"


export class AuthService {
  constructor(private authRepository: IAuthRepository) {}

  async checkPassword(password: string, hpassword: string): Promise<boolean> {
    return await bcrypt.compare(password,hpassword)
  }

  async createToken(id:mongoose.Types.ObjectId):Promise<string>{
    return await jwt.sign({id},process.env.JWT_SECRET as string )
  }
}
