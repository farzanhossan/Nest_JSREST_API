import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { BaseController } from '../../../base/base.controller';
import { CreateSmsGatewayDto } from '../dtos/create/create-smsGateway.dto';
import { SmsGatewayService } from '../services/smsGateway.service';

@ApiTags('SmsGateway')
@UsePipes(new ValidationPipe())
@Controller('smsGateways')
export class SmsGatewayController extends BaseController<CreateSmsGatewayDto> {
  private relations: string[] = [];

  constructor(private readonly service: SmsGatewayService) {
    super(service, []);
  }

  @ApiBody({ type: CreateSmsGatewayDto })
  @Post()
  create(@Body() data: CreateSmsGatewayDto): Promise<any> {
    return this.service.insert(data);
  }
}
