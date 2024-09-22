import mongoose from "mongoose";

export class User {
  constructor(
    public readonly _id: mongoose.Types.ObjectId,
    public readonly email: string,
    public readonly isManager: boolean,
    public readonly password?: string
  ) {}
}
