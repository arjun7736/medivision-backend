import mongoose from "mongoose";
import { Hospital } from "./Hospital";

export class Bill {
  constructor(
    public _id: mongoose.Types.ObjectId,
    public description: string,
    public taxableAmound: number,
    public gstAmound:number,
    public payableAmound:number,
    public billTo:Hospital,
    public createdAt: Date,
    public invoiceNo: number,
    public currency: string,
    public paymentType:string,
    public cinNo:number, 
    public gstNo:number,
    public name:string,
    public bankDetails:string,
    public branch:string,
    public accoundNo:number,
    public ifscCode:number,
    public email:string,
    public address:string
  ) {}
}
