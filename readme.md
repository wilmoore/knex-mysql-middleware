# knex-mysql-middleware

[![Build Status](http://img.shields.io/travis/wilmoore/knex-mysql-middleware.svg)](https://travis-ci.org/wilmoore/knex-mysql-middleware) [![NPM version](http://img.shields.io/npm/v/knex-mysql-middleware.svg)](https://www.npmjs.org/package/knex-mysql-middleware) [![NPM downloads](http://img.shields.io/npm/dm/knex-mysql-middleware.svg)](https://www.npmjs.org/package/knex-mysql-middleware) [![LICENSE](http://img.shields.io/npm/l/knex-mysql-middleware.svg)](LICENSE)

> Set a MySQL flavored Knex connection that can be accessed via Koa or Express middleware.

    $ npm install knex-mysql-middleware

## Usage

###### Quick Start (koa or express)

    // koa
    var knex = require('knex-mysql-middleware');
    var app = require('koa')();
    app.use(knex());

    app.use(function *() {
      this.status = (yield this.knex('resource').where('id', this.query.id)) ? 204 : 404;
    });

    // express
    var knex = require('knex-mysql-middleware/express');
    var app = require('express')();
    app.use(knex());

    app.use(function () {
      this.status = this.knex('resource').where('id', req.query.id) ? 204 : 404;
    });

## Options

###### Auto-initialize via environment variables (recommended)

> It is recommended that you set the parameters via environment variables and utilize a `.env` file via a library such as [envc], [dotenv], or an equivalent.

    DATABASE_NAME=demo
    DATABASE_USER=scott
    DATABASE_PASS=tiger
    DATABASE_HOST=127.0.0.1
    DATABASE_PORT=3306

    # optional
    DATABASE_SSL=true
    DATABASE_DEBUG=true
    DATABASE_POOL_MIN=0
    DATABASE_POOL_MAX=7

###### Configuration via options object

    var config = {
      connection: {
        host     : '127.0.0.1',
        user     : 'scott',
        password : 'tiger',
        database : 'demo'
      },
      // optional
      debug: true,
      pool: {
        min: 0,
        max: 7
      },
      ssl: true
    }

    app.use(knex(config));

## Alternatives

- [koa-knex-middleware]

## License

  [MIT](LICENSE)

[koa-knex-middleware]: https://www.npmjs.org/package/koa-knex
[envc]: https://www.npmjs.org/package/envc
[dotenv]: https://www.npmjs.org/package/dotenv

