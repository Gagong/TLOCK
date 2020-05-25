class Api {
    constructor() {
        this.gates = [];
        this.ships = {};
        this.battlestation = null;
        this.lastMovement = 0;
    }

    resetTarget() {
        this.targetShip = null;
        this.attacking = false;
        this.triedToLock = false;
        this.lockedShip = null;
    }

    markHeroAsDead() {
        this.heroDied = true;
        Injector.injectScript("window.heroDied = true;");
    }

    lockShip(ship) {
        let pos = ship.position;
        let heroPos = window.hero.position;

        let scr  = `document.getElementById("preloader").lockShip(${ship.id},${Math.round(pos.x)},${Math.round(pos.y)},
                    ${Math.round(heroPos.x)},${Math.round(heroPos.y)});`;

        Injector.injectScript(scr);
    }

    pressKey(keyCode){

       // console.log(`key pressed ${keyCode}`);
        let scr  = `document.getElementById("preloader").pressKey(${48 + keyCode});`;
        Injector.injectScript(scr);
    }

    startLaserAttack() {
        Injector.injectScript('document.getElementById("preloader").laserAttack()');
    }


}