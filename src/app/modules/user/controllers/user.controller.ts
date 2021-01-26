import { ParamsDto } from './../../../commonDtos/params.id.dto';
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
import { UpdateUserDto } from '../dtos/update/update-user.dto';
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
    try {
      return this.service.create(data);
    } catch (error) {
      return error;
    }
  }

  @Get()
  findAll(): Promise<any> {
    try {
      return this.service.findAll();
    } catch (error) {
      return error;
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<any> {
    try {
      return this.service.findOne(id);
    } catch (error) {
      return error;
    }
  }

  @Put(':id')
  update(@Param() id: ParamsDto, @Body() data: UpdateUserDto): Promise<any> {
    try {
      return this.service.update(id, data);
    } catch (error) {
      return error;
    }
  }

  @Delete(':id')
  delete(@Param() id: ParamsDto): Promise<any> {
    try {
      return this.service.delete(id);
    } catch (error) {
      return error;
    }
  }
}
