#!/usr/bin/env node

'use strict';

const meow = require('meow');
const awaitUrl = require('.');

const cli = meow(`
    Usage
      $ await-url <url>

    Example
      $ await-url example.com/status
`);

awaitUrl(cli.input[0]).catch((err) => {
    console.error(err);
    process.exit(1);
});
