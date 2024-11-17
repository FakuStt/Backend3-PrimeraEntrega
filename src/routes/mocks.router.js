import { Router } from 'express';
import mocksController from '../controllers/mocks.controller';

const router = Router();

router.get('/mockingpets', mocksController.generatePets);

router.get('/mockingusers', mocksController.generateMockingUsers);

router.post('/generatedata', mocksController.generateData);

export default router;