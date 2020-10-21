import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { BaseController } from '../../../base/base.controller';
import { CreateUserInfoDto } from '../dtos/create/create-userInfo.dto';
import { UserInfoService } from '../services/userInfo.service';

@ApiTags('UserInfo')
@UsePipes(new ValidationPipe())
@Controller('userInfos')
export class UserInfoController extends BaseController<CreateUserInfoDto> {
  private relations: string[] = [];

  constructor(private readonly service: UserInfoService) {
    super(service, []);
  }

  @ApiBody({ type: CreateUserInfoDto })
  @Post()
  create(@Body() data: CreateUserInfoDto): Promise<any> {
    return this.service.insert(data);
  }
}
