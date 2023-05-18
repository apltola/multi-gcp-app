import { NextFunction, Request, Response } from 'express';
import { faker } from '@faker-js/faker';

const getCandidates = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const person1 = {
      id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName()
    };
    const person2 = {
      id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName()
    };

    res.status(200).json([person1, person2]);
  } catch (error) {
    next(error);
  }
};

export default getCandidates;
