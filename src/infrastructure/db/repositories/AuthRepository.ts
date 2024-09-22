import { User } from "../../../domain/entities/User";
import { IAuthRepository } from "../../../domain/repositories/IAuthRepository";
import UserDB from "../../models/UserModel"

export class AuthRepository implements IAuthRepository{
    constructor(){}

   async findByEmail(email: string): Promise<User|null> {
        return await UserDB.findOne({email:email})
    }
}