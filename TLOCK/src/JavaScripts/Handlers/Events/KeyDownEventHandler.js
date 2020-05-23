class KeyDownEventHandler {
  constructor() {
    this._handler = function (e) {
     // console.log(e);

      let action = window.keyManager.getActionByKey(e);

      if (action) {
        action.execute();
      }
    };
  }

  get handler() {
    return this._handler;
  }
}