class AmmoUpdateEventHandler {
  constructor() {
    this._handler = function (e) {
      let message= e.detail.split("|");

      let id = parseInt(message[0]);
      let item = JSON.parse(message[1]);

      if (id != 0) {
        //console.log(item);
        item.hasTimer = item.cooldownGroupType != 0;
        item.activatable = item.timerVO.timerState == "ready";
        window.fightPresetsManager.handleAmmunitionUpdate(id, item);
      }
    }
  }

  get handler() {
    return this._handler;
  }
}