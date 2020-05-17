class Hero extends Movable {
  constructor(x, y, factionId, id, mapId) {
    super(x, y);
    this.factionId = factionId;
    this.targetShip = null;
    this.id = id;
    this.mapId = mapId;
  }

  lockAndAttack(targetType){
    this.lock(targetType);
    this.attack();
  }

  attack(){
    if (this.targetShip){
      this.handleAttack(this.targetShip);
    }
  }

  handleAttack(shipToAttack){
    let handler = () => {
      if (window.api.lockedShip === shipToAttack) {
        window.api.lastAttack = $.now();
        window.api.attacking = true;
        console.log('locked');
        window.api.startLaserAttack();
      }
    };

    setIntervalLimited(handler, 150, 2);
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
}