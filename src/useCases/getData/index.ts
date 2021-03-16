import { PostegresRepository } from '../../repositories/implementations/PostegresRepository';
import { GetDataController } from './GetDataController';
import { GetDataUseCase } from './GetDataUseCase';

const postegresRepository = new PostegresRepository();

const createGetDataUseCase = new GetDataUseCase(
  postegresRepository,
);

const createGetDataController = new GetDataController(
  createGetDataUseCase,
);

export { createGetDataUseCase, createGetDataController };
