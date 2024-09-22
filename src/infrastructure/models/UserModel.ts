import mongoose, { Schema } from "mongoose";
import { IUser } from "../modelInterface/IUser";

const UserSchema: Schema = new Schema({
  email: {
    type: String,
  },
  password:{
    type:String
  },
  isManager:{
    type:Boolean,
    default:false
  }
});

export default mongoose.model<IUser>("User",UserSchema)