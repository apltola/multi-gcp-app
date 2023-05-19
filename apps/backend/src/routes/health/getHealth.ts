import { Request, Response } from 'express';

const healthCheckHandler = (req: Request, res: Response) => {
  res.status(200).json({ message: 'api is healthy' });
};

export default healthCheckHandler;
