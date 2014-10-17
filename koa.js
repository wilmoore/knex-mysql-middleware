'use strict';

/**
 * Imports.
 */

var knex = require('knex');

/**
 * Exports.
 */

module.exports = knexMysqlKoa;

/**
 * Set a MySQL flavored Knex connection that can be accessed via Koa or Express middleware.
 *
 * @return {Function}
 * Koa middleware.
 */

function knexMysqlKoa() {
  var conn = {
    ssl      : process.env.DATABASE_SSL,
    host     : process.env.DATABASE_HOST,
    user     : process.env.DATABASE_USER,
    debug    : process.env.DATABASE_DEBUG,
    charset  : process.env.DATABASE_CHARSET,
    password : process.env.DATABASE_PASS,
    database : process.env.DATABASE_NAME
  };

  return function *knexMysqlKoa(next) {
    this.knex = knex({ client: 'mysql', connection: conn });
    yield next;
  };
};
