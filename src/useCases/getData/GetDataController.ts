import { Request, Response } from 'express';
import { GetDataUseCase } from './GetDataUseCase';

export class GetDataController {
  constructor(
    private getDataUseCase: GetDataUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data = await this.getDataUseCase.execute();

      return response.json({ data });
    } catch (err) {
      return response.json({ data: 'Fail' });
    }
  }
}
