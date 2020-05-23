class BaseFightPreset{
    constructor(){
        this.fightMixins = [];
    }

    attack(){
        this.handleAttackStart();
    }

    handleAttackStart(){
        setIntervalLimited(() => {
            if (window.api.lockedShip === window.hero.targetShip) {
                window.api.startLaserAttack();
            }
        }, 150, 2);
    }

    handleAmmo(){
        ;
    }



    // handleFightMixins(){
    //     this.fightMixins.forEach(fightMixin =>
    //         fightMixin.attack()
    //     )
    // }
    //
    // setFightMixin(){
    //
    // }
    //
    // updateCountdownStatuses(){
    //
    // }
    //
    // set countDownItems(items){
    //     this._countDownItems = items;
    // }


}