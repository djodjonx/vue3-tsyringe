import { container, Lifecycle } from "tsyringe";
import CreateUserHandler from "../../Application/Handler/CreateUserHandler";
import GetUsersHandler from "../../Application/Handler/GetUsersHandler";
import GetUserHandler from "../../Application/Handler/GetUserHandler";
import UserAction from "../../Domain/Action/UserAction";
import { IUserRepository } from "../../Domain/Repository/UserRepositoryInterface";
import UserRepository from "../../Infrastructure/Repository/UserRepository";

export default class UserBuilder {
  init() {
    container
      .register(
        CreateUserHandler,
        {
          useClass: CreateUserHandler,
        },
        {
          lifecycle: Lifecycle.Singleton,
        }
      )
      .register(
        GetUsersHandler,
        {
          useClass: GetUsersHandler,
        },
        {
          lifecycle: Lifecycle.Singleton,
        }
      )
      .register(
        GetUserHandler,
        {
          useClass: GetUserHandler,
        },
        {
          lifecycle: Lifecycle.Singleton,
        }
      )
      .register(
        UserAction,
        {
          useClass: UserAction,
        },
        {
          lifecycle: Lifecycle.Singleton,
        }
      )
      .register(
        IUserRepository,
        {
          useClass: UserRepository,
        },
        {
          lifecycle: Lifecycle.Singleton,
        }
      );
  }
}
