import {Router} from "express"
import { BillRepository } from "../../infrastructure/db/repositories/BillRepository"
import { BillService } from "../../domain/services/BillService"
import { CreateBill } from "../../application/billUsecases/CreateBill"
import { GetBills } from "../../application/billUsecases/GetBills"
import { BillController } from "../controller/BillController"
import verifyToken from "../../middleware/JwtVerification"

const router = Router()

const billRepository =new BillRepository()
const billService = new BillService(billRepository)
const createBillUsecase =new CreateBill(billService)
const getBillUsecase = new GetBills(billService)


const billController =new BillController(createBillUsecase,getBillUsecase)


router.post('/create-bill',verifyToken,(req,res)=>billController.create(req,res))
router.get("/get-allbills",verifyToken,(req,res)=>billController.getAll(req,res))

export default router