import { Router } from 'express';
import healthCheckHandler from './getHealth';

const router = Router();

router.get('/', healthCheckHandler);

export default router;
