'use strict';

/**
 * Imports.
 */

var debug = require('debug')('knex-mysql-middleware');

/**
 * Exports.
 */

module.exports = close;

/**
 * Close database connection(s).
 *
 * @param {Object} knex
 * Knex database connection object.
 */

function close(knex) {
  knex && knex.destroy && knex.destroy(log);
}

/**
 * Debug logging.
 */

function log() {
  debug('DB connection closed.');
}
