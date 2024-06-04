import { Router } from 'express';

import { createPublication } from './app/useCases/publications/createPublication';

export const router = Router();

router.post('/publications', createPublication);
