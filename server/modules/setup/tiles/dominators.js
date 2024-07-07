let dominatorTypes = ["destroyerDominator", "gunnerDominator", "trapperDominator"],
    neededToWin = Config.GOVERNMENTAL ? 63 : 4,

    teamcounts = {},
    gameWon = false,

spawn = (tile, team, color, type = false) => {
    type = type ? type : ran.choose(dominatorTypes);
    let o = new Entity(tile.loc);
    o.define(type);
    o.team = team;
    o.color.base = color;
    o.skill.score = 111069;
    o.name = "Dominator";
    o.SIZE = Config.GOVERNMENTAL ? room.tileWidth / 20 : room.tileWidth / 10;
    if (!Config.GOVERNMENTAL) o.isDominator = true;
    o.controllers = [new ioTypes.nearestDifferentMaster(o), new ioTypes.spin(o, { onlyWhenIdle: true })];

    tile.color.base = color;

    if (!teamcounts[team]) {
        teamcounts[team] = 0;
    }
    teamcounts[team]++;

    o.on('dead', () => {

        teamcounts[team]--;
        if (!teamcounts[team]) {
            delete teamcounts[team];
        }

        let newTeam = TEAM_ENEMIES,
            newColor = getTeamColor(newTeam);

        if (team === TEAM_ENEMIES || Config.GOVERNMENTAL) {
            let killers = [];
            for (let instance of o.collisionArray) {
                if (isPlayerTeam(instance.team) && team !== instance.team) {
                    killers.push(instance);
                }
            }

            let killer = ran.choose(killers);
            killer = killer ? killer.master.master : { team: TEAM_ROOM, color: Config.MODE === "tdm" ? 3 : 12 };

            newTeam = killer.team;
            newColor = getTeamColor(newTeam);

          if (type !== "territoryCapturePoint") {  
          for (let player of sockets.players) {
                if (player.body && player.body.team === newTeam) {
                    player.body.sendMessage("Press F to take control of the dominator.");
                }
            }
          }

            let teamName = newTeam > 0 ? killer.name : getTeamName(newTeam);
            Config.GOVERNMENTAL ? sockets.broadcast(`${teamName} has Gained +1 Territory`) : sockets.broadcast(`A dominator is now controlled by ${teamName}!`);
            if (newTeam !== TEAM_ENEMIES && teamcounts[newTeam] >= neededToWin && !gameWon) {
                gameWon = true;
                setTimeout(sockets.broadcast, 1500, teamName + " has won the game!");
                setTimeout(closeArena, 4500);
            }

        } else {
          for (let player of sockets.players) {
            if (player.body && player.body.team === team) {
                Config.GOVERNMENTAL ? player.body.sendMessage("Your Territory is being invaded!") : sockets.broadcast("A dominator is being contested!");
            }
          }
        }

        spawn(tile, newTeam, newColor, type);
        sockets.broadcastRoom();
    });
},

makeDefenderDominator = (tile, mainTeam, team, aliveDef) => {
    aliveDef = aliveDef ? aliveDef : ran.choose(dominatorTypes);
    let o = new Entity(tile.loc);
    o.define(mainTeam == team ? aliveDef : "dominator");
    o.team = team;
    o.color.base = getTeamColor(team);
    o.skill.score = 111069;
    o.SIZE = room.tileWidth / 10;
    o.isDominator = true;

    tile.color.base = getTeamColor(team);

    if (!teamcounts[team]) {
        teamcounts[team] = 0;
    }
    teamcounts[team]++;

    o.on('dead', () => {

        teamcounts[team]--;

        if (team === mainTeam) {
            sockets.broadcast(`A ${o.label} has been destroyed!`);
            if (!teamcounts[team] && !gameWon) {
                gameWon = true;
                setTimeout(sockets.broadcast, 1500, "The raiders has won the game!"); //figure out how to guess a better text
                setTimeout(closeArena, 4500);
            }

        } else {
            sockets.broadcast(`A ${o.label} has been repaired!`);
        }

        makeDefenderDominator(tile, mainTeam, team === mainTeam ? TEAM_ENEMIES : mainTeam, aliveDef);
        sockets.broadcastRoom();
    });
};

let dominatorBlue = new Tile({ init: tile => makeDefenderDominator(tile, TEAM_BLUE, TEAM_BLUE) }),
    dominatorGreen = new Tile({ init: tile => makeDefenderDominator(tile, TEAM_GREEN, TEAM_GREEN) }),
    dominatorContested = new Tile({ init: tile => spawn(tile, TEAM_ENEMIES, getTeamColor(TEAM_ENEMIES)) }),
    sanctuaryBlue = new Tile({ init: tile => makeDefenderDominator(tile, TEAM_BLUE, TEAM_BLUE, 'sanctuaryTier1') }),
    sanctuaryGreen = new Tile({ init: tile => makeDefenderDominator(tile, TEAM_GREEN, TEAM_GREEN, 'sanctuaryTier1') }),
    sanctuaryContested = new Tile({ init: tile => spawn(tile, TEAM_ENEMIES, getTeamColor(TEAM_ENEMIES), 'sanctuaryTier1') }),

    dominatorContestedBlank = new Tile({
      init: tile => spawn(tile, TEAM_ENEMIES, "white", "territoryCapturePoint"), 
      tick: tile => {
        for (let i = 0; i < tile.entities.length; i++) {
            let entity = tile.entities[i];
            if (entity.isPlayer) {
            if (entity.pushability && entity.isPlayer && entity.color.base !== tile.color.base) {
                let dirToCenter = Math.atan2(entity.y - tile.y, entity.x - tile.x);
                entity.velocity.x = Math.cos(dirToCenter) * 25 * entity.pushability;
                entity.velocity.y = Math.sin(dirToCenter) * 25 * entity.pushability;
            }
            }
        }
    } }),
    trapDominatorContestedBlank = new Tile({
      init: tile => spawn(tile, TEAM_ENEMIES, "white", "trapTerritoryCapturePoint"), 
      tick: tile => {
        for (let i = 0; i < tile.entities.length; i++) {
            let entity = tile.entities[i];
            if (entity.isPlayer) {
            if (entity.pushability && entity.color.base !== tile.color.base) {
                let dirToCenter = Math.atan2(entity.y - tile.y, entity.x - tile.x);
                entity.velocity.x = Math.cos(dirToCenter) * 25 * entity.pushability;
                entity.velocity.y = Math.sin(dirToCenter) * 25 * entity.pushability;
                }
            }
        }
    } });



module.exports = {
    contested: dominatorContested,
    dominatorBlue,
    dominatorGreen,
    dominatorContested,
    dominatorContestedBlank, // risk
    trapDominatorContestedBlank, // frisky risky
    sanctuaryBlue, // siege
    sanctuaryGreen, // assault
    sanctuaryContested // idk i thought it was funny
};