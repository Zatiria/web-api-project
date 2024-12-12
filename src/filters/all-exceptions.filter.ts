import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';
import { ApiResponse } from '../models/response.model';
import { StatusCodes } from 'http-status-codes';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const status =
      exception.status || exception.response?.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;

    const errorResponse = new ApiResponse(
      'Internal server error',
      status,
      exception.response?.message || exception.message || []
    );

    response.status(status).json(errorResponse);
  }
}
