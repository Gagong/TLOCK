class AmmoUpdateEventHandler {
  constructor() {
    this._handler = function (e) {

      let message= e.detail.split("|");

      let id = parseInt(message[0]);
      let item = JSON.parse(message[1]);

      console.log(item);
     // let itemStatus = JSON.parse(message[1])['activatable'];

      // console.log(id);
      // console.log(item['activatable']);
      // console.log(item['id']);

      window.slotsManager.handleSlotUpdate(id, item);
    }
  }

  get handler() {
    return this._handler;
  }
}