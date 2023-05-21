import { NextFunction, Request, Response } from 'express';
import { faker } from '@faker-js/faker';

const getJobs = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res
      .status(200)
      .json([
        faker.person.jobTitle(),
        faker.person.jobTitle(),
        faker.person.jobTitle()
      ]);
  } catch (error) {
    next(error);
  }
};

export default getJobs;
