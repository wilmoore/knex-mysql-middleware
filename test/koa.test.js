'use strict';

/**
 * imports.
 */

var assert = require('chai').assert;
var koa = require('koa');

/**
 * local imports.
 */

var knex = require('..');

/**
 * test cases.
 */

describe('koa().use(knex())', function () {
  it('augments `this` with `.knex` instance.', function () {
    var app = koa();

    app.use(knex());

    app.use(function* (next) {
      assert.property(this, 'knex')
    });
  });
});
