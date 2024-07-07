const { combineStats, makeAuto, makeOver, makeDeco, makeGuard, makeBird, makeCeption } = require('../facilitators.js');
const { base, statnames, dfltskl, smshskl } = require('../constants.js');
require('../groups/generics.js');
const g = require('../gunvals.js');


Class.bsignalcharm = makeDeco("https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/tv.png?v=1708615075011")
Class.tcharm = makeDeco("https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/2024_01_29_0ry_Kleki.png?v=1708536680813")
Class.dfxcharm = makeDeco("https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/MOSHED-2023-12-14-17-8-14.gif?v=1708618924966")
Class.primalcharm = makeDeco("https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/primal.webp?v=1708602763032")
Class.kangaroocharm = makeDeco("https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/image.webp?v=1708602765689")
Class.cogcharm = makeDeco("https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/Gear-icon-transparent-background.png?v=1705579178381")
Class.skypecharm = makeDeco("https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/skype.png?v=1708623594494")
Class.coincharm = makeDeco("https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/2e2ccc30-5baf-41a2-aceb-c5456a1cc6dc.image.png?v=1708619146196")
Class.discordcharm = makeDeco("https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/2023_12_06_0yl_Kleki.png?v=1701908710293")
Class.incomcharm = makeDeco("https://cdn.glitch.global/68f0db33-c86d-4aa5-9a35-a6750a92eae7/1200px-Icon-round-Question_mark.svg.png?v=1699273933044")
Class.eggcharm = makeDeco("https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/1165825970528325682l.webp?v=1714156807621", "veryLightGrey")
Class.squarecharm = makeDeco("https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/1165934167280848969.webp?v=1714156773284", "gold")
Class.trianglecharm = makeDeco("https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/1165934432608321546.webp?v=1714156768932", "orange")
Class.pentagoncharm = makeDeco("https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/1165825970528325682.webp?v=1714156764280", "purple")
Class.gemcharm = makeDeco("https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/1165826077843796018.webp?v=1714156778841", "aqua")

Class.bsignalskin = {
    MAX_CHILDREN: 0,
    SKILL_CAP: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    SKILL: Array(10).fill(12),
    TURRETS: [{
        POSITION: [18, 0, 0, 0, 360, 3],
        TYPE: "bsignalcharm"
    }]
};
Class.tankcharmskin = {
    MAX_CHILDREN: 0,
    SKILL_CAP: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    SKILL: Array(10).fill(12),
    TURRETS: [{
        POSITION: [10, 6, 5.5, 0, 360, 3],
        TYPE: "tcharm"
    }]
};
Class.dfxskin = {
    MAX_CHILDREN: 0,
    SKILL_CAP: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    SKILL: Array(10).fill(12),
    TURRETS: [{
        POSITION: [18, 0, 0, 0, 360, 3],
        TYPE: "dfxcharm"
    }]
};
Class.primalskin = {
    MAX_CHILDREN: 0,
    SKILL_CAP: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    SKILL: Array(10).fill(12),
    TURRETS: [{
        POSITION: [20, 0, 0, 0, 360, 3],
        TYPE: "primalcharm"
    }]
};
Class.kangarooskin = {
    MAX_CHILDREN: 0,
    SKILL_CAP: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    SKILL: Array(10).fill(12),
    TURRETS: [{
        POSITION: [18, 0, 0, 0, 360, 3],
        TYPE: "kangaroocharm"
    }]
};
Class.cswmskin = {
    MAX_CHILDREN: 0,
    SKILL_CAP: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    SKILL: Array(10).fill(12),
    TURRETS: [{
        POSITION: [18, 0, 0, 0, 360, 0.5],
        TYPE: "sandwichdeco"
    }]
};
Class.cogskin = {
    MAX_CHILDREN: 0,
    SKILL_CAP: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    SKILL: Array(10).fill(12),
    TURRETS: [{
        POSITION: [18, 0, 0, 0, 360, 3],
        TYPE: "cogcharm"
    }]
};
Class.skypeskin = {
    MAX_CHILDREN: 0,
    SKILL_CAP: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    SKILL: Array(10).fill(12),
    TURRETS: [{
        POSITION: [18, 0, 0, 0, 360, 3],
        TYPE: "skypecharm"
    }]
};
Class.coinskin = {
    MAX_CHILDREN: 0,
    SKILL_CAP: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    SKILL: Array(10).fill(12),
    TURRETS: [{
        POSITION: [18, 0, 0, 0, 360, 3],
        TYPE: "coincharm"
    }]
};
Class.discordskin = {
    MAX_CHILDREN: 0,
    SKILL_CAP: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    SKILL: Array(10).fill(12),
    TURRETS: [{
        POSITION: [34, 0, 0, 0, 360, 3],
        TYPE: "discordcharm"
    }]
};
Class.deltaDecoskin = {
    MAX_CHILDREN: 0,
    SKILL_CAP: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    SKILL: Array(10).fill(12),
    TURRETS: [{
        POSITION: [34, 0, 0, 0, 360, 3],
        TYPE: "deltaDeco"
    }]
};
Class.incomskin = {
    MAX_CHILDREN: 0,
    SKILL_CAP: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    SKILL: Array(10).fill(12),
    TURRETS: [{
        POSITION: [10, -5, 5.5, 0, 360, 3],
        TYPE: "incomcharm"
    }]
};
Class.eggskin = {
    MAX_CHILDREN: 0,
    SKILL_CAP: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    SKILL: Array(10).fill(12),
    TURRETS: [{
        POSITION: [15, -5, 5.5, 0, 360, 3],
        TYPE: "eggcharm"
    }]
};
Class.squareskin = {
    MAX_CHILDREN: 0,
    SKILL_CAP: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    SKILL: Array(10).fill(12),
    TURRETS: [{
        POSITION: [13, -5, 5.5, 0, 360, 3],
        TYPE: "squarecharm"
    }]
};
Class.triangleskin = {
    MAX_CHILDREN: 0,
    SKILL_CAP: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    SKILL: Array(10).fill(12),
    TURRETS: [{
        POSITION: [13, -5, 5.5, 0, 360, 3],
        TYPE: "trianglecharm"
    }]
};
Class.pentagonskin = {
    MAX_CHILDREN: 0,
    SKILL_CAP: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    SKILL: Array(10).fill(12),
    TURRETS: [{
        POSITION: [10, -5, 5.5, 0, 360, 3],
        TYPE: "pentagoncharm"
    }]
};
Class.gemskin = {
    MAX_CHILDREN: 0,
    SKILL_CAP: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    SKILL: Array(10).fill(12),
    TURRETS: [{
        POSITION: [15, -5, 5.5, 0, 360, 3],
        TYPE: "gemcharm"
    }]
};