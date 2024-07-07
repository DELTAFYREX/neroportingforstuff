const { combineStats, makeAuto, makeOver, weaponArray } = require('../facilitators.js');
const { base } = require('../constants.js');
const g = require('../gunvals.js');

// Bullets
Class.splitterBullet = {
    PARENT: "bullet",
    INDEPENDENT: true,
    GUNS: [
        {
            POSITION: [8, 8, 1, 0, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
                SHOOT_ON_DEATH: true,
            }
        },
        {
            POSITION: [8, 8, 1, 0, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
                SHOOT_ON_DEATH: true,
            }
        },
    ]
}
Class.superSplitterBullet = {
    PARENT: "bullet",
    INDEPENDENT: true,
    GUNS: [
        {
            POSITION: [8, 8, 1, 0, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: ["splitterBullet", { PERSISTS_AFTER_DEATH: true }],
                SHOOT_ON_DEATH: true,
            }
        },
        {
            POSITION: [8, 8, 1, 0, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: ["splitterBullet", { PERSISTS_AFTER_DEATH: true }],
                SHOOT_ON_DEATH: true,
            }
        },
    ]
}
Class.turretedBullet = makeAuto('bullet', "Auto-Bullet", {size: 14, color: "veryLightGrey", angle: 0});
Class.speedBullet = {
    PARENT: "bullet",
    MOTION_TYPE: "accel",
}
Class.growBullet = {
    PARENT: "bullet",
    MOTION_TYPE: "grow",
}
Class.flare = {
    PARENT: "growBullet",
    LABEL: "Flare",
    SHAPE: 4,
}
Class.developerBullet = {
    PARENT: "bullet",
    SHAPE: [[-1, -1], [1, -1], [2, 0], [1, 1], [-1, 1]],
}
Class.casing = {
    PARENT: "bullet",
    LABEL: "Shell",
    TYPE: "swarm",
}

// Missiles
Class.missile = {
    PARENT: "bullet",
    LABEL: "Missile",
    INDEPENDENT: true,
    BODY: { RANGE: 120 },
    GUNS: [
        {
            POSITION: [14, 6, 1, 0, -2, 130, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {speed: 1.3, maxSpeed: 1.3}]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
                STAT_CALCULATOR: "thruster",
                WAIT_TO_CYCLE: true,
            }
        },
        {
            POSITION: [14, 6, 1, 0, 2, 230, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {speed: 1.3, maxSpeed: 1.3}]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
                STAT_CALCULATOR: "thruster",
                WAIT_TO_CYCLE: true,
            }
        }
    ]
}
Class.hypermissile = {
    PARENT: "missile",
    GUNS: [
        {
            POSITION: [14, 6, 1, 0, -2, 150, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, {reload: 3}]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
                STAT_CALCULATOR: "thruster",
            },
        },
        {
            POSITION: [14, 6, 1, 0, 2, 210, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, {reload: 3}]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
                STAT_CALCULATOR: "thruster",
            },
        },
        {
            POSITION: [14, 6, 1, 0, -2, 90, 0.5],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, {reload: 3}]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
            },
        },
        {
            POSITION: [14, 6, 1, 0, 2, 270, 0.5],
            PROPERTIES: {
                AUTOFIRE: true,
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, {reload: 3}]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
            },
        },
    ],
}
Class.minimissile = {
    PARENT: "missile",
    GUNS: [
        {
            POSITION: [14, 6, 1, 0, 0, 180, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, { recoil: 0.5 }, g.lowPower]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: "thruster",
            },
        },
    ],
}
Class.spinmissile = {
    PARENT: "missile",
    CONTROLLERS: [["spin2", {speed: 0.1}]],
    GUNS: weaponArray({
        POSITION: [14, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            AUTOFIRE: !0,
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {size: 1.1}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            STAT_CALCULATOR: "thruster",
            WAIT_TO_CYCLE: true,
        },
    }, 2),
}
Class.hyperspinmissile = {
    PARENT: "spinmissile",
    GUNS: weaponArray({
        POSITION: [14, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            AUTOFIRE: !0,
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {size: 1.1}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            STAT_CALCULATOR: "thruster",
        },
    }, 4),
}
Class.hive = {
    PARENT: "bullet",
    LABEL: "Hive",
    BODY: {
        RANGE: 90,
        FOV: 0.5,
    },
    FACING_TYPE: "turnWithSpeed",
    INDEPENDENT: true,
    CONTROLLERS: ["nearestDifferentMaster", "targetSelf"],
    AI: {
        NO_LEAD: true,
    },
    GUNS: weaponArray({
        POSITION: [7, 9.5, 0.6, 7, 0, 108, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bee]),
            TYPE: ["bee", { PERSISTS_AFTER_DEATH: true }],
            STAT_CALCULATOR: "swarm",
            AUTOFIRE: true
        },
    }, 5, 0.2)
}
Class.protoHive = {
    PARENT: "bullet",
    LABEL: "Proto-Hive",
    BODY: {
        RANGE: 90,
        FOV: 0.5,
    },
    FACING_TYPE: "turnWithSpeed",
    INDEPENDENT: true,
    CONTROLLERS: ["nearestDifferentMaster", "targetSelf"],
    AI: { NO_LEAD: true },
    GUNS: weaponArray({
        POSITION: [7, 9.5, 0.6, 7, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bee]),
            TYPE: ["bee", { PERSISTS_AFTER_DEATH: true }],
            STAT_CALCULATOR: "swarm",
            AUTOFIRE: true
        },
    }, 5, 1/3)
}
Class.snake = {
    PARENT: "bullet",
}
Class.rocketeerMissile = {
    PARENT: "missile",
    GUNS: [
        {
            POSITION: [16.5, 10, 1.5, 0, 0, 180, 3],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.missileTrail, g.rocketeerMissileTrail]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: "thruster",
            },
        },
    ],
}
Class.sentinelMissile = {
    PARENT: "bullet",
    LABEL: "Missile",
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
        DENSITY: 3,
    },
    GUNS: [
        {
            POSITION: [12, 10, 0, 0, 0, 180, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: "thruster",
            },
        }, {
            POSITION: [14, 6, 1, 0, -2, 130, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.skimmer]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: "thruster",
            },
        }, {
            POSITION: [14, 6, 1, 0, 2, 230, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.skimmer]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: "thruster",
            },
        },
    ],
}
Class.kronosMissile = {
    PARENT: "missile",
    GUNS: [
        {
            POSITION: [4, 6, 1.6, 13, 0, 90, 0.5],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.trap, { range: 0.5 }, {reload: 3}]),
                TYPE: [ "trap", { PERSISTS_AFTER_DEATH: true } ],
                STAT_CALCULATOR: "trap",
            },
        }, {
            POSITION: [4, 6, 1.6, 13, 0, -90, 0.5],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.trap, { range: 0.5 }, {reload: 3}]),
                TYPE: [ "trap", { PERSISTS_AFTER_DEATH: true } ],
                STAT_CALCULATOR: "trap",
            },
        }, {
            POSITION: [14, 6, 1, 0, -2, 150, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.weak, {reload: 3}]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
                STAT_CALCULATOR: "thruster",
            },
        }, {
            POSITION: [14, 6, 1, 0, 2, 210, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.weak, {reload: 3}]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
                STAT_CALCULATOR: "thruster",
            },
        }, {
            POSITION: [13, 6, 1, 0, 0, 90, 0],
        }, {
            POSITION: [13, 6, 1, 0, 0, -90, 0],
        },
    ],
}
Class.autoSmasherMissile = {
    PARENT: "missile",
    HITS_OWN_TYPE: "never",
    GUNS: [],
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody",
        }, {
            POSITION: [12, 0, 0, 0, 360, 1],
            TYPE: "autoSmasherMissileTurret",
        },
    ],
}

// Healer Projectiles
Class.healerBullet = {
    PARENT: "bullet",
    HEALER: true,
};
Class.surgeonPillbox = {
    PARENT: "trap",
    LABEL: "Pillbox",
    SHAPE: -6,
    MOTION_TYPE: "motor",
    CONTROLLERS: ["goToMasterTarget", "nearestDifferentMaster"],
    INDEPENDENT: true,
    BODY: {
        SPEED: 1,
        DENSITY: 5,
        DAMAGE: 0
    },
    DIE_AT_RANGE: true,
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "surgeonPillboxTurret",
        },
    ],
}

// Drones
Class.turretedDrone = makeAuto('drone', "Auto-Drone", {type: 'droneAutoTurret'})

// Sunchips
Class.sunchip = {
    PARENT: "drone",
    SHAPE: 4,
    NECRO: true,
    HITS_OWN_TYPE: "hard",
    BODY: {
        FOV: 0.5,
    },
    AI: {
        BLIND: true,
        FARMER: true,
    },
    DRAW_HEALTH: false,
}
Class.eggchip = {
    PARENT: "sunchip",
    NECRO: [0],
    SHAPE: 0
}
Class.minichip = {
    PARENT: "sunchip",
    NECRO: false,
    SHAPE: 0
}
Class.autosunchip = {
    PARENT: "sunchip",
    AI: {
        BLIND: true,
        FARMER: true,
    },
    INDEPENDENT: true,
}
Class.autoeggchip = {
    PARENT: "autosunchip",
    NECRO: [0],
    SHAPE: 0,
}
Class.summonerDrone = {
    PARENT: "sunchip",
    NECRO: false
}
Class.trichip = {
    PARENT: "sunchip",
    NECRO: [3],
    SHAPE: 3
}
Class.dorito = {
    PARENT: "sunchip",
    NECRO: false,
    SHAPE: 3
}
Class.pentachip = {
    PARENT: "sunchip",
    NECRO: [5],
    SHAPE: 5
}
Class.demonchip = {
    PARENT: "sunchip",
    NECRO: false,
    SHAPE: 5
};
Class.realchip = {
    PARENT: "sunchip",
    NECRO: false,
    SHAPE: 6
};

// Minions
Class.minion = {
    PARENT: "genericTank",
    LABEL: "Minion",
    TYPE: "minion",
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: "hardWithBuffer",
    FACING_TYPE: "smoothToTarget",
    BODY: {
        FOV: 0.5,
        SPEED: 3,
        ACCELERATION: 0.4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        "nearestDifferentMaster",
        "mapAltToFire",
        "minion",
        "canRepel",
        "hangOutNearMaster",
    ],
    GUNS: [
        {
            POSITION: [17, 9, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minionGun]),
                WAIT_TO_CYCLE: true,
                TYPE: "bullet",
            },
        },
    ],
}
Class.tinyMinion = {
    PARENT: "minion",
    LABEL: "Swarm Minion",
    ACCEPTS_SCORE: false,
    SHAPE: 0,
    MOTION_TYPE: 'swarm',
    CRAVES_ATTENTION: true,
    BODY: {
        ACCELERATION: 3,
        PENETRATION: 1.5,
        HEALTH: 0.35 * 0.5,
        DAMAGE: 2.25,
        RESIST: 1.6,
        RANGE: 300,
        DENSITY: 12,
        PUSHABILITY: 0.5,
        FOV: 1.5,
    },
    AI: { BLIND: true },
    GUNS: [
        {
            POSITION: [17, 9, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minionGun, g.lowPower]),
                WAIT_TO_CYCLE: true,
                TYPE: "bullet",
            }, 
        },
    ],
    DIE_AT_RANGE: true,
    BUFF_VS_FOOD: true,
}
Class.sentrySwarmMinion = {
    PARENT: 'drone',
    LABEL: 'sentry',
    COLOR: 'pink',
    UPGRADE_COLOR: "pink",
    DRAW_HEALTH: true,
    HAS_NO_RECOIL: true,
    GUNS: Class.sentrySwarm.GUNS
}
Class.sentryGunMinion = {
    PARENT: 'drone',
    LABEL: 'sentry',
    COLOR: 'pink',
    UPGRADE_COLOR: "pink",
    DRAW_HEALTH: true,
    HAS_NO_RECOIL: true,
    TURRETS: [{
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: ['megaAutoTankGun', {GUN_STAT_SCALE: {health: 0.8}}]
    }]
}
Class.sentryTrapMinion = {
    PARENT: 'drone',
    LABEL: 'sentry',
    COLOR: 'pink',
    UPGRADE_COLOR: "pink",
    DRAW_HEALTH: true,
    HAS_NO_RECOIL: true,
    TURRETS: [{
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: 'trapTurret'
    }]
}

// Traps
Class.setTrap = {
    PARENT: "trap",
    LABEL: "Set Trap",
    SHAPE: -4,
    MOTION_TYPE: "motor",
    CONTROLLERS: ["goToMasterTarget"],
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
}
Class.unsetTrap = {
    PARENT: "trap",
    LABEL: "Set Trap",
    SHAPE: -4,
    MOTION_TYPE: "motor",
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
}
Class.boomerang = {
    PARENT: "trap",
    LABEL: "Boomerang",
    CONTROLLERS: ["boomerang"],
    MOTION_TYPE: "motor",
    HITS_OWN_TYPE: "never",
    SHAPE: -5,
    BODY: {
        SPEED: 1.25,
        RANGE: 120,
    },
}
Class.assemblerTrap = {
    PARENT: "setTrap",
    LABEL: "Assembler Trap",
    BODY: {
        SPEED: 0.7,
        ACCEL: 0.75
    },
    TURRETS: [
        {
            POSITION: [4, 0, 0, 0, 360, 1],
            TYPE: 'assemblerDot'
        }
    ],
    HITS_OWN_TYPE: 'assembler'
}
Class.shotTrapBox = {
    PARENT: 'unsetTrap',
    MOTION_TYPE: "glide",
}

// Pillboxes
Class.pillbox = {
    PARENT: "setTrap",
    LABEL: "Pillbox",
    CONTROLLERS: ["nearestDifferentMaster"],
    INDEPENDENT: true,
    DIE_AT_RANGE: true,
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "pillboxTurret",
        },
    ],
}
Class.unsetPillbox = {
    PARENT: "unsetTrap",
    LABEL: "Pillbox",
    CONTROLLERS: ["nearestDifferentMaster"],
    INDEPENDENT: true,
    DIE_AT_RANGE: true,
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "pillboxTurret",
        },
    ],
}
Class.legionaryPillbox = {
    PARENT: "unsetTrap",
    LABEL: "Pillbox",
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
    DIE_AT_RANGE: true,
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "legionaryTwin",
        },
    ],
}

// Swarms
Class.autoswarm = {
    PARENT: "swarm",
    AI: {
        FARMER: true
    },
    INDEPENDENT: true
}
Class.bee = {
    PARENT: "swarm",
    PERSISTS_AFTER_DEATH: true,
    SHAPE: 4,
    LABEL: "Drone",
    HITS_OWN_TYPE: "hardWithBuffer"
}
Class.homingBullet = {
    PARENT: "autoswarm",
    SHAPE: 0,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.165,
        DAMAGE: 6,
        PUSHABILITY: 0.3,
    },
    CAN_GO_OUTSIDE_ROOM: true
}

//delta projectiles
Class.autobullet = makeAuto('bullet', "AutoBullet", {type: 'projectileAutoTurret'})
Class.heavyautobullet = makeAuto('bullet', "HeavyAutoBullet", {type: 'pillboxTurret'})
Class.shrapnel = {
    PARENT: "bullet",
    SHAPE: 5,
    LABEL: "expold heheahah",
    BODY: {
        RANGE: 1,
        FOV: 0.5,
    },
    INDEPENDENT: true,
    CONTROLLERS: ["alwaysFire"],
    AI: {
        NO_LEAD: true,
    },
    GUNS: [
        {
            POSITION: [7, 9.5, 1, 7, 0, 72, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bee, g.halfspeed, g.halfspeed, g.halfspeed, g.halfrange, g.halfrange]),
                TYPE: ["trap", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: "swarm",
            },
        },
        {
            POSITION: [7, 9.5, 1, 7, 0, 72*2, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bee, g.halfspeed, g.halfspeed, g.halfrange, g.halfspeed, g.halfrange]),
                TYPE: ["trap", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: "swarm",
            },
        },
        {
            POSITION: [7, 9.5, 1, 7, 0, 72*3, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bee, g.halfspeed, g.halfspeed, g.halfrange, g.halfspeed, g.halfrange]),
                TYPE: ["trap", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: "swarm",
            },
        },
        {
            POSITION: [7, 9.5, 1, 7, 0, 72*4, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bee, g.halfspeed, g.halfspeed, g.halfrange, g.halfspeed, g.halfrange]),
                TYPE: ["trap", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: "swarm",
            },
        },
        {
            POSITION: [7, 9.5, 1, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bee, g.halfspeed, g.halfspeed, g.halfrange, g.halfspeed, g.halfrange]),
                TYPE: ["trap", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: "swarm",
            },
        },
    ],
}
Class.grenade = {
    PARENT: "bullet",
    INDEPENDENT: true,
    BODY: { RANGE: 80 },
    GUNS: [{
            POSITION: [1, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.grenade_explosion]),
                TYPE: ["shrapnel", { PERSISTS_AFTER_DEATH: true }],
                SHOOT_ON_DEATH: true,
        }
            }, {
            POSITION: [14, 6, 1, 0, 0, 180, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.skimmer, { reload: 0.5 }, g.lowPower, { recoil: 1.35 }, { speed: 1.3, maxSpeed: 1.3 }]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: "thruster",
            }
        }
    ],
      TURRETS: [{
        POSITION: [9, -8, 0, 0, 0, 1],
        TYPE: ["grenadeDeco"]
    }
  ]
}
Class.firecrackerbomb = {
    PARENT: "bullet",
    INDEPENDENT: true,
    BODY: { RANGE: 70 },
    GUNS: [{
            POSITION: [1, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.explosion]),
                TYPE: ["growBullet", { PERSISTS_AFTER_DEATH: true }],
                SHOOT_ON_DEATH: true,
        }
            }, {
            POSITION: [14, 6, 1, 0, 0, 180, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, { recoil: 0.5 }, g.lowPower]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: "thruster",
            },
        },
    ],
    TURRETS: [{
      POSITION: [10, 0, 0, 0, 0, 1],
      TYPE: "firecrackerDeco"
    }]
}
Class.baseBullet = {
    PARENT: "trap",
    MOTION_TYPE: "motor",
    HITS_OWN_TYPE: "never",
    BODY: {
        SPEED: 1.25,
        RANGE: 120,
    },
    LABEL: "Base",
    SHAPE: 'M 0 -1 A 1 1 0 0 0 0 1 A 1 1 0 0 0 0 -1 Z M 0 -1 A 0.001 0.001 0 0 1 0 1 A 0.001 0.001 0 0 1 0 -1',
    CONTROLLERS: [["spin", { independent: true, speed: 0.1 }], "kiva"],
    INDEPENDENT: true,
    FACING_TYPE: "toTarget",
    COLOR: "#FC8208",
    TURRETS: [{
        POSITION: [4.65, 9.85, 0, 90, 220, 1],
        TYPE: ["revogun", { COLOR: "#FC8208", BODY: { FOV: 2 } }]
    }, {
        POSITION: [4.65, 9.85, 0, 270, 220, 1],
        TYPE: ["revogun", { COLOR: "#FC8208", BODY: { FOV: 2 } }]
    }],
ON: [{
          event: "death",
          handler: ({ body }) => {
            if (!body.master.isDead) return 
            body.master.define(Class.baseThrower)
        }
    }
  ]
};
Class.brellaShield = {
    PARENT: "bullet",
    TYPE: "brella",
    LABEL: "Base",
    SIZE: 7,
  //SHAPE: 'M 1 3.5 L 2 2 L 2 0 L 1 -1.5 L 0 -1.8 L 0 -1 L 2 0.5 L 0 -1 L 0 0 L 2 0.85 L 0 0 L 0 1 L 2 1 L 0 1 L 0 1 L 0 2 L 2 1.15 L 0 2 L 0 3 L 2 1.5 L 0 3 L 0 3.8 L 1 3.5',
    SHAPE: 'M -0 2.2587 L 0.9 0.905 L 0.9 -0.9 L -0 -2.2537 L -0.9 -2.5245 L -0.9 2.5295 L -0 2.2587',
    INDEPENDENT: true,
    COLOR: "grey",
    GUNS: [
        {
            POSITION: [14, 6, 1, 0, 0, 180, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, { recoil: 0.35 }, g.lowPower]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: "thruster",
            },
        },
    ],
};
Class.laser = {
  PARENT: "bullet",
  SHAPE: -1,
  BODY: {
        PENETRATION: 1,
        SPEED: 5.8,
        RANGE: 100,
        DENSITY: 0.9,
        HEALTH: 0.155,
        DAMAGE: 5.6,
    },
  BUFF_VS_FOOD: true,
}
Class.fastdrone = {
  PARENT: "drone",  
  LABEL: 'Drone',
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: 0.6,
        ACCELERATION: 0.05,
        HEALTH: 0.5,
        DAMAGE: 3.125,
        SPEED: 6,
        RANGE: 200,
        DENSITY: 0.03,
        RESIST: 1.5,
        FOV: 0.8,
    },
      GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  15,     5,      1,      0,      0,      180,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.muchmorerecoil, g.muchmorerecoil, g.weak]),
            TYPE: "bullet",
            AUTOFIRE: true
        }, }, 
    ],
    HITS_OWN_TYPE: 'hard',
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    BUFF_VS_FOOD: true,
};

Class.revoorbitdrone = {
  PARENT: "drone",  
  LABEL: 'Drone',
  SYNC_TURRET_SKILLS: true,
    TURRETS: [{
        POSITION: [34, 0, 0, 0, 360, 0],
        TYPE: "droneturretBase",
    },
  ],
};
Class.hiveprobe = {
  PARENT: "genericTank",
  LABEL: "Probe",
  TYPE: "drone",
  HITS_OWN_TYPE: "hardWithBuffer",
  DRAW_HEALTH: true,
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 2.5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  ACCEPTS_SCORE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lowPower]),
        TYPE: "bullet"
      }
    }
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [27, 0, 0, 0, 360, 0],
      TYPE: "mindindicator"
    }
  ]
};
Class.clonerprobe = {
  PARENT: "hiveprobe",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lowPower]),
        TYPE: "bullet"
      }
    }
  ],
    TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [24, 0, 0, 0, 360, 0],
      TYPE: "mindindicator"
    }
  ]
}
Class.autoclonerprobe = makeAuto(Class.clonerprobe)
Class.spaghetti = {
  PARENT: "bullet",
  SHOOT_ON_DEATH: true,
  SHAPE: "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/afg-spaghetti-alla-assassina-1-19ef-superJumbo.jpg?v=1701450288242",
      GUNS: [
        {
            POSITION: [2, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.single]),
                TYPE: "bullet"
            }
        }
    ]
}
const timer = (run, duration) => {
    let timer = setInterval(() => run(), 31.25);
    setTimeout(() => {
        clearInterval(timer);
    }, duration * 1000);
};
  const damageOnTick = (body, instance, multiplier, duration, stopAtSetHealth, hitsOwnTeam) => {
    if (!instance) return
    if (!instance.damageOnTicking && !instance.godmode && !instance.invuln && (instance.type == "tank" || instance.type == "food" || instance.type == "miniboss" || instance.type == "crasher") && instance.team != body.team) {
        instance.damageOnTicking = true;
        setTimeout(() => {
            instance.damageOnTicking = false;
        }, 2 * duration * 1000);
        timer(() => {
            if (instance.damageOnTicking && instance.health.amount > stopAtSetHealth && instance.health.amount - (multiplier * 0.5) > stopAtSetHealth) {
                instance.health.amount -= multiplier * 0.5;
            } //else {if (instance.health.amount - (multiplier * 0.5) < stopAtSetHealth) {instance.health.amount === stopAtSetHealth}}
        }, 2 * duration);
    }
};
const iceOnTick = (body, instance, multiplier, duration, hitsOwnTeam) => {
    if (!instance) return
    if (!instance.invuln && !instance.godmode && (instance.type == "tank" || instance.type == "food" || instance.type == "miniboss" || instance.type == "crasher") && instance.team != body.team) timer(() => {
        instance.velocity.x /= 1.05 * multiplier;
        instance.velocity.y /= 1.05 * multiplier;
    }, 1.5 * duration);
};
Class.poisonbullet = {
    PARENT: "bullet",
    GLOW: {
        RADIUS: 2,
        COLOR: "green",
        ALPHA: 1,
        RECURSION: 4,
    },
    TURRETS: [{
        POSITION: [5.5, 0, 0, 0, 0, 1],
        TYPE: ["effectBulletDeco", { color: "green" }]
    }],
    ON: [{
        event: "damage",
        handler: ({ body, damageTool }) => {
             damageOnTick(body, damageTool[0], 2, 1, 1, false);
        }
    }]
}
Class.icebullet = {
    PARENT: "bullet",
    GLOW: {
        RADIUS: 2,
        COLOR: "#28B1DE",
        ALPHA: 1,
        RECURSION: 4,
    },
    TURRETS: [{
        POSITION: [5.5, 0, 0, 0, 0, 1],
        TYPE: ["effectBulletDeco", { color: "#28B1DE" }]
    }],
    ON: [{
        event: "damage",
        handler: ({ body, damageTool }) => {
            iceOnTick(body, damageTool[0], 1, 1, true);
        }
    }]
}
Class.empBullet = {
    PARENT: "bullet",
    ON: [{
        event: "damage",
        handler: ({ body, damageTool }) => {
            iceOnTick(body, damageTool[0], Infinity, 2.5, true);
        }
    }]
}
Class.ceptionistbullet = {
  PARENT: "bullet",
  GUNS: [{
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.autoTurret, g.lesspower, g.lesspower, g.halfreload, g.halfreload, g.turret]),
          TYPE: "bullet",
          COLOR: "black",
          AUTOFIRE: true
      }
    }
  ]
}
Class.autoturretswarm = makeAuto('swarm', "AutoturretSwarm", {type: 'droneAutoTurret'})
Class.hybridclonerprobe = makeOver('clonerprobe', "hybrid-cloner-probe", {count: 1, independent: true, cycle: false})
Class.nuke = {
    PARENT: "growBullet",
    LABEL: "Nuke",
    MOTION_TYPE: "fuckingnuclearbomb",
    BODY: {
        PENETRATION: 100,
        SPEED: 7,
        RANGE: 600,
        DENSITY: 99999999999,
        HEALTH: 99999,
        DAMAGE: 999999,
        PUSHABILITY: -99999999,
    },
};
Class.denseasfbullet = {
    PARENT: "bullet",
    BODY: {
      DENSITY: 999999999,
      SPEED: 12
    }
}
Class.undertowbullet = {
  PARENT: "bullet",
  GUNS: [{
      POSITION: [4, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.magnet]),
          TYPE: ["bullet", { SIZE: 5, ALPHA: 0.5 }],
          AUTOFIRE: true
      },
  }],
  ON: [{
        event: "tick",
        handler: ({ body }) => {
          for (let instance of entities) {
                if (instance.team != body.team && (instance.isPlayer || instance.master.isPlayer || instance.type == "food")) {
                let diffX = instance.x - body.x,
                    diffY = instance.y - body.y,
                    dist2 = diffX ** 2 + diffY ** 2,
                    number1 = 1,
                    number2 = 1,
                    number3 = 1/7,
                    number4 = 1,
                    number5 = 1,
                    forceMulti = (((((body.size / 14)*150) ** 2)** number1) * number2) / dist2;
                if (dist2 <= (((body.size / 14)*150) ** 2) * 2) {
                    instance.velocity.x += util.clamp(body.x - instance.x, -90, 90) * instance.damp * ((number5 - (number5/((forceMulti ** number3)* number4)))+ 0.001);//0.05
                    instance.velocity.y += util.clamp(body.y - instance.y, -90, 90) * instance.damp * ((number5 - (number5/((forceMulti ** number3)* number4)))+ 0.001);//0.05
        }
        }
        }
        }
    },
    ],
}
Class.surgeempBullet = {
    PARENT: "bullet",
    HITS_OWN_TYPE: "never",
    COLOR: "spaceGem",
    BODY: {
    },
    BORDERLESS: true,
    GLOW: {
        RADIUS: 1,
        COLOR: "spaceGem",
        ALPHA: 1,
        RECURSION: 1,
    }
};
Class.lineEMP = {
    PARENT: "bullet",
    LABEL: 'Line',
    SHAPE: -1,
    ARENA_CLOSER: true,
    HAS_NO_RECOIL: true,
    GUNS: [{
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lance]),
            TYPE: "empBullet",
            AUTOFIRE: true,
            ALPHA: 0,
        }
    }],
    GLOW: {
        RADIUS: 3,
        COLOR: "spaceGem",
        ALPHA: 1,
        RECURSION: 3,
    }
}
Class.stickyTrap = {
  PARENT: "setTrap",
  TYPE: "popup",
  HITS_OWN_TYPE: "hard",
  LABEL: "Sticky Trap",
  SHAPE: -5,
  GUNS: [{
      POSITION: [4, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.magnet]),
          TYPE: ["bullet", { SIZE: 5, ALPHA: 0.5 }],
          AUTOFIRE: true
      },
  }],
  ON: [{
      event: "collide",
      handler: ({ body, other }) => {
          body.velocity.x = 0;
          body.velocity.y = 0;
          let amount = util.getDistance(body, other),
              angle = Math.atan2(body.y - other.y, body.x - other.x);
          other.velocity.x += amount * Math.cos(angle);
          other.velocity.y += amount * Math.sin(angle);
      }
  }],
}
Class.katanaparticle = {
    LABEL: "kpartic",
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 10,
        DAMAGE: 6,
        PUSHABILITY: 0.3,
    },
    COLOR: 'mirror',
    FACING_TYPE: "toTarget",
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: true,  
    GUNS: [
    {
      POSITION: [20, 15, 0.001, 0, 0, 0, 0],
    }, {
      POSITION: [25, 15, 0.001, 0, 0, 0, 0]
    }
  ],
}