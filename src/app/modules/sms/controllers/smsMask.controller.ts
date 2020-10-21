import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { BaseController } from '../../../base/base.controller';
import { CreateSmsMaskDto } from '../dtos/create/create-smsMask.dto';
import { SmsMaskService } from '../services/smsMask.service';

@ApiTags('SmsMask')
@UsePipes(new ValidationPipe())
@Controller('smsMasks')
export class SmsMaskController extends BaseController<CreateSmsMaskDto> {
  private relations: string[] = [];

  constructor(private readonly service: SmsMaskService) {
    super(service, []);
  }

  @ApiBody({ type: CreateSmsMaskDto })
  @Post()
  create(@Body() data: CreateSmsMaskDto): Promise<any> {
    return this.service.insert(data);
  }
}
