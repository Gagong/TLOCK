class Pet extends Observable{
    constructor(){
       super();
       this._isDead = true;
       this.timerGearStatuses = {};
       this.id = null;
       this.lastTimeUpdated = 0;
    }

    useGear(gearId){
        let hasTimer = Object.values(this.timerGearStatuses).includes(gearId);
        let gearActivatable = !hasTimer ? true : this.timerGearStatuses[gearId];

        if (gearActivatable ) {
            //console.log("gear used");
            window.api.usePetModule(gearId);
        }
    }

    revive(){
        if (this._isDead) {
            window.api.usePet(PetActions.DEFAULT_ACTIONS['REVIVE']);
        }
    }

    activate(){
        window.api.usePet(PetActions.DEFAULT_ACTIONS['ACTIVATE']);
    }

    setGuardMode(){
        window.api.usePet(PetActions.DEFAULT_ACTIONS['GUARD']);
    }

    reviveAndGuard(){
        this.reviveAndActivate();
        this.setGuardMode();
    }

    reviveAndActivate(){
        this.revive();
        this.activate();
    }

    get isActivated(){
        return $.now() - this.lastTimeUpdated < 10000;
    }

    reviveAndSetGear(gearId){
        this.reviveAndActivate();
        this.useGear(gearId);
    }

    set isDead(status){
        this._isDead = status;
    }

    updateTimerGearStatuses(gearCooldownId, gearStatus){
        let gearId = PetActions.GEARD_COOLDOWN_STATUSES[gearCooldownId];
        this.timerGearStatuses[gearId] = gearStatus;
    }

    handleUpdate({deadStatus = null, gear = null, id = null}){
       // console.log(`${deadStatus}, ${gear}, ${id}`);
        this.isDead = deadStatus ? deadStatus : this._isDead;
        this.id = id ? id : this.id;

        if (gear){
            this.updateTimerGearStatuses(gear.cooldownId, gear.status)
        }

        this.notifyObservers();
        this.lastTimeUpdated = $.now();
    }

}