const { combineStats, makeDeco } = require('../facilitators.js');
const { base, dfltskl, statnames } = require('../constants.js');
const g = require('../gunvals.js');

Class.solarioTurret1 = {
    PARENT: "genericTank",
    LABEL: "Turret",
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 13,
    SHAPE: 0,
    BODY: {
        FOV: 0.8,
    },
    HAS_NO_RECOIL: true,
    GUNS: [
        {
            POSITION: [16, 14, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 14, 1.8, 16, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flankGuard, g.autoTurret, { reload: 1.3 }]),
                TYPE: "trap"
            },
        },
    ],
}
Class.solarioRingTurret = {
    PARENT: "genericTank",
    LABEL: "Turret",
    COLOR: 13,
    HAS_NO_RECOIL: true,
    MIRROR_MASTER_ANGLE: true,
    GUNS: [{
            POSITION: [10, 8, 0, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.emplaser, g.autoTurret, { reload: 2, speed: 2, maxSpeed: 2 }]),
                TYPE: ["laser", { ARENA_CLOSER: true }],
                AUTOFIRE: true
            },
    }, {
            POSITION: [24, 1, 1, 0, 0, 180, 2 / 3],
            PROPERTIES: {
                COLOR: 'red',
            },
        }],
}
Class.solarioCircAttack = {
  PARENT: "bullet",
  SHAPE: "M 1 0 A 1 1 0 0 0 -1 0 A 1 1 0 0 0 0 1 L 0 0.95 A 0.95 0.95 0 0 1 0 -0.95 A 0.95 0.95 0 0 1 0.95 0 L 1 0",
  FACING_TYPE: ["spin", { speed: 0.02 }],
  MOTION_TYPE: ["grow", { growSpeed: 2 }],
  ARENA_CLOSER: true
}
Class.solarioTurret2 = {
    PARENT: "genericTank",
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    LABEL: "Turret",
    COLOR: 13,
    SHAPE: 3,
    BODY: {
        FOV: 0.8,
    },
    HAS_NO_RECOIL: true,
    GUNS: [
        {
            POSITION: [26, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.autoTurret, { reload: 1.5 }]),
                TYPE: "bullet"
            },
        },
    ],
}
Class.solarioTurret3 = {
    PARENT: "genericTank",
    LABEL: "Turret",
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    SHAPE: 4,
    COLOR: 13,
    BODY: {
        FOV: 0.8,
    },
    HAS_NO_RECOIL: true,
    GUNS: [
        {
            POSITION: [16, 4, 1, 0, -3.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.autoTurret, g.pelleter, g.twin, g.power]),
                TYPE: "bullet",
                HAS_NO_RECOIL: true
            },
        },
        {
            POSITION: [16, 4, 1, 0, 3.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.autoTurret, g.pelleter, g.twin, g.power]),
                TYPE: "bullet"
            },
        },
    ],
}
Class.solarioTurret4 = {
    PARENT: "genericTank",
    LABEL: "Turret",
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 13,
    SHAPE: 6,
    BODY: {
        FOV: 0.8,
    },
    HAS_NO_RECOIL: true,
    GUNS: [
        {
            POSITION: [22, 14, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.autoTurret]),
                TYPE: "bullet"
            },
        },
    ],
}
Class.solarioturretBase = {
    LABEL: "Base",
    SHAPE: 'M 0 -1.6 A 1.5 1.5 0 0 0 0 1.6 A 1.5 1.5 0 0 0 0 -1.6 Z M 0 -1.5 A 0.001 0.001 0 0 1 0 1.5 A 0.001 0.001 0 0 1 0 -1.5',
    COLOR: 13,
    SYNC_TURRET_SKILLS: true,
    CONTROLLERS: [["spin", { independent: true }]],
    INDEPENDENT: true,
    TURRETS: [{
        POSITION: [5, 15, 0, 90, 220, 1],
        TYPE: "solarioTurret1",
    }, {
        POSITION: [5, 15, 0, 180, 220, 1],
        TYPE: "solarioTurret2",
    }, {
        POSITION: [5, 15, 0, 270, 220, 1],
        TYPE: "solarioTurret3",
    }, {
        POSITION: [5, 15, 0, 0, 220, 1],
        TYPE: "solarioTurret4",
    }]
}
Class.solarioturretBase2ndRing = {
    LABEL: "Base",
    SHAPE: 'M 0 -3.1 A 3 3 0 0 0 0 3.1 A 3 3 0 0 0 0 -3.1 Z M 0 -3 A 0.001 0.001 0 0 1 0 3 A 0.001 0.001 0 0 1 0 -3',
    COLOR: 13,
    CONTROLLERS: [["spin", { independent: true }]],
    INDEPENDENT: true,
    TURRETS: [{
        POSITION: [5, 30, 0, 90, 220, 1],
        TYPE: "solarioTurret1",
    }, {
        POSITION: [5, 30, 0, 180, 220, 1],
        TYPE: "solarioTurret2",
    }, {
        POSITION: [5, 30, 0, 270, 220, 1],
        TYPE: "solarioTurret3",
    }, {
        POSITION: [5, 30, 0, 0, 220, 1],
        TYPE: "solarioTurret4",
    }]
}
Class.solarioRingAttack = {
    LABEL: "Base",
    SHAPE: 'M 0 -3.1 A 3 3 0 0 0 0 3.1 A 3 3 0 0 0 0 -3.1 Z M 0 -3 A 0.001 0.001 0 0 1 0 3 A 0.001 0.001 0 0 1 0 -3',
    COLOR: 13,
    BODY: {
        PUSHABILITY: 0,
        RANGE: 300,
    },
    ARENA_CLOSER: true,
    DIE_AT_RANGE: true,
    MOTION_TYPE: "solarioarena",
    FACING_TYPE: ["spin", { speed: 0.3 }],
    INDEPENDENT: true,
    TURRETS: [{
        POSITION: [3, 30, 0, 270, 0, 1],
        TYPE: "solarioRingTurret",
    }, {
        POSITION: [3, 30, 0, 0, 0, 1],
        TYPE: "solarioRingTurret",
    }, {
        POSITION: [3, 30, 0, 90, 0, 1],
        TYPE: "solarioRingTurret",
    }, {
        POSITION: [3, 30, 0, 180, 0, 1],
        TYPE: "solarioRingTurret",
    }]
}
Class.solarioturretBase2 = {
    LABEL: "Base",
    SHAPE: 'M 0 -1.6 A 1.5 1.5 0 0 0 0 1.6 A 1.5 1.5 0 0 0 0 -1.6 Z M 0 -1.5 A 0.001 0.001 0 0 1 0 1.5 A 0.001 0.001 0 0 1 0 -1.5',
    COLOR: 33,
    CONTROLLERS: [["spin", { independent: true }]],
    INDEPENDENT: true,
    TURRETS: [{
        POSITION: [5, 15, 0, 90, 220, 1],
        TYPE: ["solarioTurret1", { COLOR: 33 }],
    }, {
        POSITION: [5, 15, 0, 180, 220, 1],
        TYPE: ["solarioTurret2", { COLOR: 33 }],
    }, {
        POSITION: [5, 15, 0, 270, 220, 1],
        TYPE: ["solarioTurret3", { COLOR: 33 }],
    }, {
        POSITION: [5, 15, 0, 0, 220, 1],
        TYPE: ["solarioTurret4", { COLOR: 33 }],
    }]
}
Class.solarioturretBase2ndRing2 = {
    LABEL: "Base",
    SHAPE: 'M 0 -3.1 A 3 3 0 0 0 0 3.1 A 3 3 0 0 0 0 -3.1 Z M 0 -3 A 0.001 0.001 0 0 1 0 3 A 0.001 0.001 0 0 1 0 -3',
    COLOR: 33,
    CONTROLLERS: [["spin", { independent: true }]],
    INDEPENDENT: true,
    TURRETS: [{
        POSITION: [5, 30, 0, 90, 220, 1],
        TYPE: ["solarioTurret1", { COLOR: 33 }],
    }, {
        POSITION: [5, 30, 0, 180, 220, 1],
        TYPE: ["solarioTurret2", { COLOR: 33 }],
    }, {
        POSITION: [5, 30, 0, 270, 220, 1],
        TYPE: ["solarioTurret3", { COLOR: 33 }],
    }, {
        POSITION: [5, 30, 0, 0, 220, 1],
        TYPE: ["solarioTurret4", { COLOR: 33 }],
    }]
}
Class.solarioOutline = makeDeco("M 0 -3.1 A 3 3 0 0 0 0 3.1 A 3 3 0 0 0 0 -3.1 Z M 0 -3 A 0.001 0.001 0 0 1 0 3 A 0.001 0.001 0 0 1 0 -3", 13)
Class.solariobase = {
    PARENT: "genericBoss",
    LABEL: "Solario",
    SHAPE: 0,
    BODY: {
        HEALTH: 1000,
    },
    SIZE: 15,
    DANGER: 10,
}
Class.solario = {
    PARENT: "solariobase",
    COLOR: 13,
    GLOW: {
        RADIUS: 50,
        COLOR: 13,
        ALPHA: 1,
        RECURSION: 8
    },
    GUNS: [{
        POSITION: [15, 10, 1, 0, 0, 0, 0],
    }, {
        POSITION: [15, 10, 1, 0, 0, 180, 0],
    }, {
            POSITION: [0, 0, 1, 0, 0, 0, 25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake, { reload: 5 }]),
                TYPE: "bullet",
                AUTOFIRE: true,
                IDENTIFIER: "startlaserattack"
            },
        }, {
            POSITION: [1, 10, 1, 0, 0, 0, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake, { reload: 75 }]),
                TYPE: "bullet",
                AUTOFIRE: true,
                IDENTIFIER: "solarioAttack"
            },
        }, {
            POSITION: [1, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.grenade_explosion, g.xxtrahealth, { maxSpeed: 0, speed: 0, range: 5, pen: 3 }]),
                TYPE: "solarioCircAttack",
                ALT_FIRE: true,
            },
        }, {
            POSITION: [1, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.xxtrahealth, { maxSpeed: 0, speed: 0, range: 1.4, reload: 5 }]),
                TYPE: "solarioRingAttack",
                ALT_FIRE: true
            },
        }, 
          ],
    TURRETS: [{
        POSITION: [30, 0, 0, 0, 360, 0],
        TYPE: "solarioturretBase",
    }, {
        POSITION: [30, 0, 0, 0, 360, 0],
        TYPE: "solarioturretBase2ndRing",
    }, {
        POSITION: [16, 0, 0, 0, 360, 3],
        TYPE: ["minilaser", { HAS_NO_RECOIL: true, CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"]}]
    }, {
        POSITION: [8.2, 0, 0, 0, 360, 2],
        TYPE: "solarioOutline"
    },
  ],
    ON: [
          {
            event: 'fire',
            handler: ({ body, gun }) => {
                if (gun.identifier == 'startlaserattack') {
                    sockets.broadcast('Solario: DODGE THIS!!');
                    setTimeout(() => body.define('solariolaser'), 1000);
                }
                if (gun.identifier == 'solarioAttack') {
                    body.guns[3].canShoot = false;
                    let attack = ~~(Math.random() * 2);
                    switch(attack) {
                        case 0:
                            body.guns[4].fire();
                            setTimeout(() => { if (body != null) body.guns[4].fire(); }, 6000);
                            setTimeout(() => { if (body != null) body.guns[4].fire(); }, 12000);
                        break;
                        case 1:
                            body.guns[5].fire();
                        break;
                    }
                }
        }
        }, {
            event: "death",
            handler: ({}) => {
                sockets.broadcast('YOU CANT DEFEAT ME!')
            }
        }, {
            event: "damage",
            handler: ({ body }) => {
                if (body.health.amount < (body.health.max / 3) * 2) {
                    sockets.broadcast('Solario: YOU CANT STOP ME!!!!!');
                    body.define('solariophase2');
                }
            }
        }
    ],
}
Class.solariolaser = {
    PARENT: "solariobase",
    COLOR: 13,
    GLOW: {
        RADIUS: 50,
        COLOR: 13,
        ALPHA: 1,
        RECURSION: 8
    },
    GUNS: [{
        POSITION: [15, 10, 1, 0, 0, 0, 5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.solarioblast]),
            TYPE: "laser",
            AUTOFIRE: true,
            COLOR: "red",
        },
    }, {
        POSITION: [15, 10, 1, 0, 0, 180, 5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.solarioblast]),
            TYPE: "laser",
            AUTOFIRE: true,
            COLOR: "red",
        },
    }, {
        POSITION: [350, 10, 2.5, 0, 0, 355, 0],
        PROPERTIES: {
            COLOR: "red",
            ALPHA: 0.5
        }
    }, {
        POSITION: [350, 10, 2.5, 0, 0, 175, 0],
        PROPERTIES: {
            COLOR: "red",
            ALPHA: 0.5
        }
    }, {
            POSITION: [0, 0, 1, 0, 0, 0, 15],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake, { reload: 5 }]),
                TYPE: "bullet",
                AUTOFIRE: true,
                IDENTIFIER: "endlaserattack",
            },
        },
  ],
  TURRETS: [{
        POSITION: [30, 0, 0, 0, 360, 0],
        TYPE: "solarioturretBase",
    }, {
        POSITION: [30, 0, 0, 0, 360, 0],
        TYPE: "solarioturretBase2ndRing",
    }, {
        POSITION: [16, 0, 0, 0, 360, 3],
        TYPE: ["minilaser", { HAS_NO_RECOIL: true, CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"]}]
    }, {
        POSITION: [8.2, 0, 0, 0, 360, 2],
        TYPE: "solarioOutline"
    },
  ],
    ON: [
        {
            event: 'fire',
            handler: ({ body, gun }) => {
                if (gun.identifier == 'endlaserattack') {
                    sockets.broadcast('Solario: RAHH!');
                    body.children = [];
                    setTimeout(() => body.define('solario'), 500);
                }
            }
        }, {
            event: "death",
            handler: ({}) => {
                sockets.broadcast('YOU CANT DEFEAT ME!')
            }
        }, {
            event: "damage",
            handler: ({ body }) => {
                if (body.health.amount < (body.health.max / 3) * 2) {
                    sockets.broadcast('Solario: YOU CANT STOP ME!!!!!');
                    body.define('solariolaserphase2');
                }
            }
        }
    ],
};
Class.solariophase2 = {
    PARENT: "solariobase",
    COLOR: 33,
    GLOW: {
        RADIUS: 50,
        STRENGTH: 30,
        COLOR: 33,
        ALPHA: 0.8,
        RECURSION: 8
    },
    GUNS: [{
        POSITION: [15, 10, 1, 0, 0, 0, 0],
    }, {
        POSITION: [15, 10, 1, 0, 0, 90, 0],
    }, {
        POSITION: [15, 10, 1, 0, 0, 180, 0],
    }, {
        POSITION: [15, 10, 1, 0, 0, 270, 0],
    }, {
            POSITION: [0, 0, 1, 0, 0, 0, 25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake, { reload: 5 }]),
                TYPE: "bullet",
                AUTOFIRE: true,
                IDENTIFIER: "startlaserattack",
            },
        },
          ],
    TURRETS: [{
        POSITION: [30, 0, 0, 0, 360, 0],
        TYPE: ["solarioturretBase2", { COLOR: 33 }],
    }, {
        POSITION: [30, 0, 0, 0, 360, 0],
        TYPE: ["solarioturretBase2ndRing2", { COLOR: 33 }],
    }, {
        POSITION: [16, 0, 0, 0, 360, 3],
        TYPE: ["minilaser", { HAS_NO_RECOIL: true, CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"]}]
    }, {
        POSITION: [8.2, 0, 0, 0, 360, 2],
        TYPE: ["solarioOutline", { COLOR: 33 }]
    },
  ],
    ON: [
        {
            event: 'fire',
            handler: ({ body, gun }) => {
                if (gun.identifier == 'startlaserattack') {
                    sockets.broadcast('Solario: DODGE THIS!!');
                    setTimeout(() => body.define('solariolaserphase2'), 1000);
                }
            }
        }
    ],
};
Class.solariolaserphase2 = {
    PARENT: "solariophase2",
    GUNS: [{
        POSITION: [15, 10, 1, 0, 0, 0, 5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.solarioblast]),
            TYPE: "laser",
            AUTOFIRE: true,
            COLOR: "red",
        },
    }, {
        POSITION: [15, 10, 1, 0, 0, 90, 5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.solarioblast]),
            TYPE: "laser",
            AUTOFIRE: true,
            COLOR: "red",
        },
    }, {
        POSITION: [15, 10, 1, 0, 0, 180, 5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.solarioblast]),
            TYPE: "laser",
            AUTOFIRE: true,
            COLOR: "red",
        },
    }, {
        POSITION: [15, 10, 1, 0, 0, 270, 5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.solarioblast]),
            TYPE: "laser",
            AUTOFIRE: true,
            COLOR: "red",
        },
    }, {
        POSITION: [350, 10, 2.5, 0, 0, 355, 0],
        PROPERTIES: {
            COLOR: "red",
            ALPHA: 0.5
        }
    }, {
        POSITION: [350, 10, 2.5, 0, 0, 85, 0],
        PROPERTIES: {
            COLOR: "red",
            ALPHA: 0.5
        }
    }, {
        POSITION: [350, 10, 2.5, 0, 0, 175, 0],
        PROPERTIES: {
            COLOR: "red",
            ALPHA: 0.5
        }
    }, {
        POSITION: [350, 10, 2.5, 0, 0, 265, 0],
        PROPERTIES: {
            COLOR: "red",
            ALPHA: 0.5
        }
    }, {
            POSITION: [0, 0, 1, 0, 0, 0, 15],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake, { reload: 5 }]),
                TYPE: "bullet",
                AUTOFIRE: true,
                IDENTIFIER: "endlaserattack",
            },
        },
  ],
    ON: [
        {
            event: 'fire',
            handler: ({ body, gun }) => {
                if (gun.identifier == 'endlaserattack') {
                    sockets.broadcast('Solario: RAHH!');
                    setTimeout(() => body.define('solariophase2'), 500);
                }
            }
        }, {
            event: "death",
            handler: ({ body }) => {
                sockets.broadcast('YOU CANT DEFEAT ME!')
            }
        }
    ],
}
Class.devBosses.UPGRADES_TIER_0.push('solario')