import { Request, Response, NextFunction } from 'express';
import logger from '../services/logger';

const logRequest = (req: Request, res: Response, next: NextFunction) => {
  logger.info({
    message: `Received request: ${req.method} ${req.originalUrl}`,
    messageInfo: {
      body: req.body,
      params: req.params,
      query: req.query
    }
  });

  next();
};

export default logRequest;
