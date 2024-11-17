import User from "../Model/User";
import {
  IUserRepository,
  type UserRepositoryInterface,
} from "../Repository/UserRepositoryInterface";
import { injectable, inject } from "tsyringe";

@injectable()
export default class UserAction {
  constructor(
    @inject(IUserRepository)
    private readonly userRepository: UserRepositoryInterface
  ) {}

  get(id: string): Promise<User | null> {
    return this.userRepository.getUser(id);
  }

  all(): Promise<User[]> {
    return this.userRepository.getAll();
  }

  create(name: string, lastName: string, age: number): Promise<User> {
    return this.userRepository.create(name, lastName, age);
  }
}
