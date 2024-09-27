import { IBillRepository } from "../../../domain/repositories/IBillRepository";
import { IBill } from "../../modelInterface/IBill";
import BillDB from "../../models/BillModel";
import { Bill } from "../../../domain/entities/Bill";
import { Hospital } from "../../../domain/entities/Hospital";
import HospitalDB from "../../models/HospitalModel";

export class BillRepository implements IBillRepository {
  async createBill(bill: IBill): Promise<string> {
    await BillDB.create(bill);
    return "Created";
  }
  async getAllBills(): Promise<Bill[]> {
    return await BillDB.find();
  }

  async getHospitalData(): Promise<Hospital[]> {
    return await HospitalDB.find();
  }

  async getDailyBills(start: Date, end: Date): Promise<Bill[]> {
    return await BillDB.find({
      createdAt: {
        $gte: start,
        $lte: end,
      },
    });
  }

  async getMonthlyBills(start: Date, end: Date): Promise<Bill[]> {
    return await BillDB.find({
      createdAt: {
        $gte: start,
        $lte: end,
      },
    });
  }
  async getYearlyBills(year: number): Promise<Bill[]> {
    return await BillDB.find({
      $expr: {
        $eq: [{ $year: "$createdAt" }, year],
      },
    });
  }
}
