class PetActivatedHandler {
  static get ID() {
    return 9206;
  }

  constructor() {
    this._handler = function (e, a) {
      let petInfo = JSON.parse(e.detail);

      let petId = petInfo[Variables.petId];
      let masterId = petInfo[Variables.petMasterId];

      if (masterId == window.hero.id){
        window.hero.pet.handleUpdate({deadStatus: false, id: petId});
      }
    }
  }

  get handler() {
    return this._handler;
  }
}