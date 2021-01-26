import { HttpException } from '@nestjs/common';

export class ApiError extends HttpException {
  constructor(data: any) {
    super(data?.response || data, data?.status || 400);
  }
}
