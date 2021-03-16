import Pool from '../../configs/dbConnection';
import { IDataRepository } from '../IDataRepository';

export class PostegresRepository implements IDataRepository {
  async getData(): Promise<string> {
    try {
      const client = await Pool.connect();

      const sql = 'SELECT * FROM message WHERE id = 2';
      const { rows } = await client.query(sql);
      const todos = rows;

      client.release();

      return todos[0].value;
    } catch (error) {
      return 'Fail';
    }
  }
}
