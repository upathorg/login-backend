import * as knex from 'knex';

exports.up = async (knex: knex) => {
  return await knex.schema.createTable('users', (t) => {
    t.increments('id');
    t.string('first_name').notNullable();
    t.string('last_name').notNullable();
    t.string('email_address').notNullable().unique();
    t.string('password').notNullable();
    t.timestamps(true, true);
  });
};

exports.down = () => {
  throw new Error('Rollback migrations are not supported');
};
