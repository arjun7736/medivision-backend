import mongoose from "mongoose";
import { Bill } from "../entities/Bill";
import { IBillRepository } from "../repositories/IBillRepository";

export class BillService{
    constructor(private billRepository:IBillRepository){}

    async createBill():Promise<string>{
        return  "chnage Promise to bills"
    }

    async getbills(id:mongoose.Types.ObjectId):Promise<string>{
        return "change this tooooooooo"
    }
}