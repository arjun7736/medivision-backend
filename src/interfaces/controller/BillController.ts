import { Request, Response } from "express";
import { CreateBill } from "../../application/billUsecases/CreateBill";
import { GetBills } from "../../application/billUsecases/GetBills";

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
