import { Controller, Get } from '@nestjs/common';

@Controller()
export class UserController {
  @Get('user')
  findAll(): string {
    return 'This action returns all cats';
  }
}