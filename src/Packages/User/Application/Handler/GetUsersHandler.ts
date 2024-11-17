import UserAction from "../../Domain/Action/UserAction";
import { injectable, inject } from "tsyringe";
import User from "../../Domain/Model/User";

@injectable()
export default class GetUsersHandler {
  constructor(
    @inject(UserAction)
    private readonly userAction: UserAction
  ) {}

  execute(): Promise<User[]> {
    return this.userAction.all();
  }
}
