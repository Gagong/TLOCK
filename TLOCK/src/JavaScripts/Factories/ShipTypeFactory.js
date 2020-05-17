class ShipTypeFactory{
    static createShipByType(params, isNpc, factionId, clanDiplomacy){
        let isEnemy = window.hero.factionId !== factionId && clanDiplomacy !== 1
                        && clanDiplomacy !== 2 || clanDiplomacy === 3;

        return isNpc ? new Npc(params)
                : isEnemy ? new Enemy(params)
                : new Ally(params);
    }


}