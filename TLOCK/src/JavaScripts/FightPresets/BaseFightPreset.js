class BaseFightPreset{
    constructor(){
        this.fightMixins = [];
        this._slotsManger = new SlotsManager();
    }

    attack(){
        this.handleAttackStart();
    }

    handleAttackStart(){
        setIntervalLimited(() => {
            if (this.startAttackAvailability) {
                window.api.startLaserAttack();
                this.slotsManager.handleAttack();
            }
        }, 150, 2);
    }

    get startAttackAvailability() {
        return window.hero.targetShip && window.hero.targetShip == window.api.lockedShip;
    }

    get attackAvailability(){
        // console.log(window.api.targetShip);
        // console.log(window.)
        return window.api.targetShip && window.hero.isAttacking
            && window.api.targetShip == window.api.lockedShip;
    }

    get slotsManager(){
        return this._slotsManger;
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