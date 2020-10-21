import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BaseController } from '../../../base/base.controller';
import { CreateContactGroupDto } from '../dtos/create/create-contactGroup.dto';
import { ContactGroupService } from '../services/contactGroup.service';
import { CreateContactGroupResponseDto } from '../dtos/responses/create-contactGroup-response.dto';

@ApiTags('ContactGroup')
@UsePipes(new ValidationPipe())
@Controller('contactGroups')
export class ContactGroupController extends BaseController<CreateContactGroupDto> {
  private relations: string[] = [];

  constructor(private readonly service: ContactGroupService) {
    super(service, []);
  }

  @ApiBody({ type: CreateContactGroupDto })
  @ApiResponse({
    status: 200,
    type: CreateContactGroupResponseDto,
    isArray: false,
    description: 'Example Response',
  })
  @Post()
  create(@Body() data: CreateContactGroupDto): Promise<any> {
    return this.service.insert(data);
  }
}
