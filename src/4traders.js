'use strict';

const load = function(id) {
    if (id === 'SIEMENS-436605') {
        return {
            durchschnittlicheEmpfehlung: 'AUFSTOCKEN',
            anzahlAnalysten: 29
        };
    } else if (id === 'ALLIANZ-436843') {
        return {
            durchschnittlicheEmpfehlung: 'AUFSTOCKEN',
            anzahlAnalysten: 33
        }
    } else {
        return {
            durchschnittlicheEmpfehlung: 'Ohne MEINUNG',
            anzahlAnalysten: 0
        };
    }
};

exports.load = load;