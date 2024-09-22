import { BillService } from "../../domain/services/BillService";

export class CreateBill{
    constructor (private billservice:BillService){}

    async execute(){
        return "CreateBill"
    }
    
}