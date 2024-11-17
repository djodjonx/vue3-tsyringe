import User from "../../Domain/Model/User";
import { UserRepositoryInterface } from "../../Domain/Repository/UserRepositoryInterface";
import { injectable } from "tsyringe";
import WithState from "../../../Common/Infrastructure/WithState";

interface UserRepositoryState {
  users: User[];
}

@injectable()
export default class UserRepository
  extends WithState<UserRepositoryState>
  implements UserRepositoryInterface
{
  constructor() {
    super(
      {
        users: [new User("0", "john", "doe", 39)],
      },
      ["about"]
    );
  }

  getUser(id: string): Promise<User | null> {
    const user = this.state.users.find((user) => user.id === id) ?? null;
    return Promise.resolve(user);
  }

  getAll(): Promise<User[]> {
    return Promise.resolve(this.state.users);
  }

  create(name: string, lastName: string, age: number): Promise<User> {
    const user = new User(
      Math.floor(Math.random() * 1000).toString(),
      name,
      lastName,
      age
    );
    this.state.users.push(user);
    return Promise.resolve(user);
  }
}
