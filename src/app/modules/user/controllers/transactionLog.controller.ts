import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { BaseController } from '../../../base/base.controller';
import { CreateTransactionLogDto } from '../dtos/create/create-transactionLog.dto';
import { TransactionLogService } from '../services/transactionLog.service';

@ApiTags('TransactionLog')
@UsePipes(new ValidationPipe())
@Controller('transactionLogs')
export class TransactionLogController extends BaseController<CreateTransactionLogDto> {
  private relations: string[] = [];

  constructor(private readonly service: TransactionLogService) {
    super(service, []);
  }

  @ApiBody({ type: CreateTransactionLogDto })
  @Post()
  create(@Body() data: CreateTransactionLogDto): Promise<any> {
    return this.service.insert(data);
  }
}
