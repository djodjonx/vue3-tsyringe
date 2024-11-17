import GetUserHandler from "../../Application/Handler/GetUserHandler";
import GetUsersHandler from "../../Application/Handler/GetUsersHandler";
import { container } from "tsyringe";
import CreateUserHandler from "../../Application/Handler/CreateUserHandler";

export function useUser() {
  return {
    getUser: (id: string) => container.resolve(GetUserHandler).execute(id),
    getUsers: () => container.resolve(GetUsersHandler).execute(),
    createUser: (name: string, lastName: string, age: number) =>
      container.resolve(CreateUserHandler).execute(name, lastName, age),
  };
}
