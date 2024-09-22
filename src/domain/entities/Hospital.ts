import mongoose from "mongoose";

export class Hospital {
  constructor(
    public _id: mongoose.Types.ObjectId,
    public name: string,
    public place: string,
    public district: string,
    public gstNo: number,
  ) {}
}
