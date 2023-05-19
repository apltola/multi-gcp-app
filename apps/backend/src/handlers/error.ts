import { Request, Response, NextFunction } from 'express';
import { logError } from '../services/logger';

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logError(`Error in ${req.method} ${req.originalUrl}`, {
    error: err.message,
    stack: err.stack
  });
  res.status(500).json({ message: 'Internal Server Error' });
};

export default errorHandler;
