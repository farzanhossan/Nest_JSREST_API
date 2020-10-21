import {
  Body,
  Controller,
  Get,
  NotAcceptableException,
  Post,
  Query,
  Req,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ValidationErrorCode } from 'src/app/constants/errorCode.constant';
import { FileValidationErrorMessage } from 'src/app/constants/errorMessage.constant';
import { fileTypeFilter, initError, storageFileOptions } from 'src/app/utils';
import { BaseController } from '../../../base/base.controller';
import { CreateContactDto } from '../dtos/create/create-contact.dto';
import { CreateContactResponseDto } from '../dtos/responses/create-contact-response.dto';
import { SearchContactGroupDto } from '../dtos/search-contactGroup.dto';
import { ContactService } from '../services/contact.service';
import { FilterContactDto } from './../dtos/filter-contact.dto';

@ApiTags('Contact')
@UsePipes(new ValidationPipe())
@Controller('contacts')
export class ContactController extends BaseController<CreateContactDto> {
  private relations: string[] = [];

  constructor(private readonly service: ContactService) {
    super(service, []);
  }

  @Get('filter')
  filter(@Query() query: FilterContactDto): Promise<any> {
    return this.service.filterData(query);
  }

  @ApiBody({ type: CreateContactDto })
  @ApiResponse({
    status: 200,
    type: CreateContactResponseDto,
    isArray: false,
    description: 'Example Response',
  })
  @Post()
  create(@Body() data: CreateContactDto): Promise<any> {
    return this.service.insert(data);
  }

  @Get('/getContactDetails')
  @ApiResponse({
    status: 200,
    type: SearchContactGroupDto,
    isArray: false,
    description: 'Example Response',
  })
  async numberSearch(@Query() data: SearchContactGroupDto): Promise<any> {
    try {
      return this.service.numberSearch(data);
    } catch (error) {
      return error;
    }
  }

  @Post('/uploadFile')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(
    FileInterceptor('file', {
      storage: storageFileOptions,
      fileFilter: fileTypeFilter,
    }),
  )
  bulkInsert(@Req() req, @UploadedFile() file) {
    try {
      if (req.fileValidationError) {
        throw new NotAcceptableException(
          initError(FileValidationErrorMessage, ValidationErrorCode),
        );
      }
      return this.service.bulkInsert(file);
    } catch (error) {
      return error;
    }
  }
}
