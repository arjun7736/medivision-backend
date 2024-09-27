import mongoose from "mongoose";
import { CustomError } from "../../utils/Error";
import { IBill } from "../../infrastructure/modelInterface/IBill";

export class BillService {
  constructor() {}

  async validateBill(billData: IBill): Promise<boolean> {
    const { totalAmount, totalPercentage } = billData;
    if (!totalAmount || !totalPercentage)
      throw new CustomError(400, "Fill all the Field");
    return true;
  }

  async getbills(id: mongoose.Types.ObjectId): Promise<string> {
    return "change this tooooooooo";
  }
}
