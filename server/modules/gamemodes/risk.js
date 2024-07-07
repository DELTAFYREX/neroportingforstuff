let neededToWin = 83,
    teamcounts = {},
    gameWon = false;

class Risk {
spawnSanctuary(tile, team) {
        let o = new Entity(tile.loc);
        o.define(Class.trapperDominator);
        o.team = team;
        o.color.base = getTeamColor(team);
        o.skill.score = 111069;
        o.name = 'Sanctuary';
        o.SIZE = room.tileWidth / 10;
        o.isDominator = true;
        o.on('dead', () => {

        teamcounts[team]--;
        if (!teamcounts[team]) {
            delete teamcounts[team];
        }

            let killers = [];
            for (let instance of o.collisionArray) {
                if (isPlayerTeam(instance.team) && team !== instance.team) {
                    killers.push(instance);
                }
            }

            let killer = ran.choose(killers);
            killer = killer ? killer.master.master : { team: TEAM_BLUE, color: Config.MODE === "tdm" ? 3 : 12 };

            let newTeam = killer.team,
            newColor = getTeamColor(newTeam);

            for (let player of sockets.players) {
                if (player.body && player.body.team === newTeam) {
                    player.body.sendMessage("Press F to take control of the dominator.");
                }
            }

            let teamName = newTeam > 0 ? killer.name : getTeamName(newTeam);
            sockets.broadcast(`A dominator is now controlled by ${teamName}!`);
            if (teamcounts[newTeam] >= neededToWin && !gameWon) {
                gameWon = true;
                setTimeout(sockets.broadcast, 1500, teamName + " has won the game!");
                setTimeout(closeArena, 4500);
            }

        this.spawnSanctuary(tile, newTeam);
            sockets.broadcastRoom();
        });
    }

    playerWin() {
        if (this.gameActive) {
            this.gameActive = false;
            sockets.broadcast(getTeamName(TEAM_BLUE) + ' has won the game!');
            setTimeout(closeArena, 1500);
        }
    }
      //runs once when the server starts
    init() {
        Class.basic.UPGRADES_TIER_2.push("healer");
        //TODO: filter out tiles that are not of sanctuary type
        for (let tile of room.spawnable[TEAM_BLUE]) {
            this.spawnSanctuary(tile, TEAM_BLUE);
        }
        for (let tile of room.spawnable[TEAM_GREEN]) {
            this.spawnSanctuary(tile, TEAM_GREEN);
        }
        for (let tile of room.spawnable[TEAM_RED]) {
            this.spawnSanctuary(tile, TEAM_RED);
        }
        for (let tile of room.spawnable[TEAM_PURPLE]) {
            this.spawnSanctuary(tile, TEAM_PURPLE);
        }
    }
}

module.exports = { Risk };