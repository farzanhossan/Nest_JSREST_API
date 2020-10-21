import {
  Controller,
  NotAcceptableException,
  Post,
  Req,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import * as config from 'config';
import { ValidationErrorCode } from 'src/app/constants/errorCode.constant';
import { FileValidationErrorMessage } from 'src/app/constants/errorMessage.constant';
import { initError } from 'src/app/utils';
import {
  fileTypeFilter,
  storageFileOptions,
  storageImageOptions,
} from '../../../utils/util.function';

@ApiTags('Upload')
@UsePipes(new ValidationPipe())
@Controller('upload')
export class UploadController {
  private imageBasePublicPath = config.UPLOAD_BASE_PUBLIC_PATH;

  @Post('uploadImage')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        image: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('image', { storage: storageImageOptions }))
  uploadImage(@UploadedFile() file) {
    const data = {
      link: `${this.imageBasePublicPath}images/${file.filename}`,
    };
    return `Image Upload Success', ${data}`;
  }

  @Post('uploadFile')
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
  uploadFile(@Req() req, @UploadedFile() file) {
    if (req.fileValidationError) {
      throw new NotAcceptableException(initError(FileValidationErrorMessage, ValidationErrorCode));
    }
    const data = {
      link: `${this.imageBasePublicPath}files/${file.filename}`,
    };
    return `Image Upload Success', ${data}`;
  }
}
