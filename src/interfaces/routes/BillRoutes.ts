import {Router} from "express"
import { BillRepository } from "../../infrastructure/db/repositories/BillRepository"
import { BillService } from "../../domain/services/BillService"
import { CreateBill } from "../../application/billUsecases/CreateBill"
import { GetBills } from "../../application/billUsecases/GetBills"
import { BillController } from "../controller/BillController"
import verifyToken from "../../middleware/JwtVerification"
import { GetHospitalData } from "../../application/billUsecases/GetHospitalData"
import { GetSingleBill } from "../../application/billUsecases/GetSingleBill"

const router = Router()

const billRepository =new BillRepository()
const billService = new BillService()

const createBillUsecase =new CreateBill(billService,billRepository)
const getBillUsecase = new GetBills(billRepository)
const getHospital = new GetHospitalData(billRepository)
const getSingleData = new GetSingleBill(billRepository)

const billController =new BillController(createBillUsecase,getBillUsecase,getHospital,getSingleData)


router.post('/create-bill',verifyToken,(req,res,next)=>billController.create(req,res,next))
router.get("/get-allbills/:filter",verifyToken,(req,res,next)=>billController.getAll(req,res,next))
router.get("/get-bill/:id",verifyToken,(req,res,next)=>billController.getSingleBillData(req,res,next))
router.get("/get-hospitalData",verifyToken,(req,res,next)=>billController.getHospitalData(req,res,next))

export default router