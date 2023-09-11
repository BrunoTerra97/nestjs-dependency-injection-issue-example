import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/entities/User';
import { UserRepository } from 'src/repositories/UserRepository';

interface GetUserRequest {
  userId: string;
}

@Injectable()
export class GetUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute({ userId }: GetUserRequest): Promise<User> {
    const user = await this.userRepository.getById(userId);

    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}
