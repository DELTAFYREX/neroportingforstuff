const { combineStats, makeDeco } = require('../facilitators');
const g = require('../gunvals');

    Class.geometryDash_square = makeDeco(4, 'blue');
    Class.geometryDash_square.MIRROR_MASTER_ANGLE = true;

    Class.geometryDash_longRect = {
        SHAPE: 'M 0 0 L 5 0 L 5 2 L 0 2 L 0 0',
        COLOR: 'blue',
        MIRROR_MASTER_ANGLE: true
    };

    Class.geometryDash = {
        PARENT: 'genericTank',
        LABEL: 'Geometry Dash',
        SHAPE: 4,
        BODY: {
            HEALTH: 1e7,
            SHIELD: 0,
            DAMAGE: 0,
            ACCELERATION: 10,
            SPEED: 20,
            PUSHABILITY: 0
        },
        COLOR: '#FFFF00',
        SIZE: 20,
        SKILL_CAP: Array(10).fill(10),
        EXTRA_SKILL: 10,
        FACING_TYPE: 'autospin',
        TURRETS: [
            {
                POSITION: { SIZE: 5, X: 4, Y: 5, LAYER: 1 },
                TYPE: 'geometryDash_square'
            },
            {
                POSITION: { SIZE: 5, X: 4, Y: -5, LAYER: 1 },
                TYPE: 'geometryDash_square'
            },
            {
                POSITION: { SIZE: 5, X: -6.1, Y: 2, ANGLE: 90, LAYER: 1 },
                TYPE: 'geometryDash_longRect'
            }
        ],
        UPGRADES_TIER_0: ['geometryDashWave']
    }

    Class.geometryDashWave = {
        PARENT: 'genericTank',
        LABEL: 'Dart',
        NAME: 'Wave',
        SHAPE: 3,
        BODY: {
            HEALTH: 1e7,
            DAMAGE: 1e7,
            SHIELD: 0,
            ACCELERATION: 0,
            SPEED: 0,
            PUSHABILITY: 0
        },
        COLOR: '#FFFF00',
        SIZE: 20,
        GUNS: [{
            POSITION: { LENGTH: 13, WIDTH: 8, ASPECT: 2, ANGLE: 180 },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.tonsmorerecoil, g.tonsmorerecoil, g.veryfast, { reload: 0.05, range: 0.2 }]),
                TYPE: 'bullet',
                COLOR: 'blue'
            }
        }]
    }

    Class.addons.UPGRADES_TIER_0.push('geometryDash');