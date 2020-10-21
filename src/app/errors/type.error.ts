import { NotAcceptableException } from '@nestjs/common';

export class TypeError extends NotAcceptableException {
  constructor(data: any) {
    super(data);
  }
}
