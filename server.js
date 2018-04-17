'use strict';

const Glue = require('glue');
const manifest = require('./config/manifest');

if (!process.env.PRODUCTION) {
  manifest.registrations.push({
    "plugin": {
      "register": "blipp",
      "options": {}
    }
  });
}

Glue.compose(manifest, { relativeTo: __dirname }, (err, server) => {
  if (err) {
    console.log('server.register err:', err);
  }
  // server.register({
  //   plugin: require('hapi-mysql2'),
  //   options: {
  //     settings: 'mysql://root:root@localhost/hp',
  //     decorate: true
  //   }
  // });
  server.start(() => {
    console.log('✅  Server is listening on ' + server.info.uri.toLowerCase());
  });
});