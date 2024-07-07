let { rock, roid } = require('../tiles/decoration.js'),
    { wall: WALL, dancefloor: dcf0, dancefloor1: dcf1, dancefloor2: dcf2, dancefloor3: dcf3, dancefloor4: dcf4, dancefloor5: dcf5, normal: ____, normalNoFood: F___, nest, nestNoFood: nesf } = require('../tiles/misc.js'),
    { portal: port } = require('../tiles/portal.js'),

room = [
    [rock,rock,rock,roid,F___,F___,F___,F___,____,____,____,F___,F___,F___,F___,roid,rock,rock,rock,WALL,rock,rock,____,WALL,WALL,WALL,____,WALL,WALL,roid,____,F___,____,F___,____,F___,____,rock,rock],
    [rock,rock,roid,____,F___,F___,F___,F___,F___,____,F___,F___,F___,F___,F___,____,roid,rock,rock,WALL,rock,rock,roid,WALL,F___,WALL,F___,____,WALL,____,F___,WALL,WALL,____,WALL,WALL,WALL,rock,rock],
    [rock,roid,____,____,F___,F___,WALL,WALL,WALL,WALL,WALL,WALL,WALL,F___,F___,____,____,roid,rock,WALL,WALL,F___,____,F___,____,F___,WALL,F___,____,F___,WALL,F___,____,F___,____,F___,____,F___,____],
    [roid,____,____,F___,F___,F___,F___,F___,F___,F___,F___,F___,F___,F___,F___,F___,____,____,roid,WALL,WALL,____,WALL,____,WALL,____,roid,____,WALL,WALL,WALL,____,WALL,roid,F___,____,WALL,____,WALL],
    [F___,F___,F___,F___,nest,nesf,nest,nesf,nest,nesf,nest,nesf,nest,nesf,nest,F___,F___,F___,F___,WALL,WALL,F___,____,F___,WALL,WALL,WALL,F___,____,F___,WALL,F___,WALL,WALL,WALL,F___,WALL,F___,WALL],
    [F___,F___,F___,F___,nesf,F___,F___,F___,F___,F___,F___,F___,F___,F___,nesf,F___,F___,F___,F___,WALL,WALL,WALL,WALL,____,F___,____,F___,____,WALL,____,roid,____,F___,____,F___,____,F___,____,roid],
    [F___,F___,WALL,F___,nest,F___,WALL,WALL,WALL,F___,WALL,WALL,WALL,F___,nest,F___,WALL,F___,F___,WALL,____,F___,____,F___,WALL,F___,WALL,F___,WALL,WALL,WALL,F___,WALL,WALL,WALL,F___,WALL,WALL,WALL],
    [____,____,WALL,F___,nesf,F___,WALL,dcf1,dcf0,dcf3,dcf2,dcf0,WALL,F___,nesf,F___,WALL,____,____,WALL,F___,WALL,roid,____,WALL,____,WALL,nest,nesf,nest,nesf,nest,WALL,____,F___,____,F___,____,WALL],
    [F___,F___,WALL,F___,nest,F___,WALL,dcf2,dcf4,dcf1,dcf5,dcf1,WALL,F___,nest,F___,WALL,F___,F___,WALL,____,WALL,WALL,F___,WALL,F___,WALL,nesf,nest,nesf,nest,nesf,WALL,F___,____,F___,____,F___,WALL],
    [____,____,WALL,F___,nesf,F___,F___,dcf0,dcf5,port,dcf2,dcf3,F___,F___,nesf,F___,WALL,F___,port,WALL,port,____,F___,____,WALL,____,F___,nest,nesf,port,nesf,nest,F___,____,F___,____,F___,____,WALL],
    [F___,F___,WALL,F___,nest,F___,WALL,dcf4,dcf3,dcf1,dcf5,dcf0,WALL,F___,nest,F___,WALL,F___,F___,WALL,____,WALL,____,F___,roid,F___,WALL,nesf,nest,nesf,nest,nesf,WALL,F___,____,F___,____,F___,WALL],
    [F___,F___,WALL,F___,nesf,F___,WALL,dcf5,dcf2,dcf4,dcf3,dcf4,WALL,F___,nesf,F___,WALL,____,____,WALL,F___,WALL,WALL,WALL,F___,roid,WALL,nest,nesf,nest,nesf,nest,WALL,____,F___,____,F___,____,WALL],
    [F___,F___,WALL,F___,nest,F___,WALL,WALL,WALL,F___,WALL,WALL,WALL,F___,nest,F___,WALL,F___,F___,WALL,____,F___,____,F___,____,WALL,WALL,WALL,WALL,F___,WALL,F___,WALL,WALL,WALL,F___,WALL,WALL,WALL],
    [F___,F___,F___,F___,nesf,F___,F___,F___,F___,F___,F___,F___,F___,F___,nesf,F___,F___,F___,F___,WALL,F___,WALL,F___,WALL,F___,roid,F___,____,F___,roid,F___,____,F___,____,F___,____,F___,____,F___],
    [F___,F___,F___,F___,nest,nesf,nest,nesf,nest,nesf,nest,nesf,nest,nesf,nest,F___,F___,F___,F___,WALL,roid,WALL,____,WALL,____,F___,WALL,WALL,WALL,F___,WALL,WALL,WALL,F___,____,WALL,WALL,F___,____],
    [roid,____,____,F___,F___,F___,F___,F___,F___,F___,F___,F___,F___,F___,F___,F___,____,____,roid,WALL,F___,WALL,F___,WALL,WALL,____,WALL,____,F___,____,WALL,roid,F___,____,F___,roid,F___,WALL,F___],
    [rock,roid,____,____,F___,F___,WALL,WALL,WALL,WALL,WALL,WALL,WALL,F___,F___,____,____,roid,rock,WALL,____,WALL,____,F___,____,F___,WALL,F___,WALL,F___,WALL,F___,WALL,WALL,____,F___,____,WALL,____],
    [rock,rock,roid,____,F___,F___,F___,F___,F___,____,F___,F___,F___,F___,F___,____,roid,rock,rock,WALL,rock,rock,roid,WALL,WALL,WALL,WALL,____,WALL,____,WALL,WALL,F___,____,F___,WALL,WALL,rock,rock],
    [rock,rock,rock,roid,F___,F___,F___,F___,____,____,____,F___,F___,F___,F___,roid,rock,rock,rock,WALL,rock,rock,____,F___,____,F___,____,F___,WALL,F___,____,F___,____,WALL,____,roid,____,rock,rock]
];

module.exports = room;