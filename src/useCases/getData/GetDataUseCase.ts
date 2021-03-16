import { IDataRepository } from '../../repositories/IDataRepository';

export class GetDataUseCase {
  constructor(
    private getDataRepository: IDataRepository,
  ) {}

  async execute() {
    const data = await this.getDataRepository.getData();

    return data;
  }
}
