import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller()
export class UserController {
  listUser = [];

  @Get('user')
  findAll(@Res() response: Response) {
    return response.status(200).json(this.listUser);
  }

  @Post('user')
  cadastrarUser(@Req() request: Request, @Res() response: Response) {
    this.listUser.push(request.body)
    return response.status(200).json("adicionado com sucesso");
  }
}