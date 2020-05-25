class GuardPetAction extends BasePetAction{
    static get NAME(){
        return "PetGuard";
    }

    constructor(){
        super();
    }

    activatePetModule() {
        window.hero.pet.setGuardMode();
    }
}