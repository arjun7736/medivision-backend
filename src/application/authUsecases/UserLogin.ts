import { IAuthRepository } from "../../domain/repositories/IAuthRepository";
import { AuthService } from "../../domain/services/AuthService";
import { CustomError } from "../../utils/Error";

export class UserLogin {
  constructor(
    private authservice: AuthService,
    private userRepository: IAuthRepository
  ) {}

  async execute(email: string, password: string): Promise<string> {
    if (!email || !password) throw new CustomError(400, "Fill all the Field");
    const checkExist = await this.userRepository.findByEmail(email);
    if (!checkExist) throw new CustomError(404, "Invalid User");

    const isValid = await this.authservice.checkPassword(password, checkExist.password ?? '');
    if(!isValid) throw new CustomError(401,"invalied Credentials")
    
    return  await this.authservice.createToken(checkExist._id)
  }
}
