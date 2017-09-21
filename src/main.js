'use strict';

const Hapi = require('hapi');
const Good = require('good');
const Boom = require('boom');

const ids = require('./ids').ids;
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

const getAktie = function (yahoo, onvista, fourTraders) {
    let result = {};
    if (yahoo) {
        let yahooResult = Yahoo.load(yahoo);
        result.ag = yahooResult.ag;
        result.aktuellerKurs = yahooResult.kursAktuell;
        result.historischeKurse = yahooResult.kurseHistorisch;
    }
    if (onvista) {
        let onvistaResult = Onvista.load(onvista);
        result.kennzahlen = onvistaResult;
    }
    if (fourTraders) {
        let fourTradersResult = FourTraders.load(fourTraders);
        result.analysten = fourTradersResult;
    }

    return result;    
};

const getAktien = function (ags) {
    if (ags) {
        return ags
            .split(',')
            .map(id => {
                let webserviceIds = ids.filter(ag => ag.id === id)[0];
                return webserviceIds;
            }).map(webserviceIds => {
                return getAktie(webserviceIds.yahoo, webserviceIds.onvista, webserviceIds.fourTraders);
            });
    } else {
        return [];
    }
}

server.route({
    method: 'GET',
    path: '/aktie',
    handler: function(request, reply) {
        let result = getAktie(request.query.yahoo, request.query.onvista, request.query.fourTraders);

        server.log('info', "Aktie: " + JSON.stringify(result));

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

server.route({
    method: 'GET',
    path: '/aktien',
    handler: function(request, reply) {
        let result = getAktien(request.query.ags);

        server.log('info', "Aktien: " + JSON.stringify(result));

        return reply(result)
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