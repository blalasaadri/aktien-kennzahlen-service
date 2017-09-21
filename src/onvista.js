'use strict';

const load = function(id) {
    // Mock
    if (id === "Siemens-Aktie-DE0007236101") {
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
    } else if (id === 'Allianz-Aktie-DE0008404005') {
        return [
            {
                geschaeftsjahr: '2017e',
                gewinnProAktie: 16.15,
                kgv: 11.45
            },
            {
                geschaeftsjahr: '2016',
                gewinnProAktie: 15.14,
                kgv: 10.36,
                eigenkapitalquote: '+7,96%',
                ebitMarge: '-',
                eigenkapitalrendite: '+9,77%'
            },
            {
                geschaeftsjahr: '2015',
                gewinnProAktie: 14.56,
                kgv: 11.23,
                eigenkapitalquote: '+7,78%',
                ebitMarge: '-',
                eigenkapitalrendite: '+10,00%'
            },
            {
                geschaeftsjahr: '2014',
                gewinnProAktie: 13.71,
                kgv: 10.01,
                eigenkapitalquote: '+7,90%',
                ebitMarge: '-',
                eigenkapitalrendite: '+9,76%'
            },
            {
                geschaeftsjahr: '2013',
                gewinnProAktie: 13.23,
                kgv: 9.85,
                eigenkapitalquote: '+7,42%',
                ebitMarge: '-',
                eigenkapitalrendite: '+11,34%'
            }
        ];
    } else {
        return [];
    }
};

exports.load = load;