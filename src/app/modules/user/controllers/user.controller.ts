import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { BaseController } from '../../../base/base.controller';
import { CreateUserDto } from '../dtos/create/create-user.dto';
import { UserService } from '../services/user.service';

@ApiTags('User')
@UsePipes(new ValidationPipe())
@Controller('users')
export class UserController extends BaseController<CreateUserDto> {
  private relations: string[] = [];

  constructor(private readonly service: UserService) {
    super(service, []);
  }

  @ApiBody({ type: CreateUserDto })
  @Post()
  create(@Body() data: CreateUserDto): Promise<any> {
    return this.service.insert(data);
  }
}
