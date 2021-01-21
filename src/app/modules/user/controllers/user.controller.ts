import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../dtos/create/create-user.dto';
import { UserService } from '../services/user.service';
import { User } from './../schemas/user.schema';
@ApiTags('User')
@UsePipes(new ValidationPipe())
@Controller('users')
export class UserController {
  private relations: string[] = [];
  private users: User[] = [];

  constructor(private readonly service: UserService) {}

  @ApiBody({ type: CreateUserDto })
  @Post()
  create(@Body() data: CreateUserDto): Promise<any> {
    return this.service.create(data);
  }

  @Get()
  findAll(): Promise<any> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<any> {
    return this.service.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any): Promise<any> {
    return;
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<any> {
    return;
  }
}
