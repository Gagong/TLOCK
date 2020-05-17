class ShipCreateHandler {
  static get ID() {
    return 1854;
  }

  constructor() {
    this._handler = function (e, a) {
      e.detail = e.wholeMessage.split("|").slice(1).join("");

      let shipCreateCmd = JSON.parse(e.detail);

      let params = {
        'x': shipCreateCmd.x,
        'y': shipCreateCmd.y,
        'id': shipCreateCmd.userId,
        'name': shipCreateCmd.userName,
        'modifier': shipCreateCmd.modifier,
        'cloaked': shipCreateCmd.cloaked,
      };

      a.ships[shipCreateCmd.userId] = ShipTypeFactory.createShipByType(
          params,
          shipCreateCmd.npc,
          shipCreateCmd.factionId,
          shipCreateCmd[Variables.clanDiplomacy].type
      );
    }
  }

  get handler() {
    return this._handler;
  }
}