let { rock } = require('../tiles/decoration.js'),
    { normal: ____, normalNoFood: F___, nest, nestNoFood: nesf } = require('../tiles/misc.js'),

room = [
    [rock,F___,rock,F___,____,F___,____,F___,____,F___,____,F___,rock,F___,rock],
    [F___,rock,F___,____,F___,____,F___,____,F___,____,F___,____,F___,rock,F___],
    [rock,F___,____,F___,____,F___,____,F___,____,F___,____,F___,____,F___,rock],
    [F___,____,F___,____,F___,____,F___,____,F___,____,F___,____,F___,____,F___],
    [____,F___,____,F___,rock,F___,rock,F___,rock,F___,rock,F___,____,F___,____],
    [F___,____,F___,____,F___,nest,nesf,nest,nesf,nest,F___,____,F___,____,F___],
    [____,F___,____,F___,rock,nesf,nest,nesf,nest,nesf,rock,F___,____,F___,____],
    [F___,____,F___,____,F___,nest,nesf,nest,nesf,nest,F___,____,F___,____,F___],
    [____,F___,____,F___,rock,nesf,nest,nesf,nest,nesf,rock,F___,____,F___,____],
    [F___,____,F___,____,F___,nest,nesf,nest,nesf,nest,F___,____,F___,____,F___],
    [____,F___,____,F___,rock,F___,rock,F___,rock,F___,rock,F___,____,F___,____],
    [F___,____,F___,____,F___,____,F___,____,F___,____,F___,____,F___,____,F___],
    [rock,F___,____,F___,____,F___,____,F___,____,F___,____,F___,____,F___,rock],
    [F___,rock,F___,____,F___,____,F___,____,F___,____,F___,____,F___,rock,F___],
    [rock,F___,rock,F___,____,F___,____,F___,____,F___,____,F___,rock,F___,rock]
];

module.exports = room;