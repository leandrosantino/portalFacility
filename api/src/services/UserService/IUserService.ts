import { User } from "entities/user/User";
import { UserCreateExceptions } from "entities/user/UserExceptions";

export interface IUserService {
  create(entity: Omit<User, "id">): AsyncResult<User, UserCreateExceptions>
}
