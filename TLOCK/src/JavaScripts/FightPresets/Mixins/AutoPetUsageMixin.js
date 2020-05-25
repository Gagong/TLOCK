class AutoPetUsageMixin extends Observer{
    constructor(){
        super();
       // this.subscribeFor(window.hero.pet);
    }

    handlePetUpdate(){
        const KAMI_GEAR_ID = PetActions.GEAR_ACTIONS['KAMI'];

        if (window.hero.pet.timerGearStatuses[KAMI_GEAR_ID]){
            window.hero.pet.reviveAndSetGear(KAMI_GEAR_ID);
        }
        //else if ()
    }

    handleNotify(){
        this.handlePetUpdate();
    }
}