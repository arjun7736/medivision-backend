import { Request, Response } from "express";
import { CreateBill } from "../../application/usecases/CreateBill";
import { GetBills } from "../../application/usecases/GetBills";

export class BillController {
  constructor(private createBill: CreateBill, private getBills: GetBills) {}

  async create(req:Request,res:Response) {
    try {
    } catch (error) {}
  }


  async getAll(req:Request,res:Response){
    try {
        
    } catch (error) {
        
    }
  }
}
