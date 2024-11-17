import UserAction from "../../Domain/Action/UserAction";
import { injectable, inject } from "tsyringe";
import User from "../../Domain/Model/User";

@injectable()
export default class GetUserHandler {
  constructor(
    @inject(UserAction)
    private readonly userAction: UserAction
  ) {}

  execute(id: string): Promise<User | null> {
    return this.userAction.get(id);
  }
}
