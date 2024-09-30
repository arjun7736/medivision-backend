import { IBillRepository } from "../../domain/repositories/IBillRepository";

export class GetSingleBill{
    constructor(private billRepository:IBillRepository){}

    async execute(id:string){
        return await this.billRepository.getSingleBill(id)
    }
}