import * as knex from 'knex';

export default function dbFactory(): knex {
  return knex({
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING
  });
}
