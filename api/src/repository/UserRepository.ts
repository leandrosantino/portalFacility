import { prisma } from "database";
import { IUserRepository } from "entities/user/IUserRepository";
import { User } from "entities/user/User";
import { injectable } from "tsyringe";

@injectable()
export class UserRepository implements IUserRepository {
  async getByUsername(username: User["username"]): Promise<User | null> {
    return await prisma.users.findUnique({
      where: { username }
    }) as User
  }
  exists(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  getById(id: number): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
  findMany(): Promise<User[]> {
    throw new Error("Method not implemented.");
  }

}
