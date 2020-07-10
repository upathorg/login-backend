import * as knex from 'knex';
import dbFactory from '../dbFactory';

export default abstract class Store<Interface> {
  private tableName: string;
  private db: knex;

  constructor(table: string) {
    this.tableName = table;
    this.db = dbFactory();
  }

  private table(): knex.QueryBuilder {
    return this.db(this.tableName);
  }

  async getById(id: number | string): Promise<Interface> {
    const [row] = await this.table().where({ id });

    return row;
  }
}
