'use strict';

const load = function(id) {
    if (id === 'SIE.DE') {
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
    } else if (id === 'ALV.F') {
        return {
            ag: 'Allianz SE',
            kursAktuell: 186.38,
            kurseHistorisch: [
                {
                    datum: '2017-09-21',
                    boersenschluss: 186.38
                },
                {
                    datum: '2017-09-20',
                    boersenschluss: 184.27
                },
                {
                    datum: '2017-09-19',
                    boersenschluss: 184.60
                },
                {
                    datum: '2017-09-18',
                    boersenschluss: 185.13
                },
                {
                    datum: '2017-09-15',
                    boersenschluss: 185.05
                },
            ]
        };
    } else {
        return {};
    }
}

exports.load = load;