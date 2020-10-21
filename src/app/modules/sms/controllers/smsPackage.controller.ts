import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { BaseController } from '../../../base/base.controller';
import { CreateSmsPackageDto } from '../dtos/create/create-smsPackage.dto';
import { SmsPackageService } from '../services/smsPackage.service';

@ApiTags('SmsPackage')
@UsePipes(new ValidationPipe())
@Controller('smsPackages')
export class SmsPackageController extends BaseController<CreateSmsPackageDto> {
  private relations: string[] = [];

  constructor(private readonly service: SmsPackageService) {
    super(service, []);
  }

  @ApiBody({ type: CreateSmsPackageDto })
  @Post()
  create(@Body() data: CreateSmsPackageDto): Promise<any> {
    return this.service.insert(data);
  }
}
