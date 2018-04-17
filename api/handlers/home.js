module.exports.hello = {
  handler: function (request, reply) {
    
    // console.log(request.mysql.pool);
    const pool = request.mysql.pool;
    pool.query('select * from users', (err, result) => {
      if (err) {
        console.log(err);
        return reply('internal mysql error');
      }
      reply({result});
    })
    // return reply({ result: 'Hello hapi!' });
  }
};

module.exports.restricted = {
  auth: 'jwt',
  handler: function (request, reply) {
    return reply({ result: 'Restricted!' });
  }
};

module.exports.notFound = {
  handler: function (request, reply) {
    return reply({ result: 'Oops, 404 Page!' }).code(404);
  }
};