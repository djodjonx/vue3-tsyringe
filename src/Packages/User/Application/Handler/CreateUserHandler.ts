import UserAction from "../../Domain/Action/UserAction";
import { injectable, inject } from "tsyringe";
import User from "../../Domain/Model/User";

@injectable()
export default class CreateUserHandler {
  constructor(
    @inject(UserAction)
    private readonly userAction: UserAction
  ) {}

  execute(name: string, lastName: string, age: number): Promise<User> {
    return this.userAction.create(name, lastName, age);
  }
}
