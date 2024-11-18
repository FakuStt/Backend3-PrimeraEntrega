import { Router } from 'express';
import mocksController from '../controllers/mocks.controller.js';

const router = Router();

router.get('/mockingpets', mocksController.generateMockingPets);

router.get('/mockingusers', mocksController.generateMockingUsers);

router.post('/generatedata/:cantusers/:cantpets', mocksController.generateData);

export default router;