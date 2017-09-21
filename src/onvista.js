'use strict';

const load = function(id) {
    // Mock
    return [
        {
            geschaeftsjahr: '16/17e',
            gewinnProAktie: 7.84,
            kgv: 14.86
        },
        {
            geschaeftsjahr: '15/16',
            gewinnProAktie: 6.74,
            kgv: 17.32,
            eigenkapitalquote: '+27,69%',
            ebitMarge: '+8,88%',
            eigenkapitalrendite: '+15,65%'
        },
        {
            geschaeftsjahr: '14/15',
            gewinnProAktie: 8.84,
            kgv: 10.16,
            eigenkapitalquote: '+27,69%',
            ebitMarge: '+8,95%',
            eigenkapitalrendite: '+20,77%'
        },
        {
            geschaeftsjahr: '13/14',
            gewinnProAktie: 6.37,
            kgv: 14.71,
            eigenkapitalquote: '+30,04%',
            ebitMarge: '+9,91%',
            eigenkapitalrendite: '+17,04%'
        },
        {
            geschaeftsjahr: '12/13',
            gewinnProAktie: 5.08,
            kgv: 19.54,
            eigenkapitalquote: '+28,08%',
            ebitMarge: '+7,49%',
            eigenkapitalrendite: '+14,96%'
        }
    ];
};

exports.load = load;