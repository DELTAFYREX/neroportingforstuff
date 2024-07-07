const { combineStats, makeAuto, makeOver, makeDeco, makeGuard, makeBird, makeCeption } = require('../facilitators.js');
const { base, statnames, dfltskl, smshskl } = require('../constants.js');
require('../groups/generics.js');
const g = require('../gunvals.js');

Class.sandwichdeco = makeDeco("https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/Untitled%20Project%20(22).jpg?v=1708356424097");

Class.A = {
    PARENT: "genericTank",
    LABEL: "ChickenSandwichTank",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [19, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.single, g.op]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
        }
    ],
  TURRETS: [{
            POSITION: [11, 0, 0, 0, 0, 99],
            TYPE: "sandwichdeco"
  }]
};

Class.addons.UPGRADES_TIER_0.push("A")