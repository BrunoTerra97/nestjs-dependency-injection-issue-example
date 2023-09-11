import { Test } from '@nestjs/testing';
import { User } from 'src/entities/User';
import { LocalUserRepository } from 'src/repositories/LocalUserRepository';
import { UserRepository } from 'src/repositories/UserRepository';
import { describe, beforeEach, it, expect, SpyInstance, vi } from 'vitest';
import { GetUserUseCase } from './GetUserUseCase';

let getUserUseCase: GetUserUseCase;
let userRepository: UserRepository;
let spyUserRepositoryGetById: SpyInstance<[id: string], Promise<User>>;

describe('GetUserUseCase', () => {
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UserRepository,
          useClass: LocalUserRepository,
        },
        GetUserUseCase,
      ],
    }).compile();

    userRepository = moduleRef.get<UserRepository>(UserRepository);
    spyUserRepositoryGetById = vi.spyOn(userRepository, 'getById');
    getUserUseCase = moduleRef.get<GetUserUseCase>(GetUserUseCase);
  });

  it('should be defined', () => {
    expect(getUserUseCase).toBeDefined();
    expect(userRepository).toBeDefined();
  });

  it('should get a user by id', async () => {
    const params = {
      userId: '456',
    };
    spyUserRepositoryGetById.mockImplementationOnce(async () => ({
      id: '456',
      name: 'test',
      email: 'test@test.com',
    }));
    await expect(getUserUseCase.execute(params)).resolves.not.toThrow();
  });
});
