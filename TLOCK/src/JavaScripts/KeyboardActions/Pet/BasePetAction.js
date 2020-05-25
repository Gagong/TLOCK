class BasePetAction extends BaseAction{
    constructor(){
        super();
    }

    handleAction() {
        window.hero.pet.revive();
        window.hero.pet.activate();

        setTimeout(
            this.activatePetModule, 200
        );
    }

    activatePetModule(){
        ;
    }
}