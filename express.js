'use strict';

/**
 * Imports.
 */

var knex = require('knex');

/**
 * Exports.
 */

module.exports = knexMysqlExpress;

/**
 * Initialize a MySQL flavored Knex connection that can be accessed via Koa or Express middleware (i.e. route handlers).
 *
 * @return {Function}
 * Koa middleware.
 */

function knexMysqlExpress() {
  var conn = {
    ssl      : process.env.DATABASE_SSL,
    host     : process.env.DATABASE_HOST,
    user     : process.env.DATABASE_USER,
    debug    : process.env.DATABASE_DEBUG,
    charset  : process.env.DATABASE_CHARSET,
    password : process.env.DATABASE_PASS,
    database : process.env.DATABASE_NAME
  };

  return function knexMysqlExpress(req, res, next) {
    req.knex = knex({ client: 'mysql', connection: conn });
    next();
  };
};
