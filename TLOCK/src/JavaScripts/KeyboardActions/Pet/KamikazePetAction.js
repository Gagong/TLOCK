class KamikazePetAction extends BasePetAction{
    static get NAME(){
        return "PetKamikaze";
    }

    constructor(){
        super();
    }

    activatePetModule() {
        window.hero.pet.useGear(PetActions.GEAR_ACTIONS['KAMI']);
    }
}