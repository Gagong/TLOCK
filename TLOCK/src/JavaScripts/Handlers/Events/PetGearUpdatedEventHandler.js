class PetGearUpdatedEventHandler{
  constructor() {
    this._handler = function (e) {
      let gearStatus = e.detail.split("|").map(status => parseInt(status));
      //console.log(gearStatus);
      let gear = {
        cooldownId: gearStatus[0],
        status: gearStatus[1],
      };

      window.hero.pet.handleUpdate({gear});
      //window.fightManager.handleMixinUpdate('PET');
    }
  }

  get handler() {
    return this._handler;
  }
}