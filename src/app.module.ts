import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './controllers/UserController';
import { GetUserUseCase } from './useCases/GetUserUseCase';
import { UserRepository } from './repositories/UserRepository';
import { PrismaUserRepository } from './repositories/PrismaUserRepository';
import { RemoteRepository } from './repositories/RemoteRepository';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
  ],
  controllers: [UserController],
  providers: [
    GetUserUseCase,
    RemoteRepository,
    { provide: UserRepository.name, useClass: PrismaUserRepository },
  ],
})
export class AppModule {}
