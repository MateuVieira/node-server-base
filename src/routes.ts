import { Router } from 'express'

const router = Router()

router.get('/', (request, response) => response.json({ data: 'Hello World!!' }));

export { router }