import { isLeftHandSideExpression } from "typescript";
import { IBillRepository } from "../../domain/repositories/IBillRepository";

export class GetBills {
  constructor(private billRepository: IBillRepository) {}

  async execute(filter: string) {
    const date = new Date();
    if (filter == "Daily") {
      const startOfDay = new Date(date.setHours(0, 0, 0, 0));
      const endOfDay = new Date(date.setHours(23, 59, 59, 999));
      return await this.billRepository.getDailyBills(startOfDay, endOfDay);
    } else if (filter == "Monthly") {
      const inputMonth = date.getMonth() + 1;
      const inputYear = date.getFullYear();
      const startOfMonth = new Date(inputYear, inputMonth - 1, 1, 0, 0, 0, 0);
      const endOfMonth = new Date(inputYear, inputMonth, 0, 23, 59, 59, 999);
      return await this.billRepository.getMonthlyBills(startOfMonth,endOfMonth);
    } else if (filter == "Yearly") {
      const getData = date.getFullYear();
      return await this.billRepository.getYearlyBills(getData);
    } else {
      return await this.billRepository.getAllBills();
    }
  }
}
