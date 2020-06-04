class PetDestroyedHandler {
  static get ID() {
    return 21739;
  }

  constructor() {
    this._handler = function (e, a) {
      window.hero.pet.handleUpdate({deadStatus: true});
    }
  }

  get handler() {
    return this._handler;
  }
}