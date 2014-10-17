'use strict';

/**
 * imports.
 */

var assert = require('chai').assert;
var express = require('express');

/**
 * local imports.
 */

var knex = require('../express');

/**
 * test cases.
 */

describe('express().use(knex())', function () {
  it('augments `this` with `.knex` instance.', function () {
    var app = express();

    app.use(knex());

    app.use(function (req, res, next) {
      assert.property(req, 'knex')
    });
  });
});
