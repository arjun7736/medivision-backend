import { IBill } from "../../infrastructure/modelInterface/IBill";
import { Bill } from "../entities/Bill";
import { Hospital } from "../entities/Hospital";

export interface IBillRepository{
    createBill(bill:IBill):Promise<string>
    getAllBills():Promise<Bill[]>
    getDailyBills(start:Date,end:Date):Promise<Bill[]>
    getMonthlyBills(start:Date,end:Date):Promise<Bill[]>
    getYearlyBills(year:number):Promise<Bill[]>
    getHospitalData():Promise<Hospital[]>
    getSingleBill(id:string):Promise<Bill|null>
}