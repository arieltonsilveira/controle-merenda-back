import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiParam } from '@nestjs/swagger/dist';
import { Request, Response } from 'express';

@Controller('/user')
@ApiTags('Users')
export class UserController {
  listUser = [];

  @Get('/')
  @ApiResponse({ status: 200, description: 'Sucess' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  findAll(@Res() response: Response) {
    return response.status(200).json(this.listUser);
  }

  @Post('/')
  @ApiResponse({ status: 200, description: 'Sucess' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  cadastrarUser(@Req() request: Request, @Res() response: Response) {
    this.listUser.push(request.body);
    return response.status(200).json('adicionado com sucesso');
  }

  @Get('/:id')
  @ApiParam({ description: 'Id',example: '1', name: 'id'})
  @ApiResponse({ status: 200, description: 'Sucess' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  findById(@Res() response: Response, @Param('id', ParseIntPipe) id: number) {
    return response.status(200).json(this.listUser.find((item) => item.id));
  }
}
