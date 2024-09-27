import { NextFunction, Request, Response } from "express";
import { CreateBill } from "../../application/billUsecases/CreateBill";
import { GetBills } from "../../application/billUsecases/GetBills";
import { GetHospitalData } from "../../application/billUsecases/GetHospitalData";

export class BillController {
  constructor(
    private createBill: CreateBill,
    private getBills: GetBills,
    private getHospital: GetHospitalData
  ) {}

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.createBill.execute(req.body);
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const filter = req.params.filter as string;
      const data = await this.getBills.execute(filter);
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  async getHospitalData(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.getHospital.execute();
      res.json(data)
    } catch (error) {
      next(error);
    }
  }
}
