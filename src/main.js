'use strict';

const Hapi = require('hapi');
const Good = require('good');
const Boom = require('boom');

const Onvista = require('./onvista');
const FourTraders = require('./4traders');
const Yahoo = require('./yahoo');

const server = new Hapi.Server();
server.connection({
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
});

server.route({
    method: 'GET',
    path: '/aktie',
    handler: function (request, reply) {
        let result = {};
        if (request.query.yahoo) {
            let yahooResult = Yahoo.load(request.query.yahoo);
            result.aktuellerKurs = yahooResult.kursAktuell;
            result.historischeKurse = yahooResult.kurseHistorisch;
        }
        if (request.query.onvista) {
            let onvistaResult = Onvista.load(request.query.onvista);
            result.kennzahlen = onvistaResult;
        }
        if (request.query.fourTraders) {
            let fourTradersResult = FourTraders.load(request.query.fourTraders);
            result.analysten = fourTradersResult;
        }

        reply(result)
            .code(200)
            .type('application/json');
    },
    config: {
        cors: {
            origin: [ '*' ],
            additionalHeaders: [ 'cache-control', 'x-requested-with' ]
        }
    }
});

server.register({
    register: Good,
    options: {
        reporters: {
            console: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{
                    response: '*',
                    log: '*'
                }]
            }, {
                module: 'good-console',
            }, 'stdout']
        }
    }
}, (err) => {
    if (err) {
        throw err; // something bad happened loading the plugin
    }

    server.start((err) => {
        if (err) {
            throw err;
        }
        server.log('info', `Server running at: ${server.info.uri}`);
    });
});