import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { BaseController } from '../../../base/base.controller';
import { CreateSmsEntryDto } from '../dtos/create/create-smsEntry.dto';
import { SmsEntryService } from '../services/smsEntry.service';

@ApiTags('SmsEntry')
@UsePipes(new ValidationPipe())
@Controller('smsEntrys')
export class SmsEntryController extends BaseController<CreateSmsEntryDto> {
  private relations: string[] = [];

  constructor(private readonly service: SmsEntryService) {
    super(service, []);
  }

  @ApiBody({ type: CreateSmsEntryDto })
  @Post()
  create(@Body() data: CreateSmsEntryDto): Promise<any> {
    return this.service.insert(data);
  }
}
