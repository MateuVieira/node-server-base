export interface IDataRepository {
  getData(): Promise<string>;
}
