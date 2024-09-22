import mongoose from "mongoose";
import { BillService } from "../../domain/services/BillService";

export class GetBills{
    constructor(private billService:BillService){}

    async execute(id:mongoose.Types.ObjectId){
        return "return data"
    }
}