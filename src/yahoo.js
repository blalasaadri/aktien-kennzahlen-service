'use strict';

const load = function(id) {
    return {
        ag: 'Siemens Aktiengesellschaft',
        kursAktuell: 116.55,
        kurseHistorisch: [
            {
                datum: '2017-09-21',
                boersenschluss: 116.50
            },
            {
                datum: '2017-09-20',
                boersenschluss: 115.95
            },
            {
                datum: '2017-09-19',
                boersenschluss: 116.00
            },
            {
                datum: '2017-09-18',
                boersenschluss: 116.85
            },
            {
                datum: '2017-09-15',
                boersenschluss: 116.30
            },
        ]
    };
}

exports.load = load;