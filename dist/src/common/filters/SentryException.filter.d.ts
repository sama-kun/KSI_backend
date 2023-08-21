import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
export declare class SentryExceptionFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost): void;
}
