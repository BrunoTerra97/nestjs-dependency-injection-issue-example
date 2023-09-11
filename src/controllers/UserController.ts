import { Controller, Get, Inject } from '@nestjs/common';
import { GetUserUseCase } from '../useCases/GetUserUseCase';

@Controller('user')
export class UserController {
  constructor(private readonly getUserUseCase: GetUserUseCase) {}

  @Get()
  async getHello() {
    return await this.getUserUseCase.execute({ userId: '123' });
  }
}
