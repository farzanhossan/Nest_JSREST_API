import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { BaseController } from '../../../base/base.controller';
import { CreateSmsStatDto } from '../dtos/create/create-smsStat.dto';
import { SmsStatService } from '../services/smsStat.service';

@ApiTags('SmsStat')
@UsePipes(new ValidationPipe())
@Controller('smsStats')
export class SmsStatController extends BaseController<CreateSmsStatDto> {
  private relations: string[] = [];

  constructor(private readonly service: SmsStatService) {
    super(service, []);
  }

  @ApiBody({ type: CreateSmsStatDto })
  @Post()
  create(@Body() data: CreateSmsStatDto): Promise<any> {
    return this.service.insert(data);
  }
}
