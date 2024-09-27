import { Document } from "mongoose";
import { IHospital } from "./IHospital";

export interface IBill extends Document{
    hospital:IHospital,
    totalAmount:number,
    totalPercentage:number,
    data:Data[]
}

interface Data{
    id:number,
    description:string,
    amount:number,
    percentage:number,
}