import User from "../Model/User";

export const IUserRepository = Symbol.for("IUserRepository");

export interface UserRepositoryInterface {
  create(name: string, lastName: string, age: number): Promise<User>;
  getUser(id: string): Promise<User | null>;
  getAll(): Promise<User[]>;
}
