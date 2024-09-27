import { IBillRepository } from "../../domain/repositories/IBillRepository";
import { BillService } from "../../domain/services/BillService";
import { IBill } from "../../infrastructure/modelInterface/IBill";
import { CustomError } from "../../utils/Error";

export class CreateBill {
  constructor(
    private billservice: BillService,
    private billRepository: IBillRepository
  ) {}

  async execute(billData:IBill):Promise<string> {
    const valiedData =await this.billservice.validateBill(billData)
    if(valiedData){
        const bill = await this.billRepository.createBill(billData);
        return bill;
    }else{
        throw new CustomError(400,"Recheck The values ")
    }
  }
}
