import { Router } from 'express';
import { createGetDataController } from './useCases/getData';

const router = Router();

router.get('/', (request, response) => createGetDataController.handle(request, response));

export { router };
