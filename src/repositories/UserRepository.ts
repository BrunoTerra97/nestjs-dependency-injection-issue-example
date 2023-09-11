import { User } from 'src/entities/User';

export abstract class UserRepository {
  abstract getById(id: string): Promise<User | undefined>;
}
