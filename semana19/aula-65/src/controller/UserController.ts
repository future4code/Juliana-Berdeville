import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { TokenGenerator } from "../services/tokenGenerator";
import { UserDatabase } from "../data/UserDatabase";
import { HashGenerator } from "../services/hashGenerator";
import { IdGenerator } from "../services/idGenerator";
import { NotFoundError } from "../errors/NotFoundError";
import { UserRole, stringToUserRole } from "../model/User";
export class UserController {
  private static UserBusiness = new UserBusiness(
    new UserDatabase(),
    new HashGenerator(),
    new TokenGenerator(),
    new IdGenerator()
  );
  userDatabase: any;

  async signup(req: Request, res: Response) {
    try {
      const result = await UserController.UserBusiness.signup(
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.role
      );
      res.status(200).send(result);
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  public async login(req: Request, res: Response) {
    const email = req.body.email;
    const password = req.body.password;
    try {
      const result = await UserController.UserBusiness.login(email, password);
      res.status(200).send(result);
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  public async getUserById(id: string){
    const user = await this.userDatabase.getUserById(id)

    if (!user){
      throw new NotFoundError('Oops. User not found!')
    }
    return {
      id : user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      role: user.getRole()
    }
  }

  public async getAllUsers(role: UserRole){
    if (stringToUserRole(role)!== UserRole.ADMIN){
      throw new Error('You are not suposed to be here. >:(')
    }

    const users = await this.userDatabase.getAllUsers()

    return users.map((users: any) => ({
        id: users.getId(),
        email: users.getEmail(),
        name: users.getName(),
        role: users.getRole()
    }))
  }

  public async getProfile(id: string){
    const user = await this.userDatabase.getUserById(id)
    if (!user){
      throw new NotFoundError('User not found.')
    }

    return {
      id: user.getId(),
      email: user.getEmail(),
      name: user.getName(),
      role: user.getRole()
    }
  }




  
}
