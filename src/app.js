'use strict';

/**
 * Server instance used to view and convert BSTree Expressions 
 */
const Hapi = require('hapi');
const Hoek = require('hoek');

const BSTree = require('./lib/BSTree');

// Create a server with a host and port
const server = new Hapi.Server();

server.connection({ 
  host: 'localhost', 
  port: process.env.PORT || 3501
});

// Register inert (static file serving) and vision (handlebars) 
server.register([require('inert'), require('vision')], (err) => {

  // Handle errors
  Hoek.assert(!err, err);

  // Setup view logic
  server.views({
      engines: {
          html: require('handlebars')
      },
      relativeTo: __dirname,
      path: './views',
      layout: 'index',
      layoutPath: './views/layout',
      partialsPath: './views/partials'
  });

  ////
  // ROUTES
  ////

  // Handle conversion calls with no query
  server.route({
    method: 'get',
    path: '/sort/',
    handler: function (request, reply) {
      return reply({
        list: '',
        error: {
          message: 'Please enter a list of integers or fractions.'
        }
      })
    }
  });

  // Handle conversion calls with a query
  server.route({
    method: 'POST',
    path: '/sort/{q}',
    handler: function (request, reply) {
      const list = request.params.q;
      const tree = BSTree();
      const order = request.payload.order;
      const type = request.payload.type;

      try {
        tree.addValues(list);

        return reply({
          list: list,
          sorted: order === 'desc' ? tree.toStringDesc() : tree.toStringAsc(),
          tree: tree
        });
      } catch (e) {
        return reply({
          list: list,
          error: {
            name: e.name,
            message: e.message
          }
        });
      };
    }
  });

  // Handle style requests
  server.route({
      method: 'get',
      path: '/styles/{file}',
      handler: {
          directory: {
              path: './public/styles'
          }
      }
  });

  // Handle script requests
  server.route({
      method: 'get',
      path: '/scripts/{file}',
      handler: {
          directory: {
              path: './public/scripts'
          }
      }
  });

  // Handle BSTree to Infix converter view
  server.route({
    method: 'GET',
    path:'/', 
    handler: {
      view: {
        template: 'index',
        context: {
          title: 'Tree Sorter',
          subtitle: 'Binary Search Tree '
        }
      }
    }
  });

  // Start the server and log local url 
  server.start((err) => {
    if (err) throw err;
  
    console.log('Server running at:', server.info.uri);
  });
});
