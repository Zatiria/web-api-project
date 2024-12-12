import { HttpStatus } from '@nestjs/common';

export class ApiResponse<T> {
  constructor(
    public message: string,
    public statusCode: HttpStatus,
    public data: T,
  ) {}
}