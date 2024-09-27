import { IBillRepository } from "../../domain/repositories/IBillRepository";

export  class GetHospitalData{
    constructor(private billRepository:IBillRepository){}

    async execute(){
        return await this.billRepository.getHospitalData()
    }
}