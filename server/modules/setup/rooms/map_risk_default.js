let	{ base1: bas1 , base2: bas2, base3: bas3, base4: bas4 } = require('../tiles/tdm.js'),
    { normal: norm, nest, wall: WALL } = require('../tiles/misc.js'),
    { dominatorContestedBlank: cont, trapDominatorContestedBlank: scon } = require('../tiles/dominators.js'),

room = [
    [bas1,cont,cont,cont,cont,cont,cont,cont,bas2],
    [cont,WALL,cont,cont,cont,cont,cont,WALL,cont],
    [cont,cont,cont,cont,cont,cont,cont,cont,cont],
    [cont,cont,cont,WALL,norm,WALL,cont,cont,cont],
    [cont,cont,cont,norm,nest,norm,cont,cont,cont],
    [cont,cont,cont,WALL,norm,WALL,cont,cont,cont],
    [cont,cont,cont,cont,cont,cont,cont,cont,cont],
    [cont,WALL,cont,cont,cont,cont,cont,WALL,cont],
    [bas3,cont,cont,cont,cont,cont,cont,cont,bas4]
];

module.exports = room;