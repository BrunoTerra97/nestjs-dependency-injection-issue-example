import { Injectable } from '@nestjs/common';
import { UserRepository } from './UserRepository';
import { User } from 'src/entities/User';
import { RemoteRepository } from './RemoteRepository';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private repository: RemoteRepository) {}

  async getById(id: string): Promise<User | undefined> {
    const rawUser = await this.repository.rawUser.findUnique({
      where: { id },
    });

    if (rawUser) {
      return new User(rawUser);
    }
  }
}
