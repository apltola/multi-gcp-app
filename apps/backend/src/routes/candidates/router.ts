import { Router } from 'express';
import getCandidates from './getCandidates';

const router = Router();

router.get('/', getCandidates);

export default router;
