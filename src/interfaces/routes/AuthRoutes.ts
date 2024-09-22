import { Router } from "express";
import { AuthRepository } from "../../infrastructure/db/repositories/AuthRepository";
import { AuthService } from "../../domain/services/AuthService";
import { UserLogin } from "../../application/authUsecases/UserLogin";
import { AuthController } from "../controller/AuthController";

const router =Router()

const authRepository= new AuthRepository()
const authService = new AuthService(authRepository)

const loginUseCase = new UserLogin(authService,authRepository)
const authController = new AuthController(loginUseCase)

router.post("/login",(req,res,next)=>authController.login(req,res,next))


export default router