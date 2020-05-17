class ShipAttackHandler {
  static get ID() {
    return 5406;
  }

  constructor() {
    this._handler = function (e, a) {
      let shipAttackCmd = JSON.parse(e.detail);
      let attackerId = shipAttackCmd[Variables.attackerId];
      let attackedShipId = shipAttackCmd[Variables.attackedId];
      let ship = a.ships[attackedShipId];

      if (attackerId === window.hero.id) {
        window.attackWindow.hp(shipAttackCmd[Variables.attackHp]);
        window.attackWindow.shd(shipAttackCmd[Variables.attackShd]);
        window.attackWindow.targetName(ship.name);
      }

      if (attackedShipId === window.hero.id) {
        window.hero.hp = shipAttackCmd[Variables.attackHp];
        window.hero.shd = shipAttackCmd[Variables.attackShd];
      }

      // if (window.hero.targetShip && attackedShipId === window.hero.targetShip.id)
      //   api.lastAttack = $.now();

      // let npcshd = shipAttackCmd[Variables.selectMaxShd];

      if (ship) {
        ship.hp = shipAttackCmd[Variables.attackHp];
        ship.shd = shipAttackCmd[Variables.attackShd];
        ship.isAttacked = attackerId !== window.hero.id;
      }
    }
  }

  get handler() {
    return this._handler;
  }
}
