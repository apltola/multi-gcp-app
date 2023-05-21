import { Router } from 'express';
import getJobs from './getJobs';

const router = Router();

router.get('/', getJobs);

export default router;
