class Hero extends Movable {
  constructor(x, y, factionId, id, mapId) {
    super(x, y);
    this.factionId = factionId;
    this.targetShip = null;
    this.id = id;
    this.mapId = mapId;
    this._fightPreset = null;

    this.lastAttackTime = 0;
    this.lastAttackedTime = 0;
  }

  lockAndAttack(targetType){
    this.lock(targetType);
    this.attack();
  }

  attack(){
    window.fightPresetsManager.fightPreset.attack();
  }

  get isAttacking(){
    return $.now() - this.lastAttackTime < 5100;
  }

  get isUnderAttack(){
    return $.now() - this.lastAttackedTime < 5100;
  }

  lock(targetType){
    this.setTargetShip(targetType);

    if (this.targetShip) {
      this.handleLock();
    }
  }

  handleLock(){
    this.targetShip.update();

    if (this.targetShip instanceof Ship && window.api.ships[this.targetShip.id]){
        window.api.lockShip(this.targetShip);
    }
  }

  setTargetShip(targetType) {
    const MAX_DISTANCE = 1000;

    this.targetShip = Object.values(window.api.ships).filter(ship =>
        ship.distanceTo(this.position) < MAX_DISTANCE && ship instanceof targetType
        ).sort((currentShip, nextShip) =>
            currentShip.distanceTo(this.position) - nextShip.distanceTo(this.position)
        )[0];
  }

  set fightPreset(preset){
    this._fightPreset = preset;
  }

  get fightPreset(){
    return this._fightPreset;
  }
}
