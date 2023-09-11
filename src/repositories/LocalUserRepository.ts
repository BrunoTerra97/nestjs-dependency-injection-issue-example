import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/User';
import { UserRepository } from './UserRepository';

@Injectable()
export class LocalUserRepository implements UserRepository {
  async getById(_id: string): Promise<User | undefined> {
    return {} as User;
  }
}
