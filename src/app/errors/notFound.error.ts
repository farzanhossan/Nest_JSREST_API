import { NotFoundException } from '@nestjs/common';

export class NotFoundError extends NotFoundException {
  constructor(data: any) {
    super(data);
  }
}
