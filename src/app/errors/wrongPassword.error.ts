import { ForbiddenException } from '@nestjs/common';

export class WrongPasswordError extends ForbiddenException {
  constructor(data: any) {
    super(data);
  }
}
