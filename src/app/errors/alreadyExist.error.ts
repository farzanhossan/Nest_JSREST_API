import { BadRequestException } from '@nestjs/common';

export class AlreadyExistError extends BadRequestException {
  constructor(data: any) {
    super(data);
  }
}
