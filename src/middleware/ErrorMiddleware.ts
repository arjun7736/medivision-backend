import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../utils/Error';

const errorMiddleware = (
  err: Error | CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = 'Internal Server Error';

  if (err instanceof CustomError) {
    statusCode = err.statusCode;
    message = err.message;
  } else if (err instanceof Error) {
    message = err.message;
  }

  res.status(statusCode).json({
    success: false,
    error: {
      message: message,
    },
  });
};

export default errorMiddleware;
