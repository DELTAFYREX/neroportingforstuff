let { base1: bas1, base2: bas2, base3: bas3, base4: bas4 } = require('../tiles/tdm.js'),
    {} = require('../tiles/dominators.js',

room = [
    [F___,F___,F___,hook,F___,F___,F___,F___],
    [F___,hook,F___,F___,F___,F___,hook,F___],
    [F___,F___,F___,F___,hook,F___,F___,F___],
    [F___,F___,hook,F___,F___,F___,F___,hook],
    [hook,F___,F___,F___,F___,hook,F___,F___],
    [F___,F___,F___,hook,F___,F___,F___,F___],
    [F___,hook,F___,F___,F___,F___,hook,F___],
    [F___,F___,F___,F___,hook,F___,F___,F___]
];

module.exports = room;