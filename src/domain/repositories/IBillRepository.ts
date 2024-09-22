import mongoose from "mongoose";
import { Bill } from "../entities/Bill";

export interface IBillRepository{
    createBill(bill:Bill):Promise<string>
    getAllBills(id:mongoose.Types.ObjectId):Promise<string>
}