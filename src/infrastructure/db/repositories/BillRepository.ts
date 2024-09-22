import { Types } from "mongoose";
import { Bill } from "../../../domain/entities/Bill";
import { IBillRepository } from "../../../domain/repositories/IBillRepository";

export class BillRepository implements IBillRepository {
  constructor() {}
  createBill(bill: Bill): Promise<string> {
    return Promise.resolve("hai");
  }
  getAllBills(id: Types.ObjectId): Promise<string> {
    return Promise.resolve("hai");
  }
}
