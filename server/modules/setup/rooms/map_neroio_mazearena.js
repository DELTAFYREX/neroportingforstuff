let { rock, roid } = require('../tiles/decoration.js'),
    { wall: WALL, normal: ____, normalNoFood: F___, nest, nestNoFood: nesf, dfxwall: DWAL } = require('../tiles/misc.js'),
    { portal: port } = require('../tiles/portal.js'),

room = [
    [rock,rock,____,WALL,WALL,WALL,____,WALL,WALL,roid,____,F___,____,F___,____,F___,roid,rock,rock],
    [rock,rock,roid,WALL,F___,WALL,F___,roid,WALL,____,F___,WALL,WALL,____,WALL,WALL,WALL,rock,rock],
    [WALL,F___,____,F___,roid,F___,WALL,F___,____,F___,WALL,F___,____,F___,____,F___,____,F___,____],
    [WALL,____,WALL,____,WALL,____,roid,____,WALL,WALL,WALL,____,WALL,roid,F___,____,WALL,rock,WALL],
    [WALL,F___,____,F___,WALL,WALL,WALL,F___,____,F___,WALL,F___,WALL,WALL,WALL,F___,WALL,F___,WALL],
    [WALL,WALL,WALL,roid,F___,____,F___,____,WALL,____,roid,____,F___,____,F___,____,F___,____,roid],
    [____,F___,roid,rock,WALL,F___,WALL,F___,WALL,WALL,WALL,F___,WALL,WALL,WALL,F___,WALL,WALL,WALL],
    [F___,WALL,roid,roid,WALL,roid,WALL,nest,nesf,nest,nesf,nest,WALL,roid,F___,____,F___,roid,WALL],
    [____,WALL,WALL,F___,WALL,F___,WALL,nesf,nest,nesf,nest,nesf,WALL,F___,____,F___,____,F___,WALL],
    [F___,____,F___,____,WALL,____,F___,nest,nesf,nest,nesf,nest,F___,____,F___,____,F___,____,WALL],
    [____,WALL,____,F___,roid,F___,WALL,nesf,nest,nesf,nest,nesf,WALL,F___,____,F___,____,F___,WALL],
    [rock,WALL,WALL,WALL,F___,roid,WALL,nest,nesf,nest,nesf,nest,WALL,roid,F___,____,F___,roid,WALL],
    [____,F___,____,F___,____,WALL,WALL,WALL,WALL,F___,WALL,F___,WALL,WALL,WALL,F___,WALL,WALL,WALL],
    [F___,WALL,F___,WALL,F___,roid,F___,____,F___,roid,F___,____,F___,roid,F___,____,F___,____,F___],
    [roid,WALL,____,WALL,____,F___,WALL,WALL,WALL,F___,WALL,WALL,WALL,F___,____,WALL,WALL,F___,____],
    [F___,WALL,F___,WALL,WALL,____,WALL,____,F___,roid,WALL,roid,F___,____,F___,roid,F___,WALL,F___],
    [____,WALL,____,F___,____,F___,WALL,F___,WALL,F___,WALL,F___,DWAL,WALL,____,F___,____,WALL,roid],
    [rock,rock,roid,WALL,WALL,WALL,WALL,____,WALL,____,WALL,WALL,F___,____,F___,WALL,WALL,rock,rock],
    [rock,rock,____,F___,____,F___,____,F___,WALL,F___,roid,F___,____,WALL,____,roid,____,rock,rock]
];

module.exports = room;